"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  FaVideo,
  FaCuttlefish,
  FaPython,
  FaNodeJs,
  FaCode,
  FaPhp,
  FaDatabase,
  FaLinux,
  FaJava,
  FaTools,
  FaMicrochip,
  FaCloud,
  FaNetworkWired,
  FaJoomla,
  FaRobot,
  FaLock,
  FaChartBar,
  FaLaptopCode,
  FaReact,
  FaNpm,
} from "react-icons/fa";
import { SiDjango, SiLaravel, SiFlutter, SiAdobephotoshop, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";

export default function Skills() {
  const { darkMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animationsTriggered, setAnimationsTriggered] = useState<{[key: string]: boolean}>({});

  // Helper function to get color based on dark mode
  const getCategoryColor = (lightColor: string, darkColor: string) => {
    return darkMode ? darkColor : lightColor;
  };

  // Define skill categories with colors for both light and dark modes
  const skillCategories = [
    {
      name: "Programming Languages",
      lightColor: "#4f46e5", // indigo
      darkColor: "#312e81", // deep indigo for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "C", icon: <FaCuttlefish />, proficiency: 100 },
        { name: "C++", icon: <FaCuttlefish />, proficiency: 99 },
        { name: "Python", icon: <FaPython />, proficiency: 100 },
        { name: "Java", icon: <FaJava />, proficiency: 100 },
        { name: "PHP", icon: <FaPhp />, proficiency: 100 },
        { name: "R-Programming", icon: <FaChartBar />, proficiency: 96 },
      ],
    },
    {
      name: "Frameworks & Libraries",
      lightColor: "#10b981", // emerald
      darkColor: "#065f46", // deep emerald for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, proficiency: 98 },
        { name: "Django", icon: <SiDjango />, proficiency: 100 },
        { name: "Laravel", icon: <SiLaravel />, proficiency: 98 },
        { name: "Flutter", icon: <SiFlutter />, proficiency: 100 },
        { name: "React", icon: <FaReact />, proficiency: 95 },
        { name: "Next.js", icon: <SiNextdotjs />, proficiency: 92 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, proficiency: 98 },
        { name: "Framer Motion", icon: <FaCode />, proficiency: 90 },
      ],
    },
    {
      name: "Databases & Cloud",
      lightColor: "#8b5cf6", // violet
      darkColor: "#5b21b6", // deep violet for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "PL/SQL", icon: <FaDatabase />, proficiency: 100 },
        { name: "MongoDB", icon: <FaDatabase />, proficiency: 99 },
        { name: "Cloud Computing", icon: <FaCloud />, proficiency: 100 },
      ],
    },
    {
      name: "Systems & Networks",
      lightColor: "#06b6d4", // cyan
      darkColor: "#0e7490", // deep cyan for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "Linux Shell", icon: <FaLinux />, proficiency: 97 },
        { name: "Networking", icon: <FaNetworkWired />, proficiency: 96 },
        { name: "ESP Wifi", icon: <FaNetworkWired />, proficiency: 100 },
        { name: "Security", icon: <FaLock />, proficiency: 99 },
      ],
    },
    {
      name: "Hardware & IoT",
      lightColor: "#f59e0b", // amber
      darkColor: "#b45309", // deep amber for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "IoT/Arduino", icon: <FaRobot />, proficiency: 100 },
        { name: "Microprocessors", icon: <FaMicrochip />, proficiency: 88 },
      ],
    },
    {
      name: "Software Engineering",
      lightColor: "#6366f1", // indigo
      darkColor: "#4338ca", // deep indigo for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "Data Structures", icon: <AiOutlineCode />, proficiency: 100 },
        { name: "System Design", icon: <FaLaptopCode />, proficiency: 95 },
        { name: "Agile Dev", icon: <FaTools />, proficiency: 92 },
        { name: "Maven", icon: <FaTools />, proficiency: 99 },
        { name: "npm", icon: <FaNpm />, proficiency: 97 },
      ],
    },
    {
      name: "Media & Content",
      lightColor: "#ec4899", // pink
      darkColor: "#be185d", // deep pink for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "Photoshop", icon: <SiAdobephotoshop />, proficiency: 76 },
        { name: "Premiere Pro", icon: <FaVideo />, proficiency: 88 },
        { name: "Joomla", icon: <FaJoomla />, proficiency: 100 },
      ],
    },
    {
      name: "Artificial Intelligence",
      lightColor: "#0ea5e9", // sky
      darkColor: "#0369a1", // deep sky blue for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "AI", icon: <FaRobot />, proficiency: 99 },
        { name: "ML/Jupyter", icon: <FaPython />, proficiency: 96 },
      ],
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Add effect to handle fast scrolling
  useEffect(() => {
    if (!isLoaded) return;
    
    // Set a timeout to ensure all bars are filled after a certain time
    const timeout = setTimeout(() => {
      const allKeys: {[key: string]: boolean} = {};
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((_, skillIndex) => {
          allKeys[`${categoryIndex}-${skillIndex}`] = true;
        });
      });
      setAnimationsTriggered(allKeys);
    }, 2000); // Fill all bars after 2 seconds as fallback
    
    return () => clearTimeout(timeout);
  }, [isLoaded, skillCategories]);

  // Match animations exactly with Projects page
  const titleAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.03
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 12 
      }
    }
  };

  // Create a function to mark an animation as triggered
  const markAnimationTriggered = (categoryIndex: number, skillIndex: number) => {
    setAnimationsTriggered(prev => ({
      ...prev,
      [`${categoryIndex}-${skillIndex}`]: true
    }));
  };

  return (
    <div className={`min-h-screen pt-22 pb-10 ${
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
              MY SKILLS
            </motion.h1>

            <motion.div 
              className={`space-y-10 md:space-y-16 ${isLoaded ? 'skills-loaded' : ''}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.section 
                  key={categoryIndex}
                  className="mb-6"
                  variants={categoryVariants}
                  viewport={{ once: true, amount: 0.1 }}
                  whileInView="visible"
                >
                  <div className="flex items-center mb-6">
                    <div 
                      className="h-6 w-6 md:h-8 md:w-8 rounded-full mr-3"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <h2 className={`text-xl md:text-2xl font-bold ${
                      darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>{category.name}</h2>
                    <div 
                      className="h-[2px] flex-grow ml-4 rounded-full"
                      style={{ backgroundColor: category.color }}
                    ></div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={cardVariants}
                        className={`${
                          darkMode 
                            ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700' 
                            : 'bg-white backdrop-blur-sm bg-opacity-80 border-gray-100'
                        } rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border`}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="p-5">
                          <div className="flex items-center mb-3">
                            <div 
                              className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-white"
                              style={{ backgroundColor: category.color }}
                            >
                              <span className="text-lg">{skill.icon}</span>
                            </div>
                            <h3 className={`font-semibold ${
                              darkMode ? 'text-gray-100' : 'text-gray-800'
                            }`}>{skill.name}</h3>
                          </div>
                          
                          <div className="mt-2">
                            <div className={`w-full ${
                              darkMode ? 'bg-gray-700' : 'bg-gray-200'
                            } rounded-full h-2 overflow-hidden`}>
                              <motion.div
                                className="h-2 rounded-full transform-gpu"
                                style={{ 
                                  backgroundColor: category.color,
                                  willChange: "width",
                                  // Always apply final width as inline style as fallback
                                  width: animationsTriggered[`${categoryIndex}-${skillIndex}`] 
                                    ? `${skill.proficiency}%` 
                                    : "0%"
                                }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.proficiency}%` }}
                                viewport={{ 
                                  once: true, 
                                  amount: 0.1, // Reduced threshold - trigger earlier
                                  margin: "100px" // Add margin for earlier detection
                                }}
                                transition={{ 
                                  duration: 1.0, 
                                  ease: "easeOut",
                                  type: "tween"
                                }}
                                onAnimationComplete={() => markAnimationTriggered(categoryIndex, skillIndex)}
                              />
                            </div>
                            <div className="flex justify-between mt-1">
                              <span className={`text-xs ${
                                darkMode ? 'text-gray-400' : 'text-gray-500'
                              }`}>Skill Level</span>
                              <span 
                                className="text-xs font-medium"
                                style={{ color: category.color }}
                              >
                                {skill.proficiency}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </motion.div>

            {/* Mobile sequential loading control */}
            {isMobile && (
              <style jsx>{`
                @media (max-width: 767px) {
                  .space-y-10 > * + * {
                    margin-top: 4rem;
                  }
                }
              `}</style>
            )}
          </>
        )}
      </main>
    </div>
  );
}