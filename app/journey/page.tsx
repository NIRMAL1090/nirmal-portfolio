"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaRobot, FaGlobe, FaDiscord, FaChevronRight, FaLightbulb, FaCode, FaTrophy, FaMobileAlt, FaServer, FaDatabase, FaAward } from "react-icons/fa";
import { SiJavascript, SiReact } from "react-icons/si";

export default function Journey() {
  const { darkMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Journey timeline data with enhanced metadata
  const journeyStages = [
    {
      id: 1,
      title: "Childhood Fascination",
      subtitle: "Early Years",
      icon: <FaLightbulb />,
      color: "blue",
      content: "As a kid, I was captivated by phones and emerging technologies. I explored the latest trends and began experimenting with IoT, creating projects with motors, LED lights, batteries, and hardware.",
      achievement: "Built my first electronic circuit"
    },
    {
      id: 2,
      title: "Discord Bot Adventure",
      subtitle: "11th Grade",
      icon: <FaDiscord />,
      color: "indigo",
      content: "In 11th grade, I dove into coding Discord bots. After experimenting with several, I created three official music bots PreoMusic1, PreoMusic2, and PreoMusic3 which became verified. Serving over 5.6k active users (and lakhs total) for free, I was offered $300 to sell them but declined. Later, I sold all three after 2-3 months.",
      achievement: "Created 3 verified Discord bots with 5.6k+ users"
    },
    {
      id: 3,
      title: "Ethical Hacking & University",
      subtitle: "GLS University",
      icon: <FaCode />,
      color: "purple",
      content: "I explored ethical hacking and cybersecurity, and later pursued IMSCIT(IT) — an integrated BCSIT+MSCIT program — at GLS University. During my first year, I participated in the Gujarat SSIP Hackathon, where I gained valuable experience in teamwork.",
      achievement: "Started integrated BCSIT+MSCIT program"
    },
    {
      id: 4,
      title: "Revived Preo - Discord Bot",
      subtitle: "July 1st, 2023",
      icon: <FaServer />,
      color: "pink",
      content: "On July 1st, 2023, I revived Preo (formerly PreoMusic), a Discord music bot that now serves over 423,000 users. This project combines my passion for coding with community building, featuring a complete rewrite with enhanced stability and features.",
      achievement: "Built a bot serving 423,000+ users"
    },
    {
      id: 5,
      title: "IoT Success at GLS Cybershadez",
      subtitle: "University Competition",
      icon: <FaRobot />,
      color: "red",
      content: "With GLS Cybershadez, I built a Dam Water Overflow System using Arduino Uno, earning 2nd place. The system featured real-time water level monitoring with live data accessible through a mobile app. For my bachelor's mini project, My Team created an AGL Showroom website with Django featuring cart-based functionality and dynamic employee allocation.",
      achievement: "Won 2nd place in university competition"
    },
    {
      id: 6,
      title: "Academic Excellence & Recognition",
      subtitle: "Bachelor's Degree",
      icon: <FaTrophy />,
      color: "amber",
      content: "I achieved one of my biggest life milestones in college when I was named the best male student out of 300 students in my class. This recognition came alongside earning my bachelor's degree with distinction, ranking in the top 3 students in BSC(IT). This achievement validated my dedication to academics, extracurricular activities, and technical skill development throughout my undergraduate studies.",
      achievement: "Graduated with distinction in top 3 of class",
      featured: true // Mark as featured milestone
    },
    {
      id: 7,
      title: "MSC(IT) & BarkBuddy App",
      subtitle: "Final Year Project",
      icon: <FaMobileAlt />,
      color: "green",
      content: "Currently pursuing MSC(IT) at GLS University, I'm working on my final-year project: the BarkBuddy app (Flutter) for dog lovers. With modules like dog boarding, borrowing, events, and vaccination bookings, it uses PHP backend APIs, MySQL, Google Maps, and Geoapify. My team is preparing to launch the ready release APK.",
      achievement: "Developing a full-featured mobile app",
      links: [
        { type: "explore", label: "Read more about these projects", url: "/projects", icon: <FaGlobe /> },
      ]
    }
  ];

  // Get the gradient based on dark mode
  const getGradient = (color: string) => {
    if (darkMode) {
      switch (color) {
        case 'blue': return 'from-blue-900 to-blue-700';
        case 'indigo': return 'from-indigo-900 to-indigo-700';
        case 'purple': return 'from-purple-900 to-purple-700';
        case 'pink': return 'from-pink-900 to-pink-700';
        case 'red': return 'from-red-900 to-red-700';
        case 'amber': return 'from-amber-900 to-amber-700';
        case 'green': return 'from-green-900 to-green-700';
        default: return 'from-blue-900 to-blue-700';
      }
    } else {
      switch (color) {
        case 'blue': return 'from-blue-600 to-blue-400';
        case 'indigo': return 'from-indigo-600 to-indigo-400';
        case 'purple': return 'from-purple-600 to-purple-400';
        case 'pink': return 'from-pink-600 to-pink-400';
        case 'red': return 'from-red-600 to-red-400';
        case 'amber': return 'from-amber-600 to-amber-400';
        case 'green': return 'from-green-600 to-green-400';
        default: return 'from-blue-600 to-blue-400';
      }
    }
  };

  // Get text color based on dark mode and stage color
  const getTextColor = (color: string) => {
    if (darkMode) {
      switch (color) {
        case 'blue': return 'text-blue-300';
        case 'indigo': return 'text-indigo-300';
        case 'purple': return 'text-purple-300';
        case 'pink': return 'text-pink-300';
        case 'red': return 'text-red-300';
        case 'amber': return 'text-amber-300';
        case 'green': return 'text-green-300';
        default: return 'text-blue-300';
      }
    } else {
      switch (color) {
        case 'blue': return 'text-blue-600';
        case 'indigo': return 'text-indigo-600';
        case 'purple': return 'text-purple-600';
        case 'pink': return 'text-pink-600';
        case 'red': return 'text-red-600';
        case 'amber': return 'text-amber-600';
        case 'green': return 'text-green-600';
        default: return 'text-blue-600';
      }
    }
  };

  return (
    <div className={`min-h-screen flex flex-col pt-22 ${darkMode
      ? 'bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900'
      : 'bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50'
      }`}>
      <main className="flex-grow pt-4 pb-16 px-3 max-w-6xl mx-auto w-full" ref={containerRef}>
        {!isLoaded ? (
          <div className="flex justify-center items-center h-64">
            <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${darkMode ? 'border-blue-400' : 'border-blue-500'
              }`}></div>
          </div>
        ) : (
          <>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'
                } text-center mb-6 md:mb-10`}
            >
              MY TECH JOURNEY
            </motion.h1>

            {/* Journey Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-center max-w-3xl mx-auto mb-16 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                } text-lg`}
            >
              <p>Explore the key milestones in my development journey from childhood experimentation to professional projects.</p>
            </motion.div>

            {/* Innovative Journey Timeline */}
            <div className="relative">
              {/* Decorative connecting line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full"></div>

              {/* Journey Stages */}
              <div className="space-y-28 md:space-y-40 relative z-10">
                {journeyStages.map((stage) => (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className={`relative ${stage.featured ? 'z-20' : 'z-10'}`}
                  >
                    {/* Removing the large background element and using a more subtle approach */}
                    {/* Large floating year marker */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="flex justify-center mb-5"
                    >
                      <div className={`flex items-center justify-center relative`}>
                        {/* Extra glowing effect for featured milestone - kept but reduced in size */}
                        {stage.featured && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-amber-400/25 blur-md scale-125"
                            animate={{
                              scale: [1.25, 1.4, 1.25],
                              opacity: [0.25, 0.4, 0.25]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                        )}

                        {/* Glowing outer ring */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${getGradient(stage.color)} opacity-30 blur-md ${stage.featured ? 'scale-125' : 'scale-125'}`}></div>

                        {/* Solid background */}
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${getGradient(stage.color)} flex items-center justify-center shadow-lg z-10 ${stage.featured ? 'ring-2 ring-amber-300/60' : ''}`}>
                          <span className="text-white text-2xl md:text-3xl font-bold">{stage.id}</span>
                        </div>

                        {/* Icon floating at the upper right */}
                        <div className="absolute -right-3 -top-3 z-20">
                          <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md flex items-center justify-center ${getTextColor(stage.color)} ${stage.featured ? 'ring-1 ring-amber-400/50' : ''}`}
                          >
                            <span className="text-xl md:text-2xl">
                              {stage.icon}
                            </span>
                          </motion.div>
                        </div>

                        {/* Special "Major Milestone" badge for featured item */}
                        {stage.featured && (
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="absolute -left-32 md:-left-40 top-0 transform -translate-y-1/2"
                          >
                            <div className={`bg-gradient-to-r from-amber-600 to-red-500 text-white text-xs md:text-sm px-3 py-1 rounded-full shadow-lg flex items-center`}>
                              <span className="mr-1"><FaAward /></span> Major Milestone
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`max-w-3xl mx-auto ${darkMode
                        ? 'bg-gray-800/50 border-gray-700'
                        : 'bg-white/80 border-gray-200'
                        } backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border
                      ${stage.featured ? 'ring-3 ring-amber-400/40 shadow-amber-500/10' : ''}`}
                    >
                      {/* Stage Header with Gradient */}
                      <div className={`bg-gradient-to-r ${getGradient(stage.color)} p-4 md:p-6 ${stage.featured ? 'relative overflow-hidden' : ''}`}>
                        {/* Special decorative elements for featured milestone - made smaller */}
                        {stage.featured && (
                          <>
                            <motion.div
                              className="absolute top-0 right-0 w-12 h-12 bg-yellow-400/20 rounded-full blur-md"
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.3, 0.2],
                                x: [0, 5, 0]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse"
                              }}
                            />
                            <motion.div
                              className="absolute bottom-0 left-20 w-8 h-8 bg-amber-400/20 rounded-full blur-md"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.15, 0.25, 0.15],
                                y: [0, -3, 0]
                              }}
                              transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: 0.5
                              }}
                            />
                          </>
                        )}

                        <h2 className="text-xl md:text-2xl font-bold text-white flex items-center">
                          {stage.title}
                        </h2>
                        <p className="text-white/80 mt-1">{stage.subtitle}</p>
                      </div>

                      {/* Main Content */}
                      <div className="p-5 md:p-6">
                        {/* Description with special formatting for featured milestone */}
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'
                          } text-base leading-relaxed mb-5 ${stage.featured ? 'font-medium' : ''}`}>
                          {stage.featured ? (
                            <>
                              <span className={`${darkMode ? 'text-amber-300/90' : 'text-amber-700/90'}`}>{stage.content}</span>
                            </>
                          ) : (
                            stage.content
                          )}
                        </p>

                        {/* Achievement Badge - enhanced professional styling for featured milestones */}
                        <div className={`inline-block ${stage.featured
                          ? darkMode
                            ? 'bg-gradient-to-r from-amber-900/40 to-amber-800/40 border border-amber-700/50'
                            : 'bg-gradient-to-r from-amber-50 to-amber-100/90 border border-amber-200'
                          : darkMode
                            ? 'bg-gray-800/80 border border-gray-700'
                            : 'bg-gray-50 border border-gray-100'
                          } rounded-full py-2 px-4 mb-5 shadow-sm ${stage.featured ? 'shadow-amber-900/10' : ''}`}
                        >

                          <div className="flex items-center relative z-10">
                            {stage.featured ? (
                              <div className="flex items-center">
                                <div className="relative">
                                  <FaAward className={`text-amber-500 mr-2`} />
                                </div>
                                <span className={`font-medium ${stage.featured
                                  ? darkMode ? 'text-amber-300' : 'text-amber-700'
                                  : darkMode ? 'text-gray-300' : 'text-gray-700'
                                  }`}>
                                  {stage.achievement}
                                </span>
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <FaTrophy className={`${getTextColor(stage.color)} mr-2`} />
                                <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {stage.achievement}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Links if any */}
                        {stage.links && (
                          <div className="mt-4">
                            {stage.links.map((link, linkIndex) => (
                              <motion.a
                                key={linkIndex}
                                href={link.url}
                                whileHover={{ x: 3 }}
                                className={`inline-flex items-center ${getTextColor(stage.color)} font-medium`}
                              >
                                <span className="mr-2">{link.icon}</span>
                                <span>{link.label}</span>
                                <FaChevronRight className="ml-1 text-xs" />
                              </motion.a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Final call to action - updated button style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-24 mb-8"
            >
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'
                } text-xl font-medium`}>
                My journey continues...
              </p>
              <div className="mt-6 flex justify-center">
                <motion.a
                  href="/projects"
                  whileTap={{ scale: 0.98 }}
                  className={`${darkMode
                    ? 'bg-gradient-to-r from-purple-900 to-pink-700 hover:from-purple-600 hover:to-pink-600'
                    : 'bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-600 hover:to-pink-700'
                    } text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg shadow-md relative overflow-hidden w-full sm:w-auto sm:min-w-[240px]`}
                >
                  {/* Floating icons for Projects button */}
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
                    <SiReact />
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
                    <FaDatabase />
                  </motion.span>

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
                    <SiJavascript />
                  </motion.span>

                  {/* Button text */}
                  <span className="relative z-10">View My Projects</span>
                </motion.a>
              </div>
            </motion.div>

          </>
        )}
      </main>
    </div>
  );
}