"use client";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="flex items-center gap-3">
      {/* Improved label styling */}
      <div className="flex bg-opacity-20 px-5 py-1 rounded">
        <span className={`text-sm font-semibold ${darkMode ? 'text-blue-300' : 'text-white'}`}>
          {darkMode ? 'Dark' : 'Light'} Mode
        </span>
      </div>
      
      <motion.div 
        onClick={toggleDarkMode}
        className={`relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1 transition-all duration-300 ${
          darkMode ? 'bg-gray-800 border-blue-500' : 'bg-blue-100 border-blue-300'
        } border`}
        initial={false}
        animate={{ 
          backgroundColor: darkMode ? '#1a2035' : '#dbeafe',
          borderColor: darkMode ? '#3b82f6' : '#93c5fd'
        }}
        whileTap={{ scale: 0.98 }}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        role="switch"
        aria-checked={darkMode}
      >
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          {darkMode ? (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
              {/* Stars */}
              <div className="absolute h-1 w-1 rounded-full bg-white top-1 left-3 opacity-80 animate-pulse"></div>
              <div className="absolute h-[3px] w-[3px] rounded-full bg-white top-3 left-6 opacity-90 animate-pulse"></div>
              <div className="absolute h-1 w-1 rounded-full bg-white top-5 left-2 opacity-70 animate-pulse"></div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-sky-300">
              {/* Stars */}
              <div className="absolute h-1 w-1 rounded-full bg-white top-1 left-3 opacity-80 animate-pulse"></div>
              <div className="absolute h-[3px] w-[3px] rounded-full bg-white top-3 left-6 opacity-90 animate-pulse"></div>
              <div className="absolute h-1 w-1 rounded-full bg-white top-5 left-2 opacity-70 animate-pulse"></div>
            </div>
          )}
        </div>
        
        {/* Animated celestial thumb */}
        <motion.div 
          className="relative z-10 w-6 h-6 rounded-full shadow-md flex items-center justify-center overflow-hidden"
          initial={false}
          animate={{ 
            x: darkMode ? 28 : 0,
            backgroundColor: darkMode ? '#334155' : '#f59e0b',
            boxShadow: darkMode ? '0 0 8px 1px rgba(59, 130, 246, 0.5)' : '0 0 8px 1px rgba(251, 191, 36, 0.7)'
          }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 20 
          }}
        >
          {darkMode ? (
            // Moon shape
            <div className="relative w-4 h-4 bg-slate-300 rounded-full">
              <div className="absolute top-0 right-0 w-3 h-3 bg-slate-700 rounded-full transform translate-x-1 -translate-y-1"></div>
            </div>
          ) : (
            // Sun shape
            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 bg-yellow-100 rounded-full"></div>
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-100 rounded-full"
                  style={{ 
                    transform: `rotate(${i * 45}deg) translateY(-4px)`,
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
