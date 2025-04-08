"use client";
import React, { JSX } from 'react';
import { motion, AnimatePresence } from "framer-motion";
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
  FaGraduationCap,
  FaCalendarAlt,
  FaProjectDiagram,
  FaInfoCircle,
  FaLightbulb,
  FaBookmark,
  FaTimes,
  FaChevronRight,
  FaWifi,
} from "react-icons/fa";
import {
  SiDjango,
  SiLaravel,
  SiFlutter,
  SiAdobephotoshop,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiMysql,
  SiDiscord,
  SiRstudioide,
  SiMongodb,
  SiArduino,
  SiApachemaven,
  SiAdobepremierepro,
} from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";

// Define interfaces for proper typing
interface Skill {
  name: string;
  icon: JSX.Element;
  learned: string;
}

interface Category {
  name: string;
  lightColor: string;
  darkColor: string;
  color: string;
  skills: Skill[];
}

interface SelectedSkill {
  category: Category;
  skill: Skill;
  categoryIndex: number;
  skillIndex: number;
}

export default function Skills() {
  const { darkMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<SelectedSkill | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Helper function to get color based on dark mode
  const getCategoryColor = (lightColor: string, darkColor: string) => {
    return darkMode ? darkColor : lightColor;
  };

  // Define skill categories with colors for both light and dark modes
  const skillCategories: Category[] = [
    {
      name: "Programming Languages",
      lightColor: "#4f46e5", // indigo
      darkColor: "#6366f1", // lighter indigo for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "C", icon: <FaCuttlefish />, learned: "I learned during my 1st sem in 2021 & right now I know advance of it" },
        { name: "C++", icon: <FaCuttlefish />, learned: "I learned during my 2nd sem in 2022 & right now I know advance of it" },
        { name: "Python", icon: <FaPython />, learned: "I learned during my 5th sem in 2023 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Java", icon: <FaJava />, learned: "I learned during my 6th sem in 2024 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "PHP", icon: <FaPhp />, learned: "I learned during my 5th sem in 2023 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "JavaScript", icon: <SiJavascript />, learned: "I learned it by myself before joining college & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "TypeScript", icon: <SiTypescript />, learned: "I learned it by myself before joining college & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Dart", icon: <SiDart />, learned: "I learned during my 8th sem in 2025 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "R-Programming", icon: <SiRstudioide />, learned: "I learned during my 8th sem in 2025" },
      ],
    },
    {
      name: "Frameworks & Libraries",
      lightColor: "#10b981", // emerald
      darkColor: "#34d399", // lighter emerald for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, learned: "I learned it by myself before joining college & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Django", icon: <SiDjango />, learned: "I learned during my 7th sem in 2024 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Laravel", icon: <SiLaravel />, learned: "I learned it by myself in 2022" },
        { name: "Flutter", icon: <SiFlutter />, learned: "I learned during my 8th sem in 2025 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "React", icon: <FaReact />, learned: "I learned it by myself in 2025 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Next.js", icon: <SiNextdotjs />, learned: "I learned it by myself before joining college & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Discord.js", icon: <SiDiscord />, learned: "I learned it by myself before joining college & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, learned: "I learned it by myself in 2025 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Framer Motion", icon: <FaCode />, learned: "I learned it by myself in 2025 & right now I have learned advance of it by using in my projects/apps/api" },
      ],
    },
    {
      name: "Databases & Cloud",
      lightColor: "#8b5cf6", // violet
      darkColor: "#a78bfa", // lighter violet for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "PL/SQL", icon: <FaDatabase />, learned: "I learned during my 5th sem in 2023 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "MongoDB", icon: <SiMongodb />, learned: "I learned it by myself before joining college & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "MySQL", icon: <SiMysql />, learned: "I learned during my 2nd sem in 2022 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Cloud Computing", icon: <FaCloud />, learned: "I learned during my 7th sem in 2024 & right now I have learned advance of it by using in my projects/apps/api" },
      ],
    },
    {
      name: "Systems & Networks",
      lightColor: "#06b6d4", // cyan
      darkColor: "#22d3ee", // lighter cyan for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "Linux Shell", icon: <FaLinux />, learned: "I learned during my 4th sem in 2023 & right now I know advance of it" },
        { name: "Advanced Networking", icon: <FaNetworkWired />, learned: "I learned during my 7th sem in 2024 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "ESP Wifi", icon: <FaWifi />, learned: "I learned during my 4th sem in 2023 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Security", icon: <FaLock />, learned: "I learned during my 6th sem in 2024 & right now I have learned advance of it by using in my projects/apps/api" },
      ],
    },
    {
      name: "Hardware & IoT",
      lightColor: "#f59e0b", // amber
      darkColor: "#fbbf24", // lighter amber for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "IoT/Arduino", icon: <SiArduino />, learned: "I learned during my 4th sem in 2023 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Microprocessors", icon: <FaMicrochip />, learned: "I learned during my 4th sem in 2023" },
      ],
    },
    {
      name: "Software Engineering",
      lightColor: "#6366f1", // indigo
      darkColor: "#818cf8", // lighter indigo for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "Software Engineering", icon: <FaLaptopCode />, learned: "I learned during my 6th sem in 2024 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Data Structures", icon: <AiOutlineCode />, learned: "I learned during my 3rd sem in 2022 & right now I have learned advance of it by using in my projects/apps" },
        { name: "System Design", icon: <FaLaptopCode />, learned: "I learned during my 5th sem in 2023 & right now I have learned advance of it by using in my projects/apps" },
        { name: "Agile Dev", icon: <FaTools />, learned: "I learned during my 7th sem in 2024" },
        { name: "Maven", icon: <SiApachemaven />, learned: "I learned during my 7th sem in 2024" },
        { name: "npm", icon: <FaNpm />, learned: "I learned it by myself before joining college & right now I have learned advance of it by using in my projects/apps/api" },
      ],
    },
    {
      name: "Media & Content",
      lightColor: "#ec4899", // pink
      darkColor: "#f472b6", // lighter pink for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "Photoshop", icon: <SiAdobephotoshop />, learned: "I learned it by myself before joining college & right now I know advance of it" },
        { name: "Premiere Pro", icon: <SiAdobepremierepro />, learned: "I learned it by myself before joining college & right now I know advance of it" },
        { name: "Joomla", icon: <FaJoomla />, learned: "I learned during my 5th sem in 2023 & right now I have learned advance of it by using in my projects/apps" },
      ],
    },
    {
      name: "Artificial Intelligence",
      lightColor: "#0ea5e9", // sky
      darkColor: "#38bdf8", // lighter sky blue for dark mode
      get color() { return getCategoryColor(this.lightColor, this.darkColor); },
      skills: [
        { name: "AI", icon: <FaRobot />, learned: "I learned during my 6th sem in 2024 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "Machine Learning", icon: <FaChartBar />, learned: "I learned during my 6th sem in 2024 & right now I have learned advance of it by using in my projects/apps/api" },
        { name: "ML/Jupyter", icon: <FaPython />, learned: "I learned during my 8th sem in 2025" },
        { name: "Prompt Engineering", icon: <FaCode />, learned: "I learned it by myself in 2025 as AI has evolved" },
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

  // Handle modal opening
  const openSkillDetail = (categoryIndex: number, skillIndex: number) => {
    setSelectedSkill({
      category: skillCategories[categoryIndex],
      skill: skillCategories[categoryIndex].skills[skillIndex],
      categoryIndex,
      skillIndex
    });
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05
      }
    })
  };

  const slideIn = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  const modalAnimation = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <div className={`min-h-screen pt-16 pb-10 ${darkMode
      ? 'bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 text-gray-100'
      : 'bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50 text-gray-800'
      }`}>
      <main className="flex-grow pt-8 pb-8 px-3 md:px-6 max-w-7xl mx-auto w-full">
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
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8"
            >
              MY SKILLS JOURNEY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-center max-w-3xl mx-auto mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Explore my technical journey through different domains and technologies I've mastered over the years
            </motion.p>

            {/* New Layout - Two-column design with sidebar for larger screens */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Category Sidebar - Vertical on larger screens, horizontal tabs on mobile */}
              <div className={`${isMobile ? 'mb-6' : 'md:w-64 lg:w-72 flex-shrink-0'}`}>
                {isMobile ? (
                  // Mobile horizontal scrolling tabs
                  <div className="overflow-x-auto pb-3">
                    <div className="flex space-x-3">
                      {skillCategories.map((category, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveCategory(index)}
                          className={`whitespace-nowrap px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === index
                            ? 'text-white shadow-md'
                            : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'} hover:shadow`
                            }`}
                          style={{
                            backgroundColor: activeCategory === index ? category.color : 'transparent',
                            border: `2px solid ${category.color}`,
                          }}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Desktop vertical category navigation
                  <div className={`p-5 rounded-xl sticky top-24 ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
                    } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h2 className="text-lg font-bold mb-4">Skill Categories</h2>
                    <div className="space-y-2">
                      {skillCategories.map((category, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setActiveCategory(index)}
                          whileHover={{ x: 5 }}
                          whileTap={{ x: 0, scale: 0.98 }}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between ${activeCategory === index
                            ? 'text-white'
                            : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`
                            }`}
                          style={{
                            backgroundColor: activeCategory === index ? category.color : 'transparent',
                            borderLeft: `3px solid ${category.color}`,
                          }}
                        >
                          <span>{category.name}</span>
                          {activeCategory === index && (
                            <FaChevronRight className="ml-2" />
                          )}
                        </motion.button>
                      ))}
                    </div>

                    {/* Skills Statistics Summary */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-sm font-semibold mb-3">Skills Overview</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Total Skills
                          </span>
                          <span className="font-bold" style={{ color: skillCategories[0].color }}>
                            {skillCategories.reduce((total, category) => total + category.skills.length, 0)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Categories
                          </span>
                          <span className="font-bold" style={{ color: skillCategories[1].color }}>
                            {skillCategories.length}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Advanced Skills
                          </span>
                          <span className="font-bold" style={{ color: skillCategories[2].color }}>
                            {skillCategories.flatMap(c => c.skills).filter(s =>
                              s.learned.includes("advance")
                            ).length}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Self-taught
                          </span>
                          <span className="font-bold" style={{ color: skillCategories[3].color }}>
                            {skillCategories.flatMap(c => c.skills).filter(s =>
                              s.learned.includes("by myself")
                            ).length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Main Content Area */}
              <div className="flex-grow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeIn}
                    className="relative"
                  >
                    <div className="mb-5 flex items-center">
                      <h2
                        className="text-2xl font-bold"
                        style={{ color: skillCategories[activeCategory].color }}
                      >
                        {skillCategories[activeCategory].name}
                      </h2>
                      <div
                        className="ml-3 h-1 flex-grow rounded-full"
                        style={{ backgroundColor: skillCategories[activeCategory].color }}
                      ></div>
                    </div>

                    {/* Skills Grid - Simple and clean cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={cardAnimation}
                          initial="hidden"
                          animate="visible"
                          custom={skillIndex}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className={`${darkMode ? 'bg-gray-800/90 hover:bg-gray-800 border-gray-700' : 'bg-white/90 hover:bg-white border-gray-200'} 
                            rounded-xl p-5 cursor-pointer border transition-all duration-300 shadow-sm hover:shadow-md`}
                          onClick={() => openSkillDetail(activeCategory, skillIndex)}
                        >
                          <div className="flex items-start">
                            <div
                              className="w-12 h-12 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0"
                              style={{ backgroundColor: skillCategories[activeCategory].color }}
                            >
                              <span className="text-xl">{skill.icon}</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                              <div className="flex items-center mb-3">
                                <FaGraduationCap className={`mr-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <span className="text-xs" style={{ color: darkMode ? 'rgb(209 213 219)' : 'rgb(75 85 99)' }}>
                                  {skill.learned.includes("before joining") ? "Pre-College" :
                                    skill.learned.includes("1st sem") ? "2021" :
                                      skill.learned.includes("2nd sem") ? "2022" :
                                        skill.learned.includes("3rd sem") ? "2022" :
                                          skill.learned.includes("4th sem") ? "2023" :
                                            skill.learned.includes("5th sem") ? "2023" :
                                              skill.learned.includes("6th sem") ? "2024" :
                                                skill.learned.includes("7th sem") ? "2024" :
                                                  skill.learned.includes("8th sem") ? "2025" :
                                                    skill.learned.includes("myself in 2022") ? "2022" :
                                                      skill.learned.includes("myself in 2025") ? "2025" : ""}
                                </span>
                                <span className="mx-2">•</span>
                                <span
                                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                                  style={{
                                    backgroundColor: skillCategories[activeCategory].color + '30',
                                    color: skillCategories[activeCategory].color
                                  }}
                                >
                                  {skill.learned.includes("advance") ? "Advanced" : "Intermediate"}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 flex justify-end">
                            <button
                              className="text-xs flex items-center"
                              style={{ color: skillCategories[activeCategory].color }}
                            >
                              <span>View Details</span>
                              <FaChevronRight className="ml-1" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Skill Detail Modal */}
            <AnimatePresence>
              {showModal && selectedSkill && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                  <motion.div
                    className={`relative w-full max-w-2xl rounded-xl overflow-hidden ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'
                      } shadow-2xl`}
                    variants={modalAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Modal Header */}
                    <div
                      className="p-6"
                      style={{ backgroundColor: selectedSkill.category.color }}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="bg-white p-3 rounded-xl mr-4 shadow-md">
                            <span className="text-2xl" style={{ color: selectedSkill.category.color }}>
                              {selectedSkill.skill.icon}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{selectedSkill.skill.name}</h3>
                            <p className="text-gray-100 opacity-90 text-sm">{selectedSkill.category.name}</p>
                          </div>
                        </div>
                        <button
                          onClick={closeModal}
                          className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <FaLightbulb className="mr-2 text-yellow-400" />
                          Learning Journey
                        </h4>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {selectedSkill.skill.learned}
                        </p>
                      </div>

                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold flex items-center">
                            <FaGraduationCap className="mr-2" style={{ color: selectedSkill.category.color }} />
                            Skill Timeline
                          </h4>
                          <span
                            className="text-xs font-medium px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: selectedSkill.category.color + '30',
                              color: selectedSkill.category.color
                            }}
                          >
                            {selectedSkill.skill.learned.includes("advance") ? "Advanced" : "Intermediate"}
                          </span>
                        </div>

                        <div className={`h-2 w-full rounded-full mb-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div
                            className="h-full rounded-full"
                            style={{
                              backgroundColor: selectedSkill.category.color,
                              width: selectedSkill.skill.learned.includes("advance") ? '100%' : '70%'
                            }}
                          ></div>
                        </div>

                        <div className="flex justify-between text-xs">
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                            {selectedSkill.skill.learned.includes("before joining") ? "Pre-College" :
                              selectedSkill.skill.learned.includes("1st sem") ? "2021" :
                                selectedSkill.skill.learned.includes("2nd sem") ? "2022" :
                                  selectedSkill.skill.learned.includes("3rd sem") ? "2022" :
                                    selectedSkill.skill.learned.includes("4th sem") ? "2023" :
                                      selectedSkill.skill.learned.includes("5th sem") ? "2023" :
                                        selectedSkill.skill.learned.includes("6th sem") ? "2024" :
                                          selectedSkill.skill.learned.includes("7th sem") ? "2024" :
                                            selectedSkill.skill.learned.includes("8th sem") ? "2025" :
                                              selectedSkill.skill.learned.includes("myself in 2022") ? "2022" :
                                                selectedSkill.skill.learned.includes("myself in 2025") ? "2025" : ""}
                          </span>
                          <span style={{ color: selectedSkill.category.color }}>Present</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <FaProjectDiagram className="mr-2" style={{ color: selectedSkill.category.color }} />
                          Implementation Examples
                        </h4>
                        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                          <ul className="space-y-2">
                            {selectedSkill.skill.name === "C" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Learning Programming Fundamentals</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      C helped me grasp fundamental programming concepts.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">IoT & Embedded Systems</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Used C for IoT apps on Arduino Uno.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Dam Water Overflow System</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built embedded system to prevent overflow.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "C++" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Object-Oriented Programming</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      C++ helped me understand OOP principles.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Game Development Potential</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      C++ for future game development projects.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Memory and Resource Control</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      High-level control over memory and resources.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "PHP" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Dynamic Web Development</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built dynamic websites with PHP and MySQL.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Laravel MVC Framework</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Developed websites using Laravel MVC structure.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Server-Side APIs</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Created server-side APIs for web apps.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "TypeScript" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Interactive UI Development</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built interactive UIs using React and TypeScript.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Backend APIs with Node.js</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Developing backend APIs with TypeScript and Node.js.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Ongoing Learning</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Continuously learning TypeScript to improve skills.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Dart" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Cross-Platform App with Flutter</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built cross-platform app BarkBuddy with Flutter.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Productive Development</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Dart used for efficient and productive development.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Smart Gujarat Hackathon 2025</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Participated in the 2025 SSIP Hackathon using Dart.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "R-Programming" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Statistical Analysis with R</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Performed statistical calculations using R.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Data Visualization with ggplot2</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Created data visualizations with ggplot2.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Data Prediction with R</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Used R for data prediction in MScIT.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Node.js" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Building Discord Bots</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Developed Discord bots and websites using Node.js.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Django" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Admin Dashboard Development</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Created admin sites and web apps with Django.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Visitor Management System</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Developed Agl Visitor Management System using Django.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">TrashTrack Web App</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built TrashTrack web app with Django framework.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Laravel" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Website with Laravel</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Created a website using Laravel framework.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Flutter" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Cross-Platform App Development</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built BarkBuddy mobile app using Flutter.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Mobile App for TrashTrack</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built TrashTrack mobile app using Flutter.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Mobile UI/UX Skills</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Learned mobile UI/UX design with Flutter.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "React" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">UI Development with React</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built interactive websites and UIs using React.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">React-Powered Website</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      This website is powered by React.js.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Next.js" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Next.js Websites</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built fast websites using Next.js framework.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">UI/UX with Next.js</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Created web and native UIs with Next.js.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Performance & SEO Optimization</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Focused on SEO & performance in Next.js.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Discord.js" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Building Discord Bots</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Developed bots for Discord using Discord.js.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Preo Bot - 300k Users</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built Preo bot, serving over 300k users.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Bot Development Experiments</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Conducted various experiments with Discord.js.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Tailwind CSS" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">UI Components with Tailwind</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built responsive UI components using Tailwind.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Framer Motion" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Adding Animations to Websites</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Enhanced web pages with stunning animations.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "PL/SQL" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Learning PL/SQL in College</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Gained knowledge of PL/SQL during college.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "MongoDB" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Data Storage for Preo Bot</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Used MongoDB to store data for Preo bot.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Future MongoDB Projects</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Plan to use MongoDB in future applications.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "MySQL" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Essential for Every Project</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Used MySQL in almost every project I've worked on.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Cloud Computing" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Cloud Computing Passion</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Passionate about cloud computing and use it in multiple projects.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Ongoing Cloud Computing Projects</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Continuously expanding my knowledge of cloud computing.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Linux Shell" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Testing Commands on Linux</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Used Linux shell for testing commands on cloud servers.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Advanced Networking" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Advanced Networking in Mscit</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Learned advanced networking during Mscit and continue learning.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "ESP Wifi" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">IoT Wi-Fi Projects with ESP</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Created IoT Wi-Fi projects like Dam Water Overflow System with ESP.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Security" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Passion for Security</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Strong interest in security and still expanding knowledge.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Python" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Data Analysis Projects</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Statistical analysis and visualization with pandas and matplotlib
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Web Development with Django</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Creating robust backend APIs and web applications
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Automation Scripts</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Task automation and system administration
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "JavaScript" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Interactive Web Applications</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Creating dynamic user interfaces and interactive experiences
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Frontend Frameworks Integration</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Developing applications with React, Vue, and other frameworks
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">API Development</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Building RESTful services and integrating with external APIs
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Java" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Android App Development</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Creating native mobile applications for Android
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Enterprise Applications</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Developing robust business software solutions
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Backend Services</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Creating scalable server applications and APIs
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "IoT/Arduino" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">IoT Devices with Arduino</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Built IoT devices like the Dam Water Overflow System with Arduino.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Microprocessors" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Learning Microprocessors in Mscit</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Learn microprocessors in detail during MScIT, and continue learning afterwards.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Software Engineering" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Learning Software Engineering in Mscit</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Gained knowledge in software engineering during Mscit.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Data Structures" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Passion for Data Structures</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Enjoyed studying data structures and want to enhance my skills further.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "System Design" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">System Design in Mscit</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Learned about scalability, maintainability, and efficiency in system design during Mscit.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Agile Dev" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Agile Development Practices</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Learned iterative and incremental approaches to software development through Agile.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Maven" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Java Projects with Maven</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Used Maven tool for managing dependencies in Java projects.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "npm" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">npm for Package Management</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Used npm for package management while building Preo and other projects.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Photoshop" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Photo Editing with Photoshop</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Learned Photoshop from my father; used for photo corrections and edits.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Premiere Pro" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Video Editing with Premiere Pro</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Learned Premiere Pro for YouTube videos and game beat syncs.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Joomla" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Website Development with Joomla</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Learned Joomla during Mscit and built websites using its interface.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "AI" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">AI is very interesting</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      AI has been very interesting for me lately.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Daily learning in AI</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      I learn new things from AI daily.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Integrating AI with projects</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      I enjoy integrating AI with various projects and apps.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Machine Learning" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Machine Learning basics</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      I learned Machine Learning during Mscit.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Plans to learn more</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      I plan to learn more about Machine Learning in the future.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "ML/Jupyter" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Used Pandas & Numpy</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      I used pandas, numpy, and many more during Mscit.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Used Matplotlib & Models</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      I used matplotlib for visualizations and models in Mscit.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {selectedSkill.skill.name === "Prompt Engineering" && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Interest in Prompt Engineering</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      I have a growing interest in Prompt Engineering.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Learning daily</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      I learn something new every day in Prompt Engineering.
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Enhancing Prompt Engineering skills</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      I’m still learning to enhance my skills in Prompt Engineering.
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                            {!["Photoshop", "Premiere Pro", "Joomla", "AI", "Machine Learning", "ML/Jupyter", "Prompt Engineering", "Software Engineering", "Data Structures", "System Design", "Agile Dev", "Maven", "npm", "IoT/Arduino", "Microprocessors", "Linux Shell", "Advanced Networking", "ESP Wifi", "Security", "PL/SQL", "MongoDB", "MySQL", "Cloud Computing", "Node.js", "Django", "Laravel", "Flutter", "React", "Next.js", "Discord.js", "Tailwind CSS", "Framer Motion", "C", "C++", "PHP", "TypeScript", "Dart", "R-Programming", "Python", "JavaScript", "Java"].includes(selectedSkill.skill.name) && (
                              <>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Personal Projects</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Self-directed learning and experimentation
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Academic Applications</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Using this skill in academic projects and coursework
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <FaChevronRight className="mt-1 mr-2 flex-shrink-0" style={{ color: selectedSkill.category.color }} />
                                  <div>
                                    <span className="font-medium">Professional Implementation</span>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      Applied in real-world scenarios and projects
                                    </p>
                                  </div>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Modal Footer */}
                    <div className={`px-6 py-4 flex justify-end border-t ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                      <button
                        onClick={closeModal}
                        className="px-4 py-2 rounded-lg font-medium transition-colors"
                        style={{
                          backgroundColor: selectedSkill.category.color + '20',
                          color: selectedSkill.category.color
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </>
        )}
      </main>
    </div>
  );
}
