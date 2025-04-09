"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaDiscord, FaGlobe, FaCode, FaMobile, FaMicrochip, FaCrown, FaDollarSign, FaUsers, FaLaptopCode, FaPalette, FaTools, FaGraduationCap, FaChartBar, FaDatabase } from "react-icons/fa";
import { SiReact, SiPython } from "react-icons/si";

export default function Projects() {
  const { darkMode } = useTheme();
  // State to track if page is fully loaded
  const [isLoaded, setIsLoaded] = useState(false);

  // Load the page content after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Match animations exactly with Journey page
  const titleAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  // Project data array with enhanced metadata
  const projects = [
    {
      title: "PreoMusic Bots",
      description: "Developed three verified Discord music bots (PreoMusic1, PreoMusic2, PreoMusic3) with over 5.6k active users and hundreds of thousands of total users. Initially offered for free, later sold them — and after 6–7 months, on July 1st, 2023, launched Preo, which now serves over 423,000 users. Our team is actively expanding it into a multipurpose bot with upcoming moderation features. The project has taught me about scaling services, managing user experiences, and working with a dedicated team to continually improve our offering.",
      tech: "Discord.js, Node.js, MongoDB, Lavalink v4",
      category: "Backend Development",
      color: "blue",  
      icon: <FaDiscord className={darkMode ? "text-blue-400" : "text-blue-500"} />,
      team: [
        { name: "Nirmal", role: "Owner", icon: <FaCrown className={darkMode ? "text-yellow-300" : "text-yellow-500"} /> },
        { name: "Arnav", role: "Developer", icon: <FaCode className={darkMode ? "text-blue-400" : "text-blue-500"} /> },
        { name: "Lordfalkorsinn", role: "Investor", icon: <FaDollarSign className={darkMode ? "text-green-400" : "text-green-500"} /> }
      ],
      links: [
        {
          text: "Invite Preo Bot",
          url: "https://discord.com/discovery/applications/1124688116268138547",
          icon: <FaDiscord className={darkMode ? "text-blue-400" : "text-blue-600"} />
        },
        {
          text: "Preo Website",
          url: "https://preo.me/",
          icon: <FaGlobe className={darkMode ? "text-blue-400" : "text-blue-600"} />
        }
      ]
    },
    {
      title: "Dam Water Overflow System",
      description: "An IoT project during the GLS Cybershadez university competition using Arduino Uno to monitor and prevent dam water overflow, earning 2nd place. The system featured real-time water level monitoring, with live data accessible through a mobile app. It automatically triggered buzzer alerts and sent notifications to users based on critical water levels, ensuring timely warnings and proactive safety measures.",
      tech: "Arduino Uno, IoT Sensors, Blynk, ESP8266",
      category: "IoT",
      color: "green",
      icon: <FaMicrochip className={darkMode ? "text-green-400" : "text-green-500"} />,
      team: [
        { name: "Nirmal", role: "Team Member", icon: <FaUsers className={darkMode ? "text-green-400" : "text-green-500"} /> },
        { name: "Shivangi", role: "Team Member", icon: <FaUsers className={darkMode ? "text-green-400" : "text-green-500"} /> },
        { name: "Punit", role: "Team Member", icon: <FaUsers className={darkMode ? "text-green-400" : "text-green-500"} /> }
      ],
      links: []
    },
    {
      title: "AGL Showroom Website",
      description: "Developed a Django-based showroom e-commerce and visitor handling system as a bachelor's mini project. The system allowed customers to scan a QR code on entry, submit their preferences, and get dynamically assigned to employees. Features included real-time cart management, product tracking, employee notifications, admin dashboards, and automated invoice generation — all aimed at enhancing the in-store shopping experience.",
      tech: "Django, SQLite, JavaScript, Bootstrap, Django Allauth, Django Extensions",
      category: "Web Development",
      color: "purple",
      icon: <FaCode className={darkMode ? "text-purple-400" : "text-purple-500"} />,
      team: [
        { name: "Nirmal", role: "Backend + Frontend Developer", icon: <FaLaptopCode className={darkMode ? "text-purple-400" : "text-purple-500"} /> },
        { name: "Shivangi", role: "Backend + Frontend Developer", icon: <FaLaptopCode className={darkMode ? "text-purple-400" : "text-purple-500"} /> },
        { name: "Punit", role: "Frontend Developer", icon: <FaCode className={darkMode ? "text-purple-400" : "text-purple-500"} /> }
      ],
      links: []
    },
    {
      title: "BarkBuddy App",
      description: "A Flutter-based Android app for dog owners, featuring dog boarding, borrowing, vaccination bookings, and event participation. Connects owners with reliable caretakers during travel, ensuring consistent pet care. Includes event funding and vaccination scheduling. Backend uses PHP APIs, MySQL, Google Maps, and Geoapify. Admin portal built with Django REST Framework, Django Channels, and Jazzmin for easy platform management. Ready release APK available.",
      tech: "Flutter, PHP API, PHPMailer, MySQL, Google Maps, Geoapify, Django REST Framework, Django Channels, Jazzmin",
      category: "Mobile App",
      color: "pink",
      icon: <FaMobile className={darkMode ? "text-pink-400" : "text-pink-500"} />,
      team: [
        { name: "Nirmal", role: "Backend + Frontend Developer", icon: <FaLaptopCode className={darkMode ? "text-pink-400" : "text-pink-500"} /> },
        { name: "Shivangi", role: "Backend + Frontend Developer", icon: <FaLaptopCode className={darkMode ? "text-pink-400" : "text-pink-500"} /> },
        { name: "Bansi", role: "Backend + Frontend Developer", icon: <FaLaptopCode className={darkMode ? "text-pink-400" : "text-pink-500"} /> },
        { name: "Rena", role: "Communicator + Designer", icon: <FaPalette className={darkMode ? "text-pink-400" : "text-pink-500"} /> }
      ],
      links: []
    },           
  ];

  // Helper function to get the appropriate border color class
  const getBorderColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'border-blue-500';
      case 'green': return 'border-green-500';
      case 'purple': return 'border-purple-500';
      case 'pink': return 'border-pink-500';
      default: return 'border-blue-500';
    }
  };

  // Helper function to get the background color class for icons with dark mode support
  const getIconBgClass = (color: string) => {
    if (darkMode) {
      switch (color) {
        case 'blue': return 'bg-blue-900/50';
        case 'green': return 'bg-green-900/50';
        case 'purple': return 'bg-purple-900/50';
        case 'pink': return 'bg-pink-900/50';
        default: return 'bg-blue-900/50';
      }
    } else {
      switch (color) {
        case 'blue': return 'bg-blue-100';
        case 'green': return 'bg-green-100';
        case 'purple': return 'bg-purple-100';
        case 'pink': return 'bg-pink-100';
        default: return 'bg-blue-100';
      }
    }
  };

  // Updated helper function to get the text color class for links with dark mode support
  const getTextColorClass = (color: string) => {
    if (darkMode) {
      switch (color) {
        case 'blue': return 'text-blue-400 hover:text-blue-300';
        case 'green': return 'text-green-400 hover:text-green-300';
        case 'purple': return 'text-purple-400 hover:text-purple-300';
        case 'pink': return 'text-pink-400 hover:text-pink-300';
        default: return 'text-blue-400 hover:text-blue-300';
      }
    } else {
      switch (color) {
        case 'blue': return 'text-blue-600 hover:text-blue-700';
        case 'green': return 'text-green-600 hover:text-green-700';
        case 'purple': return 'text-purple-600 hover:text-purple-700';
        case 'pink': return 'text-pink-600 hover:text-pink-700';
        default: return 'text-blue-600 hover:text-blue-700';
      }
    }
  };

  // Helper function to get the tag color classes - updated for dark mode
  const getTagColorClasses = (color: string) => {
    if (darkMode) {
      // Dark mode colors with proper contrast
      switch (color) {
        case 'blue': return 'bg-blue-900/50 text-blue-300 border border-blue-800/50';
        case 'green': return 'bg-green-900/50 text-green-300 border border-green-800/50';
        case 'purple': return 'bg-purple-900/50 text-purple-300 border border-purple-800/50';
        case 'pink': return 'bg-pink-900/50 text-pink-300 border border-pink-800/50';
        default: return 'bg-blue-900/50 text-blue-300 border border-blue-800/50';
      }
    } else {
      // Light mode colors (unchanged)
      switch (color) {
        case 'blue': return 'bg-blue-100 text-blue-700';
        case 'green': return 'bg-green-100 text-green-700';
        case 'purple': return 'bg-purple-100 text-purple-700';
        case 'pink': return 'bg-pink-100 text-pink-700';
        default: return 'bg-blue-100 text-blue-700';
      }
    }
  };

  return (
    <div className={`min-h-screen flex flex-col pt-22 ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900' 
        : 'bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50'
    }`}>
      <main className="flex-grow pt-4 pb-8 px-3 md:px-4 max-w-6xl mx-auto w-full">
        {!isLoaded ? (
          <div className="flex justify-center items-center h-64">
            <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${
              darkMode ? 'border-blue-400' : 'border-blue-500'
            }`}></div>
          </div>
        ) : (
          <>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
              className={`text-3xl md:text-5xl font-bold ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
              } text-center mb-6 md:mb-10`}
            >
              MY PROJECTS
            </motion.h1>

            {/* Projects Grid - improved layout and design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ 
                    boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.1)",
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  className={`${
                    darkMode 
                      ? 'backdrop-blur-sm bg-white/5 border-white/10' 
                      : 'backdrop-blur-sm bg-white/30 border-white/40'
                  } rounded-xl shadow-lg w-full text-left border overflow-hidden border-t-4 ${getBorderColorClass(project.color)}`}
                >
                  <div className="p-5 md:p-6">
                    <div className="flex items-start mb-4">
                      <div className={`rounded-lg p-2 ${getIconBgClass(project.color)} mr-4`}>
                        {project.icon}
                      </div>
                      <div>
                        <h2 className={`text-xl md:text-2xl font-bold ${
                          darkMode ? 'text-gray-100' : 'text-gray-800'
                        }`}>
                          {project.title}
                        </h2>
                        <div className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        } mt-1 uppercase tracking-wider font-medium`}>
                          {project.category}
                        </div>
                      </div>
                    </div>
                    
                    <p className={`text-base md:text-base ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    } mb-4 leading-relaxed`}>
                      {project.description}
                    </p>
                    
                    {/* Tools & Technologies Section */}
                    <div className="mb-4">
                      <h3 className={`text-sm font-semibold ${
                        darkMode ? 'text-gray-200' : 'text-gray-700'
                      } mb-2 uppercase tracking-wider`}>Tools & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(',').map((tech, i) => (
                          <span key={i} className={`text-sm md:text-xs px-2 py-1 rounded-full ${getTagColorClasses(project.color)}`}>
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Team Members Section */}
                    {project.team && (
                      <div className="mb-4">
                        <h3 className={`text-sm font-semibold ${
                          darkMode ? 'text-gray-200' : 'text-gray-700'
                        } mb-2 uppercase tracking-wider`}>Team Members</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.team.map((member, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                {member.icon}
                              </span>
                              <div className="flex flex-col">
                                <span className={`text-base sm:text-sm font-medium ${
                                  darkMode ? 'text-gray-200' : 'text-gray-800'
                                }`}>{member.name}</span>
                                <span className={`text-sm sm:text-xs ${
                                  darkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>{member.role}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.links.length > 0 && (
                      <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        {project.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center text-base sm:text-sm font-medium ${getTextColorClass(project.color)}`}
                          >
                            <span className="mr-2">{link.icon}</span>
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Skills Page Button - styled like home page buttons */}
            <motion.div 
              className="mt-16 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <motion.a
                href="/skills"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`${
                  darkMode 
                    ? 'bg-gradient-to-r from-cyan-900 to-teal-700 hover:from-cyan-600 hover:to-teal-600' 
                    : 'bg-gradient-to-r from-cyan-400 to-teal-600 hover:from-cyan-600 hover:to-teal-700'
                } text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg shadow-md relative overflow-hidden`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {/* Floating icons for Skills button */}
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-cyan-300/40' : 'text-white/30'}`}
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
                  <FaTools />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-teal-300/40' : 'text-white/30'}`}
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
                  <SiPython />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-teal-300/40' : 'text-white/30'}`}
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
                  <FaGraduationCap />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-teal-300/40' : 'text-white/30'}`}
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
                  <FaLaptopCode />
                </motion.span>
                
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
                  <SiReact />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-teal-300/40' : 'text-white/30'}`}
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
                  <FaChartBar />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-cyan-300/40' : 'text-white/30'}`}
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
                  <FaDatabase />
                </motion.span>
                
                {/* Button text */}
                <span className="relative z-10">Discover My Skills</span>
              </motion.a>
            </motion.div>
          </>
        )}
      </main>
    </div>
  );
}