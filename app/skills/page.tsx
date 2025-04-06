"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
} from "react-icons/fa";
import { SiDjango, SiLaravel, SiFlutter, SiAdobephotoshop } from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";

export default function Skills() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Match animations exactly with Projects page
  const titleAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  // Define skill categories with colors
  const skillCategories = [
    {
      name: "Programming Languages",
      color: "#4f46e5", // indigo
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
      color: "#10b981", // emerald
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, proficiency: 98 },
        { name: "Django", icon: <SiDjango />, proficiency: 100 },
        { name: "Laravel", icon: <SiLaravel />, proficiency: 98 },
        { name: "Flutter", icon: <SiFlutter />, proficiency: 100 },
      ],
    },
    {
      name: "Databases & Cloud",
      color: "#8b5cf6", // violet
      skills: [
        { name: "PL/SQL", icon: <FaDatabase />, proficiency: 100 },
        { name: "MongoDB", icon: <FaDatabase />, proficiency: 99 },
        { name: "Cloud Computing", icon: <FaCloud />, proficiency: 100 },
      ],
    },
    {
      name: "Systems & Networks",
      color: "#ef4444", // red
      skills: [
        { name: "Linux Shell", icon: <FaLinux />, proficiency: 97 },
        { name: "Networking", icon: <FaNetworkWired />, proficiency: 96 },
        { name: "ESP Wifi", icon: <FaNetworkWired />, proficiency: 100 },
        { name: "Security", icon: <FaLock />, proficiency: 99 },
      ],
    },
    {
      name: "Hardware & IoT",
      color: "#f59e0b", // amber
      skills: [
        { name: "IoT/Arduino", icon: <FaRobot />, proficiency: 100 },
        { name: "Microprocessors", icon: <FaMicrochip />, proficiency: 88 },
      ],
    },
    {
      name: "Software Engineering",
      color: "#6366f1", // indigo
      skills: [
        { name: "Data Structures", icon: <AiOutlineCode />, proficiency: 100 },
        { name: "System Design", icon: <FaLaptopCode />, proficiency: 95 },
        { name: "Agile Dev", icon: <FaTools />, proficiency: 92 },
        { name: "Maven", icon: <FaTools />, proficiency: 99 },
      ],
    },
    {
      name: "Media & Content",
      color: "#ec4899", // pink
      skills: [
        { name: "Photoshop", icon: <SiAdobephotoshop />, proficiency: 100 },
        { name: "Premiere Pro", icon: <FaVideo />, proficiency: 100 },
        { name: "Joomla", icon: <FaJoomla />, proficiency: 100 },
      ],
    },
    {
      name: "Artificial Intelligence",
      color: "#0ea5e9", // sky
      skills: [
        { name: "AI", icon: <FaRobot />, proficiency: 99 },
        { name: "ML/Jupyter", icon: <FaPython />, proficiency: 96 },
      ],
    },
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50 pt-12 pb-10">
      <main className="flex-grow pt-4 pb-8 px-3 md:px-4 max-w-6xl mx-auto w-full">
        {!isLoaded ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
              className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-6 md:mb-10"
            >
              My Skills
            </motion.h1>

            <motion.div 
              className="space-y-10 md:space-y-16"
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
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">{category.name}</h2>
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
                        className="bg-white backdrop-blur-sm bg-opacity-80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        {/* <div className="h-1.5" style={{ backgroundColor: category.color }}></div> */}
                        <div className="p-5">
                          <div className="flex items-center mb-3">
                            <div 
                              className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-white"
                              style={{ backgroundColor: category.color }}
                            >
                              <span className="text-lg">{skill.icon}</span>
                            </div>
                            <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                          </div>
                          
                          <div className="mt-2">
                            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className="h-2 rounded-full transform-gpu"
                                style={{ 
                                  backgroundColor: category.color,
                                  willChange: "width" 
                                }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.proficiency}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                              />
                            </div>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">Skill Level</span>
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
              <style jsx global>{`
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