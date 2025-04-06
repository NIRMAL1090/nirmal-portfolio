"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaCode, FaTerminal, FaLaptopCode, FaMobileAlt, FaDatabase, FaServer, FaBrain } from "react-icons/fa";
import { BiCodeAlt, BiCodeBlock, BiCodeCurly, BiBracket } from "react-icons/bi";
import { AiOutlineBranches, AiOutlineFunction, AiOutlineApi } from "react-icons/ai";
import { SiJavascript, SiPython, SiReact } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export default function Home() {
  const { darkMode } = useTheme();
  // Enhanced state for age calculation with all units
  const [age, setAge] = useState({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  // State to track if the component is mounted and loaded
  const [isMounted, setIsMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Enhanced function to calculate age with all units
  const calculateAge = () => {
    // Use UTC dates to avoid timezone issues
    const birthDate = new Date(Date.UTC(2003, 7, 7)); // Note: month is 0-indexed (7 = August)
    const now = new Date();
    const nowUtc = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
    ));
    
    // Calculate years more accurately
    let years = nowUtc.getUTCFullYear() - birthDate.getUTCFullYear();
    
    // Adjust years if birthday hasn't occurred yet this year
    const hasBirthdayOccurredThisYear = 
      nowUtc.getUTCMonth() > birthDate.getUTCMonth() || 
      (nowUtc.getUTCMonth() === birthDate.getUTCMonth() && 
       nowUtc.getUTCDate() >= birthDate.getUTCDate());
       
    if (!hasBirthdayOccurredThisYear) {
      years--;
    }
    
    // Calculate days, hours, minutes and seconds more precisely
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const millisecondsInHour = 1000 * 60 * 60;
    const millisecondsInMinute = 1000 * 60;
    
    // Get total difference in milliseconds
    const diffMs = nowUtc.getTime() - birthDate.getTime();
    
    // Calculate each unit
    const totalDays = Math.floor(diffMs / millisecondsInDay);
    const days = totalDays % 365; // Days in current year
    
    const remainingMs = diffMs - (totalDays * millisecondsInDay);
    const hours = Math.floor(remainingMs / millisecondsInHour);
    
    const remainingAfterHours = remainingMs - (hours * millisecondsInHour);
    const minutes = Math.floor(remainingAfterHours / millisecondsInMinute);
    
    const remainingAfterMinutes = remainingAfterHours - (minutes * millisecondsInMinute);
    const seconds = Math.floor(remainingAfterMinutes / 1000);
    
    return { years, days, hours, minutes, seconds };
  };

  // Run once after mounting to set states
  useEffect(() => {
    setIsMounted(true);
    setIsLoaded(true);
    setAge(calculateAge());
  }, []);

  // Update the age every second once mounted
  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isMounted]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 pt-16 ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900' 
        : 'bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50'
    }`}>
      <main className="flex-grow flex items-center justify-center px-4">
        {!isLoaded ? (
          <div className="flex justify-center items-center h-64">
            <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${
              darkMode ? 'border-blue-400' : 'border-blue-500'
            }`}></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16 px-6 max-w-4xl mx-auto"
          >
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Color-changing circular rotating border */}
              <div 
                className="absolute rounded-full border-4 border-dashed"
                style={{ 
                  width: "115%",
                  height: "115%",
                  top: "-7.5%",
                  left: "-7.5%",
                  animation: "spin 20s linear infinite, colorChange 10s infinite alternate",
                  borderColor: "rgba(99, 102, 241, 0.4)"
                }}
              ></div>
              <motion.img 
                src="/images/nirmal_logo.gif" 
                alt="Profile" 
                className="w-full h-full rounded-full relative z-10 border-4 border-white shadow-lg"
              />
            </motion.div>
            
            <motion.h1 
              className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600'
              } mb-2`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Patel Nirmal Mukeshkumar
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl mt-2 role-text mb-10`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Full-Stack Developer | IoT Enthusiast
            </motion.p>
            
            {isMounted && (
              <motion.div 
                className={`backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-white/30 border-white/40'
                } p-6 rounded-2xl inline-block mb-12 w-full max-w-lg mx-auto border shadow-lg`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="grid grid-cols-5 gap-2 text-center">
                  <div className="flex flex-col">
                    <span className={`text-2xl md:text-3xl font-bold ${
                      darkMode ? 'text-blue-400' : 'text-blue-700'
                    }`}>{age.years}</span>
                    <span className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } uppercase tracking-wide`}>Years</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-2xl md:text-3xl font-bold ${
                      darkMode ? 'text-blue-400' : 'text-blue-700'
                    }`}>{age.days}</span>
                    <span className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } uppercase tracking-wide`}>Days</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-2xl md:text-3xl font-bold ${
                      darkMode ? 'text-blue-400' : 'text-blue-700'
                    }`}>{age.hours}</span>
                    <span className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } uppercase tracking-wide`}>Hours</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-2xl md:text-3xl font-bold ${
                      darkMode ? 'text-blue-400' : 'text-blue-700'
                    }`}>{age.minutes}</span>
                    <span className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } uppercase tracking-wide`}>Mins</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-2xl md:text-3xl font-bold ${
                      darkMode ? 'text-blue-400' : 'text-blue-700'
                    }`}>{age.seconds}</span>
                    <span className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } uppercase tracking-wide`}>Secs</span>
                  </div>
                </div>
                <div className={`text-center mt-3 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-700'
                }`}>Moments Lived Since 7 August 2003</div>
              </motion.div>
            )}
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <motion.a
                href="/journey"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-900 to-indigo-700 hover:from-blue-600 hover:to-indigo-600' 
                    : 'bg-gradient-to-r from-blue-400 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
                } text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg shadow-md relative overflow-hidden`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                {/* Existing floating icons */}
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-blue-300/40' : 'text-white/30'}`}
                  style={{ top: '15%', left: '15%' }}
                  animate={{ 
                    y: [0, -10, 0], 
                    opacity: [0.4, 0.8, 0.4],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <BiCodeAlt />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-indigo-300/40' : 'text-white/30'}`}
                  style={{ bottom: '20%', left: '25%' }}
                  animate={{ 
                    y: [0, 8, 0], 
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                >
                  {"{ }"}
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-purple-300/40' : 'text-white/30'}`}
                  style={{ top: '25%', right: '20%' }}
                  animate={{ 
                    y: [0, -8, 0], 
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                >
                  {"</>"}
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-blue-300/40' : 'text-white/30'}`}
                  style={{ bottom: '15%', right: '15%' }}
                  animate={{ 
                    y: [0, 10, 0], 
                    opacity: [0.2, 0.5, 0.2],
                    rotate: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 3.7, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.5
                  }}
                >
                  <BiCodeBlock />
                </motion.span>
                
                {/* New floating icons for Journey button */}
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-cyan-300/40' : 'text-white/30'}`}
                  style={{ top: '45%', left: '30%' }}
                  animate={{ 
                    y: [0, -5, 0], 
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2.8, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.7
                  }}
                >
                  <TbBrandCpp />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-green-300/40' : 'text-white/30'}`}
                  style={{ bottom: '40%', left: '10%' }}
                  animate={{ 
                    y: [0, 6, 0], 
                    opacity: [0.2, 0.5, 0.2],
                    rotate: [0, 8, 0]
                  }}
                  transition={{ 
                    duration: 3.3, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.3
                  }}
                >
                  <SiPython />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-indigo-300/40' : 'text-white/30'}`}
                  style={{ top: '50%', right: '12%' }}
                  animate={{ 
                    y: [0, -7, 0], 
                    opacity: [0.25, 0.65, 0.25],
                    rotate: [0, 12, 0]
                  }}
                  transition={{ 
                    duration: 4.2, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.9
                  }}
                >
                  <AiOutlineFunction />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-blue-300/40' : 'text-white/30'}`}
                  style={{ top: '10%', right: '30%' }}
                  animate={{ 
                    y: [0, -4, 0], 
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, -7, 0]
                  }}
                  transition={{ 
                    duration: 3.1, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.7
                  }}
                >
                  <BiCodeCurly />
                </motion.span>
                
                {/* Button text */}
                <span className="relative z-10">Explore My Journey</span>
              </motion.a>
              
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-900 to-pink-700 hover:from-purple-600 hover:to-pink-600' 
                    : 'bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-600 hover:to-pink-700'
                } text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg shadow-md relative overflow-hidden`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                {/* Existing floating icons */}
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-purple-300/40' : 'text-white/30'}`}
                  style={{ top: '20%', left: '18%' }}
                  animate={{ 
                    y: [0, -8, 0], 
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 3.2, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <FaCode />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-pink-300/40' : 'text-white/30'}`}
                  style={{ bottom: '25%', left: '30%' }}
                  animate={{ 
                    y: [0, 7, 0], 
                    opacity: [0.2, 0.6, 0.2],
                    rotate: [0, -12, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.7
                  }}
                >
                  <FaTerminal />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-purple-300/40' : 'text-white/30'}`}
                  style={{ top: '30%', right: '22%' }}
                  animate={{ 
                    y: [0, -6, 0], 
                    opacity: [0.3, 0.8, 0.3],
                    rotate: [0, 8, 0]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.2
                  }}
                >
                  <FaCode />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-pink-300/40' : 'text-white/30'}`}
                  style={{ bottom: '20%', right: '18%' }}
                  animate={{ 
                    y: [0, 8, 0], 
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3.8, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.2
                  }}
                >
                  <FaTerminal />
                </motion.span>
                
                {/* New floating icons for Projects button */}
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-pink-300/40' : 'text-white/30'}`}
                  style={{ top: '40%', left: '12%' }}
                  animate={{ 
                    y: [0, -6, 0], 
                    opacity: [0.25, 0.55, 0.25],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 2.9, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.1
                  }}
                >
                  <SiReact />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-purple-300/40' : 'text-white/30'}`}
                  style={{ bottom: '35%', left: '42%' }}
                  animate={{ 
                    y: [0, 5, 0], 
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 8, 0]
                  }}
                  transition={{ 
                    duration: 3.6, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.6
                  }}
                >
                  <FaMobileAlt />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-yellow-300/40' : 'text-white/30'}`}
                  style={{ top: '15%', right: '40%' }}
                  animate={{ 
                    y: [0, -7, 0], 
                    opacity: [0.2, 0.5, 0.2],
                    rotate: [0, 12, 0]
                  }}
                  transition={{ 
                    duration: 4.1, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.4
                  }}
                >
                  <SiJavascript />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-purple-300/40' : 'text-white/30'}`}
                  style={{ top: '50%', right: '30%' }}
                  animate={{ 
                    y: [0, -5, 0], 
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 3.3, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.9
                  }}
                >
                  <FaDatabase />
                </motion.span>
                
                {/* Button text */}
                <span className="relative z-10">View My Projects</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </main>

      {/* Add global styles for the animated text */}
      <style jsx global>{`
        @keyframes textColorChange {
          0% { color: ${darkMode ? 'rgb(96, 165, 250)' : 'rgb(37, 99, 235)'}; }  /* blue */
          15% { color: ${darkMode ? 'rgb(125, 211, 252)' : 'rgb(14, 165, 233)'}; }  /* sky/cyan */
          30% { color: ${darkMode ? 'rgb(167, 139, 250)' : 'rgb(109, 40, 217)'}; }  /* indigo */
          45% { color: ${darkMode ? 'rgb(192, 132, 252)' : 'rgb(147, 51, 234)'}; }  /* purple */
          60% { color: ${darkMode ? 'rgb(216, 180, 254)' : 'rgb(168, 85, 247)'}; }  /* violet */
          75% { color: ${darkMode ? 'rgb(244, 114, 182)' : 'rgb(219, 39, 119)'}; }  /* pink */
          90% { color: ${darkMode ? 'rgb(248, 113, 113)' : 'rgb(220, 38, 38)'}; }  /* red */
          100% { color: ${darkMode ? 'rgb(139, 92, 246)' : 'rgb(79, 70, 229)'}; }  /* back to indigo */
        }
        
        .role-text {
          animation: textColorChange 15s infinite alternate;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}