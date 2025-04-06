"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50 pt-16">
      <main className="flex-grow flex items-center justify-center px-4">
        {!isLoaded ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
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
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Patel Nirmal Mukeshkumar
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mt-2 text-gray-700 mb-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Full-Stack Developer | IoT Enthusiast
            </motion.p>
            
            {isMounted && (
              <motion.div 
                className="backdrop-blur-sm bg-white/30 p-6 rounded-2xl inline-block mb-12 w-full max-w-lg mx-auto border border-white/40 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="grid grid-cols-5 gap-2 text-center">
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-blue-700">{age.years}</span>
                    <span className="text-xs text-gray-600 uppercase tracking-wide">Years</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-blue-700">{age.days}</span>
                    <span className="text-xs text-gray-600 uppercase tracking-wide">Days</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-blue-700">{age.hours}</span>
                    <span className="text-xs text-gray-600 uppercase tracking-wide">Hours</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-blue-700">{age.minutes}</span>
                    <span className="text-xs text-gray-600 uppercase tracking-wide">Mins</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-blue-700">{age.seconds}</span>
                    <span className="text-xs text-gray-600 uppercase tracking-wide">Secs</span>
                  </div>
                </div>
                <div className="text-center mt-3 text-sm text-gray-700">Moments Lived Since 7 August 2003</div>
              </motion.div>
            )}
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <motion.a
                href="/journey"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg shadow-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                Explore My Journey
              </motion.a>
              
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg shadow-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                View My Projects
              </motion.a>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}