"use client";
import { useRef, useState, useEffect } from 'react';
import { FiVolume2, FiVolumeX, FiMusic, FiMaximize } from 'react-icons/fi';

export default function Test() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25); // Default set to 25%
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyzer, setAnalyzer] = useState<AnalyserNode | null>(null);
  const [audioData, setAudioData] = useState<Uint8Array>(new Uint8Array(0));
  const [error, setError] = useState<string | null>(null);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Ensure audio volume is set correctly on initial render
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  // Initialize audio context and analyzer
  useEffect(() => {
    if (isPlaying && !audioContext) {
      try {
        // Use browser compatibility pattern
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) {
          throw new Error("AudioContext not supported in this browser");
        }
        
        const context = new AudioContextClass();
        const analyzerNode = context.createAnalyser();
        analyzerNode.fftSize = 256;
        
        if (audioRef.current) {
          const audioSource = context.createMediaElementSource(audioRef.current);
          audioSource.connect(analyzerNode);
          analyzerNode.connect(context.destination);
          
          setAudioContext(context);
          setAnalyzer(analyzerNode);
          setAudioData(new Uint8Array(analyzerNode.frequencyBinCount));
        }
      } catch (err) {
        console.error("Audio initialization error:", err);
        setError(err instanceof Error ? err.message : "Error initializing audio");
        setIsPlaying(false);
      }
    }
  }, [isPlaying, audioContext]);
  
  // Draw audio visualizer
  useEffect(() => {
    if (!analyzer || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    // Make canvas fill the container
    const resizeCanvas = () => {
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    // Set initial size and listen for resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) return;
    
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    let animationFrameId: number;
    
    // Function to map frequency data to colors with better low-volume responsiveness
    const getColor = (value: number, alpha = 1) => {
      // Enhance low values with logarithmic scaling
      const enhancedValue = Math.log10(1 + value * 9) / Math.log10(10);
      
      // Create gentle color transitions from blue to purple based on frequency
      const r = Math.floor(150 + enhancedValue * 60);
      const g = Math.floor(120 + enhancedValue * 40);
      const b = Math.floor(210 + enhancedValue * 30);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    
    // Particle system
    const particles: Particle[] = [];
    const particleCount = 120; // Increased particle count for full screen
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      hue: number;
      originalSize: number;
      life: number;
      maxLife: number;
      type: 'bass' | 'mid' | 'treble';
      pulsePhase: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.originalSize = this.size;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.hue = Math.random() * 60; // Variation in hue
        this.life = 0;
        this.maxLife = 200 + Math.random() * 100;
        
        // Assign each particle to a frequency range type
        const typeRandom = Math.random();
        this.type = typeRandom < 0.33 ? 'bass' : typeRandom < 0.66 ? 'mid' : 'treble';
        
        // Add pulse phase for ambient movement even when quiet
        this.pulsePhase = Math.random() * Math.PI * 2;
      }
      
      update(bassLevel: number, midLevel: number, trebleLevel: number) {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap particles around screen edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
        
        // Update pulse phase (creates ambient movement)
        this.pulsePhase += 0.01;
        if (this.pulsePhase > Math.PI * 2) this.pulsePhase = 0;
        
        // Get intensity based on particle's frequency type
        let intensity = 0;
        if (this.type === 'bass') {
          intensity = bassLevel;
        } else if (this.type === 'mid') {
          intensity = midLevel;
        } else {
          intensity = trebleLevel;
        }
        
        // Enhance low intensity with logarithmic scaling + add ambient pulsing
        const enhancedIntensity = Math.log10(1 + intensity * 9) / Math.log10(10);
        const ambientPulse = (Math.sin(this.pulsePhase) + 1) * 0.05; // Small ambient pulse
        
        // Ensure minimum reactivity even with very low volume
        const minReactivity = 0.1;
        
        // Particle grows with sound intensity + ambient pulse
        this.size = this.originalSize + (Math.max(enhancedIntensity, minReactivity) * 4) + ambientPulse;
        
        // Particle lifecycle
        this.life++;
        if (this.life >= this.maxLife) {
          this.life = 0;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }
      
      draw(ctx: CanvasRenderingContext2D, bassLevel: number, midLevel: number, trebleLevel: number) {
        // Calculate opacity based on lifecycle and sound intensity
        let opacity = this.life < 20 ? this.life / 20 : 
                     this.life > this.maxLife - 20 ? (this.maxLife - this.life) / 20 : 1;
        
        // Get the right intensity based on particle type
        let intensity = this.type === 'bass' ? bassLevel : 
                        this.type === 'mid' ? midLevel : trebleLevel;
                        
        // Enhance low intensity
        intensity = Math.log10(1 + intensity * 9) / Math.log10(10);
        
        // Add pulse variation for subtle movement even when quiet
        const pulseFactor = (Math.sin(this.pulsePhase) + 1) * 0.5;
        opacity *= 0.7 + (pulseFactor * 0.3);
        
        // Create a gradient for each particle
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        
        // Color based on frequency type 
        let r, g, b;
        if (this.type === 'bass') {
          r = 140 + this.hue; g = 80; b = 200 + (intensity * 55);  // Purple for bass
        } else if (this.type === 'mid') {
          r = 100; g = 140 + this.hue; b = 240;  // Blue for mids
        } else {
          r = 190; g = 140 + this.hue/2; b = 255; // Lighter purple for highs
        }
        
        // Ensure we stay in valid RGB range
        r = Math.min(255, r); g = Math.min(255, g); b = Math.min(255, b);
        
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Create circular glow centerpoints
    const glowPoints = Array(5).fill(0).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 200 + 100,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      phase: Math.random() * Math.PI * 2,
    }));
    
    const draw = () => {
      animationFrameId = requestAnimationFrame(draw);
      
      analyzer.getByteFrequencyData(dataArray);
      
      // Calculate audio levels for different frequency ranges with better scaling for low volumes
      const bassData = dataArray.slice(0, 10);
      const midData = dataArray.slice(10, 30);
      const trebleData = dataArray.slice(30, 60);
      
      // Calculate average levels with better response at low volumes
      const calcAverage = (data: Uint8Array) => {
        const sum = data.reduce((a, b) => a + b, 0);
        const avg = sum / (data.length * 255); // Normalize to 0-1
        // Apply curve for better low-volume response:
        return Math.pow(avg, 0.5); // Square root makes low values more significant
      };
      
      const bassLevel = calcAverage(bassData);
      const midLevel = calcAverage(midData);
      const trebleLevel = calcAverage(trebleData);
      
      // Overall sound intensity with minimum ambient level
      const soundIntensity = Math.max(0.05, (bassLevel + midLevel + trebleLevel) / 3);
      
      // Clear canvas with a gradient background
      const bgGradient = canvasCtx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, 'rgba(10, 5, 20, 0.98)');
      bgGradient.addColorStop(1, 'rgba(15, 10, 40, 0.98)');
      canvasCtx.fillStyle = bgGradient;
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw moving glow points
      glowPoints.forEach((point, i) => {
        // Update position with a gentle float
        point.x += point.speedX;
        point.y += point.speedY;
        point.phase += 0.005;
        
        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.speedX *= -1;
        if (point.y < 0 || point.y > canvas.height) point.speedY *= -1;
        
        // Size varies with different frequency levels + ambient minimum
        let sizeModifier = 0;
        if (i % 3 === 0) { 
          sizeModifier = Math.max(0.2, bassLevel); // Bass response with minimum
        } else if (i % 3 === 1) {
          sizeModifier = Math.max(0.15, midLevel); // Mid response with minimum
        } else {
          sizeModifier = Math.max(0.1, trebleLevel); // Treble response with minimum
        }
        
        // Add ambient pulsing
        sizeModifier += (Math.sin(point.phase) + 1) * 0.1;
        
        const currentSize = point.size * (1 + sizeModifier * 0.8);
        
        // Create glow effect for each point
        const glow = canvasCtx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, currentSize
        );
        
        // Each glow point has a slightly different color
        const glowColor = i % 3 === 0 ? 
          `rgba(80, 40, 140, ${0.1 + bassLevel * 0.2})` : 
          i % 3 === 1 ? 
          `rgba(40, 60, 160, ${0.1 + midLevel * 0.2})` : 
          `rgba(100, 50, 180, ${0.1 + trebleLevel * 0.2})`;
        
        glow.addColorStop(0, glowColor);
        glow.addColorStop(1, 'rgba(0, 0, 15, 0)');
        
        canvasCtx.fillStyle = glow;
        canvasCtx.beginPath();
        canvasCtx.arc(point.x, point.y, currentSize, 0, Math.PI * 2);
        canvasCtx.fill();
      });
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update(bassLevel, midLevel, trebleLevel);
        particle.draw(canvasCtx, bassLevel, midLevel, trebleLevel);
      });
      
      // Add subtle central constellation pattern
      if (soundIntensity > 0.05) {
        canvasCtx.strokeStyle = `rgba(200, 220, 255, ${Math.min(0.2, soundIntensity * 0.5)})`;
        canvasCtx.lineWidth = 0.5;
        
        // Find "close" particles to connect with lines
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Only connect nearby particles, distance varies with intensity
            if (distance < 60 + (soundIntensity * 80)) {
              // Line opacity fades with distance
              const opacity = (1 - distance / 140) * 0.2 * Math.max(0.2, soundIntensity);
              
              canvasCtx.beginPath();
              canvasCtx.moveTo(p1.x, p1.y);
              canvasCtx.lineTo(p2.x, p2.y);
              canvasCtx.strokeStyle = `rgba(180, 210, 255, ${opacity})`;
              canvasCtx.stroke();
            }
          }
        }
      }
    };
    
    draw();
    
    // Clean up
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [analyzer]);
  
  // Toggle play/pause
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Resume AudioContext if it was suspended (needed for Chrome)
      if (audioContext?.state === 'suspended') {
        audioContext.resume();
      }
      
      audio.play().catch(err => {
        console.error("Error playing audio:", err);
        setError("Couldn't play audio. File might be missing or format not supported.");
        setIsPlaying(false);
      });
      
      if (!error) {
        setIsPlaying(true);
      }
    }
  };
  
  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  
  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden bg-slate-900">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="container mx-auto h-full flex flex-col items-center justify-between p-6">
          {/* Title at top */}
          <h1 className="text-4xl font-thin tracking-wide text-white opacity-80 mt-4">
            <span className="mr-2 opacity-70">✧</span> 
            Cosmic Ambient
            <span className="ml-2 opacity-70">✧</span>
          </h1>
          
          {/* Controls at bottom */}
          <div className="w-full flex flex-col items-center gap-8 mb-8 pointer-events-auto">
            {error && (
              <div className="mb-4 p-3 bg-red-900 bg-opacity-20 backdrop-blur-sm border border-red-700 border-opacity-30 rounded-xl text-sm text-red-100 max-w-md">
                {error}
              </div>
            )}
            
            <div className="flex items-center gap-6">
              <button
                onClick={togglePlay}
                className="group px-8 py-4 bg-indigo-900 bg-opacity-40 hover:bg-opacity-60 rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 flex items-center gap-3 backdrop-blur-sm border border-indigo-800 border-opacity-40"
                disabled={!!error}
              >
                <FiMusic className="group-hover:animate-pulse" size={20} />
                <span className="font-medium tracking-wide">
                  {isPlaying ? 'Pause Music' : 'Play Music'}
                </span>
              </button>
              
              <div className="flex items-center gap-4 bg-indigo-900 bg-opacity-30 backdrop-blur-sm rounded-full py-2 px-4 border border-indigo-800 border-opacity-30">
                {isPlaying ? 
                  <FiVolume2 size={20} className="text-indigo-300" /> : 
                  <FiVolumeX size={20} className="text-slate-400" />
                }
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-32 md:w-40 h-2 bg-slate-700 bg-opacity-50 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-300 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-indigo-300 [&::-moz-range-thumb]:border-0"
                />
                <span className="text-sm min-w-[36px] text-center text-indigo-100 font-light">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <audio 
        ref={audioRef} 
        src="/audio/background-music.mp3" 
        loop 
        onEnded={() => setIsPlaying(false)}
        onError={() => setError("Audio file not found or format not supported")}
      />
      
      <style jsx global>{`
        body {
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}