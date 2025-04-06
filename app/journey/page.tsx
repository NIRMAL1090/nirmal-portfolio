"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaRobot, FaGlobe, FaDiscord, FaChevronRight, FaExternalLinkAlt, FaCrown, FaCode, FaDollarSign } from "react-icons/fa";

export default function Journey() {
  // Track loading state
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Simplified animation for better performance
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  // Enhanced animations with better timing and detection
  const titleAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };
  
  const lineAnimation = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } }
  };
  
  // Simplified animations with less delay variation to ensure consistent loading
  const circleAnimation = (delay: number) => ({
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.4, 
        delay: 0.2 + (delay * 0.1), // Reduced delay multiplier
        ease: "backOut" 
      } 
    }
  });
  
  const cardAnimation = (delay: number) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.4, 
        delay: 0.1 + (delay * 0.1), // Reduced delay multiplier
        ease: "easeOut" 
      } 
    }
  });

  // Journey timeline data
  const timelineItems = [
    {
      id: 1,
      title: "Childhood Fascination (Early Years)",
      content: "As a kid, I was captivated by phones and emerging technologies. I explored the latest trends and began experimenting with IoT, creating projects with motors, LED lights, batteries, and hardware.",
      align: "left"
    },
    {
      id: 2,
      title: "Discord Bot Adventure (11th Grade)",
      content: "In 11th grade, I dove into coding Discord bots. After experimenting with several, I created three official music bots PreoMusic1, PreoMusic2, and PreoMusic3 which became verified. Serving over 5.6k active users (and lakhs total) for free, I was offered $300 to sell them but declined. Later, I sold all three after 2-3 months.",
      align: "right"
    },
    {
      id: 3,
      title: "Ethical Hacking & IMSCIT(IT) (GLS University)",
      content: "I explored ethical hacking and cybersecurity, and later pursued IMSCIT(IT) — an integrated BCSIT+MSCIT program — at GLS University. During my first year, I participated in the Gujarat SSIP Hackathon, where I gained valuable experience in teamwork.",
      align: "left"
    },
    {
      id: 4,
      title: "Revived Preo - Discord Bot Project",
      content: "On July 1st, 2023, I revived Preo (formerly PreoMusic), a Discord music bot that now serves over 423,000 users. This project combines my passion for coding with community building, featuring a complete rewrite with enhanced stability and features.",
      align: "right"
    },
    {
      id: 5,
      title: "IoT Success at GLS Cybershadez",
      content: "With GLS Cybershadez, I built a Dam Water Overflow System using Arduino Uno, earning 2nd place. The system featured real-time water level monitoring with live data accessible through a mobile app. For my bachelor's mini project, My Team created an AGL Showroom website with Django featuring cart-based functionality and dynamic employee allocation.",
      align: "left"
    },
    {
      id: 6,
      title: "Academic Excellence & Recognition",
      content: "I achieved one of my biggest life milestones in college when I was named the best male student out of 300 students in my class. This recognition came alongside earning my bachelor's degree with distinction, ranking in the top 3 students in BSC(IT). This achievement validated my dedication to academics, extracurricular activities, and technical skill development throughout my undergraduate studies.",
      align: "right"
    },
    {
      id: 7,
      title: "MSC(IT) & BarkBuddy App",
      content: "Currently pursuing MSC(IT) at GLS University, I'm working on my final-year project: the BarkBuddy app (Flutter) for dog lovers. With modules like dog boarding, borrowing, events, and vaccination bookings, it uses PHP backend APIs, MySQL, Google Maps, and Geoapify. My team is preparing to launch the ready release APK.",
      links: [
        { type: "explore", label: "Read more about these projects", url: "/projects", icon: <FaGlobe /> },
      ],
      align: "left" // Changed to left since previous is now right
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50 pt-12">
      <main className="flex-grow pt-4 pb-16 px-3 max-w-6xl mx-auto w-full">
        {!isLoaded ? (
          // Loading indicator
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
              className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-8 md:mb-12"
            >
              My Tech Journey
            </motion.h1>

            {/* Timeline Container - completely redesigned */}
            <div className="relative">
              {/* Innovative timeline visualization - hexagonal connection pattern */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full z-0">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-blue-400 to-purple-500"
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                ></motion.div>
              </div>

              {/* Timeline Items - with improved spacing and responsive design */}
              <div className="space-y-16 md:space-y-24 relative z-10">
                {timelineItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`md:flex items-start ${
                      item.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                    } md:justify-center mb-6`}
                  >
                    {/* Innovative markers replacing simple numbers */}
                    <div className="relative md:w-1/12 flex justify-center">
                      <motion.div
                        className={`flex flex-col items-center ${index !== 0 ? 'mt-4 md:mt-0' : ''}`} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {/* Hexagonal marker with year label */}
                        <div className="relative mb-2 md:mb-0">
                          <motion.div 
                            className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl rotate-45 shadow-lg"
                            initial={{ rotate: 0, scale: 0 }}
                            whileInView={{ rotate: 45, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          />
                          <motion.div 
                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-lg md:text-xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            {item.id}
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content card with improved responsiveness */}
                    <motion.div 
                      className="backdrop-blur-sm bg-white/30 p-4 md:p-6 rounded-lg shadow-lg w-full md:w-5/6 text-left border border-white/40 ml-0 md:ml-6 md:mr-6"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ 
                        boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.1)",
                        y: -3,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                        {item.title}
                      </h2>
                      
                      {/* Render content */}
                      <div className="text-base md:text-lg text-gray-700 leading-relaxed">
                        <p>{item.content}</p>
                        
                        {/* Remove reference to contentContinuation */}
                      </div>
                      
                      {/* Display links as elegant text links with icons in a row */}
                      {item.links && item.links.length > 0 && (
                        <div className="mt-5 flex flex-row flex-wrap gap-4">
                          {item.links.map((link, linkIndex) => (
                            <motion.a
                              key={linkIndex}
                              href={link.url}
                              // target="_blank"
                              // rel="noopener noreferrer"
                              className={`flex items-center text-sm md:text-base font-medium transition-all hover:translate-x-1 
                                ${link.type === 'invite' ? 'text-indigo-500 hover:text-indigo-700' : 
                                  link.type === 'website' ? 'text-blue-500 hover:text-blue-700' : 
                                  link.type === 'discord' ? 'text-purple-500 hover:text-purple-700' :
                                  link.type === 'explore' ? 'text-emerald-600 hover:text-emerald-700' : 
                                  'text-gray-600 hover:text-gray-800'}`}                              
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.97 }}
                              initial={{ opacity: 0, x: -5 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 0.3, 
                                delay: 0.5 + (linkIndex * 0.1)
                              }}
                            >
                              {/* Link content with icon */}
                              <span className="mr-2">{link.icon}</span>
                              <span>{link.label}</span>
                              
                              {/* External link indicator */}
                              <FaExternalLinkAlt className="h-3 w-3 ml-1 opacity-70" />
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}