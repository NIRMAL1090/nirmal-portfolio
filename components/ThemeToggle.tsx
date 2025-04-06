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
        animate={{ backgroundColor: darkMode ? '#1e293b' : '#dbeafe' }}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        role="switch"
        aria-checked={darkMode}
      >
        {/* Clean background without symbols */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none opacity-30">
          {darkMode ? (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-800/20"></div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20"></div>
          )}
        </div>
        
        {/* Animated thumb with binary display - NO particles */}
        <motion.div 
          className="relative z-10 w-6 h-6 rounded-full shadow-md flex items-center justify-center text-[10px] font-bold font-mono"
          initial={false}
          animate={{ 
            x: darkMode ? 24 : 0,
            backgroundColor: darkMode ? '#3b82f6' : '#ffffff',
            color: darkMode ? '#ffffff' : '#3b82f6'
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 15 
          }}
        >
          {darkMode ? '01' : '10'}
        </motion.div>
      </motion.div>
    </div>
  );
}
