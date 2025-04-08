"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaArrowRight, FaGithub, FaLinkedin, FaCode, FaServer, FaDatabase, FaDiscord } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiPython } from "react-icons/si";
import { LuBraces } from "react-icons/lu";
import { TbTerminal2 } from "react-icons/tb";

export default function Home() {
  const { darkMode } = useTheme();
  const [age, setAge] = useState({ years: 0, days: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterLine, setTypewriterLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Code snippet with syntax highlighting for terminal
  const codeSnippet = [
    "class <span class='text-purple-400'>Developer</span> {",
    "  <span class='text-blue-400'>constructor</span>() {",
    "    this.<span class='text-green-400'>name</span> = <span class='text-yellow-400'>'Nirmal Patel'</span>;",
    "    this.<span class='text-green-400'>role</span> = <span class='text-yellow-400'>'Full-Stack Developer'</span>;",
    "    this.<span class='text-green-400'>passions</span> = [<span class='text-yellow-400'>'Frontend Dev'</span>, <span class='text-yellow-400'>'Backend Dev'</span>, <span class='text-yellow-400'>'IoT'</span>, <span class='text-yellow-400'>'Problem Solving'</span>];",
    "  }",
    "}",
  ];

  // Simplified age calculation
  const calculateAge = () => {
    const birthDate = new Date(Date.UTC(2003, 7, 7));
    const now = new Date();
    
    let years = now.getUTCFullYear() - birthDate.getUTCFullYear();
    const currentMonth = now.getUTCMonth();
    const birthMonth = birthDate.getUTCMonth();
    
    if (currentMonth < birthMonth || 
        (currentMonth === birthMonth && now.getUTCDate() < birthDate.getUTCDate())) {
      years--;
    }
    
    // Calculate days more efficiently
    const yearsPassed = years;
    const birthDateThisYear = new Date(Date.UTC(now.getUTCFullYear(), birthMonth, birthDate.getUTCDate()));
    if (now < birthDateThisYear) {
      birthDateThisYear.setUTCFullYear(now.getUTCFullYear() - 1);
    }
    
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const days = Math.floor((now.getTime() - birthDateThisYear.getTime()) / millisecondsInDay);
    
    return { years, days };
  };

  // Handle typewriter effect with fixed implementation to prevent infinite loops
  useEffect(() => {
    setAge(calculateAge());
    setIsLoaded(true);
    
    // Separate cursor blinking effect with no dependencies that change per render
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []); // Empty dependency array - runs only once on mount

  // Separate effect for typewriter animation
  useEffect(() => {
    if (!isLoaded) return;
    
    let timeout: NodeJS.Timeout | undefined;
    
    const runTypewriter = () => {
      if (typewriterLine < codeSnippet.length) {
        // Get plain text version of current line (without HTML tags)
        const currentLineText = codeSnippet[typewriterLine].replace(/<[^>]*>|<\/[^>]*>/g, '');
        
        if (typewriterIndex < currentLineText.length) {
          // Find the position in the original string with HTML
          let htmlCount = 0;
          let plainTextIndex = 0;
          let htmlIndex = 0;
          
          while (plainTextIndex <= typewriterIndex && htmlIndex < codeSnippet[typewriterLine].length) {
            // If we're at a tag's start, skip the entire tag
            if (codeSnippet[typewriterLine][htmlIndex] === '<') {
              while (htmlIndex < codeSnippet[typewriterLine].length && 
                     codeSnippet[typewriterLine][htmlIndex] !== '>') {
                htmlIndex++;
                htmlCount++;
              }
              htmlIndex++; // Skip the closing '>'
              htmlCount++;
            } else {
              plainTextIndex++;
              htmlIndex++;
            }
          }
          
          // Set the next piece of text with HTML tags preserved
          timeout = setTimeout(() => {
            setTypewriterIndex(typewriterIndex + 1);
            setTypewriterText(codeSnippet[typewriterLine].substring(0, htmlIndex));
          }, Math.random() * 50 + 30);
        } else {
          // Move to next line
          timeout = setTimeout(() => {
            setTypewriterLine(typewriterLine + 1);
            setTypewriterIndex(0);
            setTypewriterText("");
          }, 100);
        }
      } else if (!typewriterComplete) {
        setTypewriterComplete(true);
      }
    };
    
    runTypewriter();
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isLoaded, typewriterIndex, typewriterLine, typewriterComplete, codeSnippet]);

  // Theme styles with enhanced terminal theming for both modes
  const theme = {
    bg: darkMode ? 'bg-gray-900' : 'bg-slate-50',
    text: darkMode ? 'text-gray-100' : 'text-gray-800',
    muted: darkMode ? 'text-gray-400' : 'text-gray-500',
    accent: darkMode ? 'text-cyan-400' : 'text-cyan-600',
    card: darkMode ? 'bg-gray-800/70' : 'bg-white/80',
    terminalHeader: darkMode ? 'bg-gray-800' : 'bg-gray-200',
    terminalBody: darkMode ? 'bg-gray-950' : 'bg-gray-800',
    lightTerminalBody: darkMode ? 'bg-gray-900' : 'bg-gray-700',
    terminalText: darkMode ? 'text-green-400' : 'text-green-300',
    commandText: darkMode ? 'text-gray-300' : 'text-gray-200',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    code: darkMode ? 'bg-gray-950' : 'bg-gray-800',
    button: darkMode ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-cyan-600 hover:bg-cyan-700',
    buttonAlt: darkMode 
      ? 'bg-gray-800 hover:bg-gray-700 border-gray-700' 
      : 'bg-white hover:bg-gray-100 border-gray-200',
  };

  if (!isLoaded) {
    return (
      <div className={`h-screen ${theme.bg} flex justify-center items-center`}>
        <div className={`h-8 w-8 rounded-full border-2 border-t-transparent ${darkMode ? 'border-cyan-400' : 'border-cyan-600'} animate-spin`}></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-inter pt-20`}>
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Terminal Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className={`${theme.terminalHeader} rounded-t-lg px-4 py-2 flex items-center border-t border-l border-r ${theme.border}`}>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm font-mono">terminal@nirmal</div>
          </div>
          
          <div className={`${theme.terminalBody} ${theme.terminalText} p-4 sm:p-6 rounded-b-lg font-mono text-xs sm:text-sm md:text-base overflow-x-auto border-b border-l border-r ${theme.border}`}>
            <div className="flex items-start mb-4">
              <span className="text-pink-400 mr-2">$</span>
              <p><span className="text-blue-400">cat</span> <span className="text-yellow-400">welcome.txt</span></p>
            </div>
            <div className="pl-4 mb-6">
              <p className="mb-2 text-gray-300">👋 Hello! I'm <span className="text-cyan-400 font-semibold">Nirmal Patel</span>, a Full-Stack Developer.</p>
              <p className={theme.commandText}>Building digital solutions with clean, efficient code.</p>
            </div>
            
            <div className="flex items-start mb-4">
              <span className="text-pink-400 mr-2">$</span>
              <p><span className="text-blue-400">node</span> <span className="text-yellow-400">about.js</span></p>
            </div>
            <div className="pl-4 whitespace-pre-wrap break-words">
              {/* Display completed lines */}
              {codeSnippet.slice(0, typewriterLine).map((line, i) => (
                <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
              
              {/* Current typing line with cursor */}
              {typewriterLine < codeSnippet.length && (
                <div className="flex items-start">
                  <span dangerouslySetInnerHTML={{ __html: typewriterText }}></span>
                  <span className={`inline-block w-2 h-5 ${theme.terminalText} ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                </div>
              )}
              
              {/* Show completion message when done */}
              {typewriterComplete && (
                <p className={`${theme.terminalText} mt-2 flex items-center`}>
                  ✓ Developer initialized successfully
                </p>
              )}
            </div>
          </div>
        </motion.div>
        
        {/* Main Content Grid - Improved for better desktop responsiveness */}
        <div className="grid gap-6 mb-8">
          {/* Profile & Tech Stack Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Profile Card */}
            <motion.div 
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Profile Card */}
              <div className={`${theme.card} rounded-lg p-5 sm:p-6 border ${theme.border} backdrop-blur-sm relative overflow-hidden`}>
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"></div>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-cyan-500">
                      <img src="/images/nirmal_profile_pic.JPG" alt="Nirmal Patel" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                      <FaCode className="text-[10px] md:text-xs text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold">Nirmal Patel</h2>
                    <p className={`${theme.accent} text-xs sm:text-sm md:text-base`}>Full-Stack Developer</p>
                    
                    <div className="flex gap-2 mt-2">
                      <a 
                        href="https://github.com/nirmal1090" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded text-sm ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                        aria-label="GitHub Profile"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/nirmal-patel-3995b0251" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded text-sm ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                        aria-label="LinkedIn Profile"
                      >
                        <FaLinkedin />
                      </a>
                      <a 
                        href="https://discord.com/users/727075947638947852" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded text-sm ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                        aria-label="Discord Profile"
                      >
                        <FaDiscord />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-dashed border-gray-600">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`font-mono text-xl sm:text-2xl md:text-3xl font-bold ${theme.accent}`}>{age.years}</div>
                      <p className={`${theme.muted} text-xs uppercase tracking-wider`}>Years</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className={`font-mono text-xl sm:text-2xl md:text-3xl font-bold ${theme.accent}`}>{age.days}</div>
                      <p className={`${theme.muted} text-xs uppercase tracking-wider`}>Days</p>
                    </div>
                  </div>
                  <p className={`text-xs ${theme.muted} text-center mt-2`}>
                    Execution time: {new Date().toLocaleTimeString()}
                  </p>
                </div>
              </div>
              
              {/* Tech Stack Card */}
              <div className={`${theme.card} rounded-lg p-5 sm:p-6 border ${theme.border} backdrop-blur-sm`}>
                <div className="flex items-center gap-2 mb-4">
                  <LuBraces className={`${theme.accent} text-lg`} />
                  <h3 className="font-semibold text-base md:text-lg">Main Tech Stack</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  {[
                    { icon: SiReact, label: "React", color: "text-blue-400" },
                    { icon: SiNextdotjs, label: "Next.js", color: "text-gray-200" },
                    { icon: SiNodedotjs, label: "Node.js", color: "text-green-400" },
                    { icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
                    { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
                    { icon: SiPython, label: "Python", color: "text-blue-300" },
                    { icon: FaDatabase, label: "Databases", color: "text-orange-400" },
                    { icon: FaServer, label: "Backend", color: "text-purple-400" },
                    { icon: TbTerminal2, label: "DevOps", color: "text-green-300" },
                  ].map((tech, i) => (
                    <div key={i} className="flex flex-col items-center py-2 px-1 hover:bg-gray-800/20 rounded-lg transition-colors">
                      <tech.icon className={`text-base sm:text-xl md:text-2xl ${tech.color}`} />
                      <span className="text-[10px] sm:text-xs mt-1 text-center">{tech.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Projects & Code */}
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
                {/* Featured Projects */}
                <div className={`${theme.card} rounded-lg p-5 sm:p-6 border ${theme.border} backdrop-blur-sm`}>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                  <FaCode className={`${theme.accent} text-lg`} />
                  <h3 className="font-semibold text-base md:text-lg">Featured Projects</h3>
                  </div>
                  <a 
                  href="/projects" 
                  className={`text-xs md:text-sm flex items-center gap-1 ${theme.accent} hover:underline`}
                  >
                  <span>view all</span>
                  <FaArrowRight className="text-xs relative top-[1px]" />
                  </a>
                </div>
                
                <div className="space-y-4">
                    {[
                    {
                    name: "Preo v25.0.8",
                    description: "Discord Music Bot which now serves over 423,000 users.",
                    tags: ["Discord.js", "Node.js", "MongoDB", "Lavalink v4"],
                    status: "Online",
                    link: "https://preo.me/"
                    },
                    {
                    name: "Portfolio v20.1.22",
                    description: "A Modern Web Portfolio with Elegant Animations and Innovative CSS.",
                    tags: ["Next.js", "Node.js", "React", "Framer Motion", "Tailwind CSS"],
                    status: "Online",
                    link: "/"
                    }                    
                    ].map((project, i) => (
                    <a 
                    key={i} 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${darkMode ? 'bg-gray-850' : 'bg-gray-100'} rounded-lg p-4 md:p-5 border ${theme.border} hover:border-cyan-500/50 transition-colors cursor-pointer group block`}
                    >
                    <div className="flex justify-between items-center flex-wrap">
                    <h4 className="font-medium flex items-center gap-1.5 text-sm sm:text-base md:text-lg mb-1 sm:mb-0">
                      <span className="block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></span>
                      {project.name}
                    </h4>
                    <div className={`text-xs px-1.5 py-0.5 rounded font-mono ${darkMode ? 'bg-gray-700 text-green-400' : 'bg-gray-200 text-green-500'}`}>
                      {project.status}
                    </div>
                    </div>
                    
                    <p className={`${theme.muted} text-xs sm:text-sm md:text-base mt-2 line-clamp-2`}>{project.description}</p>
                    
                    <div className="flex justify-between items-center mt-3 flex-wrap">
                    <div className="flex gap-1.5 flex-wrap">
                      {project.tags.map((tag, j) => (
                      <span 
                      key={j}
                      className={`text-[10px] sm:text-xs md:text-sm px-1.5 py-0.5 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} ${theme.muted} mb-1 sm:mb-0`}
                      >
                      {tag}
                      </span>
                      ))}
                    </div>
                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-cyan-600 opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaArrowRight className="text-xs md:text-sm text-white" />
                    </div>
                    </div>
                    </a>
                    ))}
                </div>
                </div>
              
              {/* Code Snippet with light/dark mode support */}
              <div className={`${theme.card} rounded-lg p-5 sm:p-6 border ${theme.border} backdrop-blur-sm`}>
                <div className="flex items-center gap-2 mb-4">
                  <TbTerminal2 className={`${theme.accent} text-lg`} />
                  <h3 className="font-semibold text-base md:text-lg">Current Focus</h3>
                </div>
                
                <div className={`${theme.code} rounded-lg p-3 sm:p-4 text-xs sm:text-sm md:text-base font-mono ${theme.commandText} overflow-x-auto`}>
                  <pre className="whitespace-pre-wrap sm:whitespace-pre">
<span className="text-pink-400">function</span> <span className="text-blue-400">getCurrentFocus</span>() {'{'}
  <span className="text-green-400"> // Building clean, maintainable code </span>
  <span className="text-pink-400">const</span> skills = [
    <span className="text-yellow-400">'Frontend Excellence'</span>,
    <span className="text-yellow-400">'Scalable Architecture'</span>,
    <span className="text-yellow-400">'IoT Integration'</span>,
    <span className="text-yellow-400">'Performance Optimization'</span>
  ];
  
  <span className="text-green-400"> // Always learning new technologies </span>
  <span className="text-pink-400">return</span> skills.<span className="text-blue-400">map</span>(skill =&gt; <span className="text-blue-400">skill.toUpperCase</span>());
{'}'}</pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`${darkMode ? 'bg-gradient-to-r from-cyan-900 to-blue-900' : 'bg-gradient-to-r from-cyan-600 to-blue-700'} rounded-lg p-5 sm:p-6 md:p-8 text-white relative overflow-hidden`}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="text-6xl sm:text-9xl font-mono tracking-widest">{'{'}{'}'}</div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Ready to debug my journey?</h2>
              <p className="text-cyan-100 max-w-md text-sm sm:text-base">Explore my development path, project repositories, or initiate a collaboration request.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/journey"
                className={`px-4 py-2 rounded bg-white text-cyan-900 font-medium flex items-center justify-center gap-2 hover:bg-cyan-50 transition-colors text-sm sm:text-base`}
              >
                <span>Journey</span>
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href="/projects"
                className={`px-4 py-2 rounded bg-cyan-800 bg-opacity-60 text-white font-medium flex items-center justify-center gap-2 hover:bg-opacity-80 transition-colors border border-cyan-700 text-sm sm:text-base`}
              >
                <span>Projects</span>
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}