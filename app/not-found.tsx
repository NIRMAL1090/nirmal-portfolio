"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaHome, FaSearch, FaSadTear } from "react-icons/fa";

export default function NotFound() {
  const { darkMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Enhanced animations
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Floating animation for the error number
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <div className={`min-h-screen flex flex-col pt-16 ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900' 
        : 'bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50'
    }`}>
      <main className="flex-grow flex items-center justify-center p-4">
        {!isLoaded ? (
          <div className="flex justify-center items-center h-64">
            <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${
              darkMode ? 'border-blue-400' : 'border-blue-500'
            }`}></div>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerAnimation}
            className="text-center w-full max-w-4xl mx-auto py-12"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                animate="animate"
                variants={floatingAnimation}
                className="relative"
              >
                <FaSadTear className={`text-8xl md:text-9xl ${
                  darkMode ? 'text-blue-600' : 'text-blue-400'
                } opacity-10 absolute -top-6 -right-6`} />
                <motion.h1 
                  variants={itemAnimation}
                  className="text-8xl md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-none"
                >
                  404
                </motion.h1>
              </motion.div>
            </div>
            
            <motion.h2 
              variants={itemAnimation}
              className={`text-2xl md:text-4xl font-bold ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
              } mb-6`}
            >
              Page Not Found
            </motion.h2>
            
            <motion.p 
              variants={itemAnimation}
              className={`${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              } mb-10 md:text-xl max-w-xl mx-auto`}
            >
              Oops! The page you're looking for seems to have vanished into the digital void.
            </motion.p>
            
            <motion.div 
              variants={itemAnimation}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link href="/">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto text-lg font-medium"
                >
                  <FaHome />
                  Back to Home
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto text-lg font-medium"
                >
                  <FaSearch />
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemAnimation}
              className={`pt-6 text-sm ${
                darkMode ? 'text-gray-500' : 'text-gray-500'
              } max-w-md mx-auto`}
            >
              Lost? Check the navigation menu to explore my portfolio.
            </motion.div>
          </motion.div>
        )}
      </main>
    </div>
  );
}