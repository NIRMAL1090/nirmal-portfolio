"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { FaDiscord, FaGlobe, FaCode, FaMobile, FaMicrochip, FaCrown, FaDollarSign, FaUsers, FaLaptopCode, FaPalette, FaTools, FaGraduationCap, FaExternalLinkAlt, FaLayerGroup, FaCalendar } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiMongodb, SiDjango, SiPhp, SiMysql, SiArduino, SiFlutter, SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";
import { MdClose } from "react-icons/md";

export default function Projects() {
  const { darkMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Load the page content after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle click outside the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Project data array with enhanced metadata
  const projects = [
    {
      title: "PreoMusic Bots",
      description: "Developed three verified Discord music bots (PreoMusic1, PreoMusic2, PreoMusic3) with over 5.6k active users and hundreds of thousands of total users. Initially offered for free, later sold them — and after 6–7 months, on July 1st, 2023, launched Preo, which now serves over 423,000 users. Our team is actively expanding it into a multipurpose bot with upcoming moderation features. The project has taught me about scaling services, managing user experiences, and working with a dedicated team to continually improve our offering.",
      tech: "Discord.js, Node.js, MongoDB, Lavalink v4",
      techIcons: [<SiJavascript key="js" />, <SiMongodb key="mongodb" />],
      category: "Backend Development",
      image: "/images/01project_preo.webp",
      year: "2020-2025",
      color: "blue",
      icon: <FaDiscord className={darkMode ? "text-blue-400" : "text-blue-500"} />,
      team: [
        { name: "Nirmal", role: "Owner", icon: <FaCrown className={darkMode ? "text-yellow-300" : "text-yellow-500"} /> },
        { name: "Arnav", role: "Developer", icon: <FaCode className={darkMode ? "text-blue-400" : "text-blue-500"} /> },
        { name: "Lordfalkorsinn", role: "Investor", icon: <FaDollarSign className={darkMode ? "text-green-400" : "text-green-500"} /> }
      ],
      links: [
        {
          text: "Preo Website",
          url: "https://preo.me/",
          icon: <FaGlobe className={darkMode ? "text-blue-400" : "text-blue-600"} />
        },
        {
          text: "Invite Preo Bot",
          url: "https://discord.com/discovery/applications/1124688116268138547",
          icon: <FaDiscord className={darkMode ? "text-blue-400" : "text-blue-600"} />
        }
      ],
      highlights: [
        "423,000+ active users",
        "99.9% uptime reliability",
        "Multipurpose integration",
        "Modern audio processing"
      ]
    },
    {
      title: "Dam Water Overflow System",
      description: "An IoT project during the GLS Cybershadez university competition using Arduino Uno to monitor and prevent dam water overflow, earning 2nd place. The system featured real-time water level monitoring, with live data accessible through a mobile app. It automatically triggered buzzer alerts and sent notifications to users based on critical water levels, ensuring timely warnings and proactive safety measures.",
      tech: "Arduino Uno, IoT Sensors, Blynk, ESP8266",
      techIcons: [<SiArduino key="arduino" />],
      category: "IoT",
      image: "/images/02project_dam.webp",
      year: "2023",
      color: "green",
      icon: <FaMicrochip className={darkMode ? "text-green-400" : "text-green-500"} />,
      team: [
        { name: "Nirmal", role: "Team Member", icon: <FaUsers className={darkMode ? "text-green-400" : "text-green-500"} /> },
        { name: "Shivangi", role: "Team Member", icon: <FaUsers className={darkMode ? "text-green-400" : "text-green-500"} /> },
        { name: "Punit", role: "Team Member", icon: <FaUsers className={darkMode ? "text-green-400" : "text-green-500"} /> }
      ],
      links: [],
      highlights: [
        "2nd place in university competition",
        "Real-time monitoring system",
        "Emergency alert mechanism",
        "Mobile app integration"
      ]
    },
    {
      title: "AGL Showroom Website",
      description: "Developed a Django-based showroom e-commerce and visitor handling system as a bachelor's mini project. The system allowed customers to scan a QR code on entry, submit their preferences, and get dynamically assigned to employees. Features included real-time cart management, product tracking, employee notifications, admin dashboards, and automated invoice generation — all aimed at enhancing the in-store shopping experience.",
      tech: "Django, SQLite, JavaScript, Bootstrap, Django Allauth",
      techIcons: [<SiDjango key="django" />, <SiJavascript key="js" />],
      category: "Web Development",
      image: "/images/03project_algshowroom.webp",
      year: "2024",
      color: "purple",
      icon: <FaCode className={darkMode ? "text-purple-400" : "text-purple-500"} />,
      team: [
        { name: "Nirmal", role: "Backend + Frontend Developer", icon: <FaLaptopCode className={darkMode ? "text-purple-400" : "text-purple-500"} /> },
        { name: "Shivangi", role: "Backend + Frontend Developer", icon: <FaLaptopCode className={darkMode ? "text-purple-400" : "text-purple-500"} /> },
        { name: "Punit", role: "Frontend Developer", icon: <FaCode className={darkMode ? "text-purple-400" : "text-purple-500"} /> }
      ],
      links: [],
      highlights: [
        "QR code entry system",
        "Real-time customer assignment",
        "Automated invoice generation",
        "Admin dashboard analytics"
      ]
    },
    {
      title: "BarkBuddy App",
      description: "A Flutter-based Android app for dog owners, featuring dog boarding, borrowing, vaccination bookings, and event participation. Connects owners with reliable caretakers during travel, ensuring consistent pet care. Includes event funding and vaccination scheduling. Backend uses PHP APIs, MySQL, Google Maps, and Geoapify. Admin portal built with Django REST Framework, Django Channels, and Jazzmin for easy platform management. Ready release APK available.",
      tech: "Flutter, PHP API, MySQL, Google Maps, Django REST",
      techIcons: [<SiFlutter key="flutter" />, <SiPhp key="php" />, <SiMysql key="mysql" />, <SiDjango key="django" />],
      category: "Mobile App",
      image: "/images/04project_barkbuddy.webp",
      year: "2024-2025",
      color: "pink",
      icon: <FaMobile className={darkMode ? "text-pink-400" : "text-pink-500"} />,
      team: [
        { name: "Nirmal", role: "Backend + Frontend Developer", icon: <FaLaptopCode className={darkMode ? "text-pink-400" : "text-pink-500"} /> },
        { name: "Shivangi", role: "Backend + Frontend Developer", icon: <FaLaptopCode className={darkMode ? "text-pink-400" : "text-pink-500"} /> },
        { name: "Bansi", role: "Backend + Frontend Developer", icon: <FaLaptopCode className={darkMode ? "text-pink-400" : "text-pink-500"} /> },
        { name: "Rena", role: "Communicator + Designer", icon: <FaPalette className={darkMode ? "text-pink-400" : "text-pink-500"} /> }
      ],
      links: [],
      highlights: [
        "Cross-platform mobile app",
        "Geolocation services",
        "Integrated payment system",
        "Admin portal with analytics"
      ]
    },
    {
      title: "Personal Portfolio Website",
      description: "My portfolio at nirmal.social — built with Next.js, React, Tailwind CSS, and Framer Motion. It’s fast, responsive, and designed to feel interactive with smooth animations and dark/light mode. This site is where I share my journey in tech — from creating Discord bots like Preo, to building apps like BarkBuddy, and working on real-world IoT and software projects. It includes direct links to my GitHub, LinkedIn, YouTube, and more. Everything here runs on a lightweight Server, built with performance and personality in mind.",
      tech: "Next.js 14, React, Tailwind CSS, Framer Motion, TypeScript",
      techIcons: [<SiNextdotjs key="nextjs" />, <SiReact key="react" />, <SiTailwindcss key="tailwind" />, <SiTypescript key="ts" />],
      category: "Web Development",
      image: "/images/05project_portfolio.webp",
      year: "2025",
      color: "cyan",
      icon: <SiNextdotjs className={darkMode ? "text-cyan-400" : "text-cyan-500"} />,
      team: [
        { name: "Nirmal", role: "Developer", icon: <FaCode className={darkMode ? "text-cyan-400" : "text-cyan-500"} /> }
      ],
      links: [
        {
          text: "Live Website",
          url: "/",
          icon: <FaGlobe className={darkMode ? "text-cyan-400" : "text-cyan-600"} />
        }
      ],
      highlights: [
        "Next.js 14 implementation",
        "Dynamic theme switching",
        "Interactive UI components",
        "Optimized performance metrics"
      ]
    }
  ];

  // Filter projects by category if a filter is selected
  const filteredProjects = filterCategory
    ? projects.filter(project => project.category === filterCategory)
    : projects;

  // Get unique categories for filter
  const categories = Array.from(new Set(projects.map(project => project.category)));

  // Define types for color system
  type ProjectColor = 'blue' | 'green' | 'purple' | 'pink' | 'cyan';
  type ThemeType = 'light' | 'dark';

  // Helper function to get styling classes based on project color
  const getColorClass = (color: string, type: 'border' | 'bg' | 'text' | 'tag' | 'hover' | 'year') => {
    const colorMap = {
      border: {
        light: {
          blue: 'border-blue-500',
          green: 'border-green-500',
          purple: 'border-purple-500',
          pink: 'border-pink-500',
          cyan: 'border-cyan-500'
        },
        dark: {
          blue: 'border-blue-600',
          green: 'border-green-600',
          purple: 'border-purple-600',
          pink: 'border-pink-600',
          cyan: 'border-cyan-600'
        }
      },
      bg: {
        light: {
          blue: 'bg-blue-100',
          green: 'bg-green-100',
          purple: 'bg-purple-100',
          pink: 'bg-pink-100',
          cyan: 'bg-cyan-100'
        },
        dark: {
          blue: 'bg-blue-800/30',
          green: 'bg-green-800/30',
          purple: 'bg-purple-800/30',
          pink: 'bg-pink-800/30',
          cyan: 'bg-cyan-800/30'
        }
      },
      text: {
        light: {
          blue: 'text-blue-600 hover:text-blue-700',
          green: 'text-green-600 hover:text-green-700',
          purple: 'text-purple-600 hover:text-purple-700',
          pink: 'text-pink-600 hover:text-pink-700',
          cyan: 'text-cyan-600 hover:text-cyan-700'
        },
        dark: {
          blue: 'text-blue-400 hover:text-blue-300',
          green: 'text-green-400 hover:text-green-300',
          purple: 'text-purple-400 hover:text-purple-300',
          pink: 'text-pink-400 hover:text-pink-300',
          cyan: 'text-cyan-400 hover:text-cyan-300'
        }
      },
      tag: {
        light: {
          blue: 'bg-blue-100 text-blue-700',
          green: 'bg-green-100 text-green-700',
          purple: 'bg-purple-100 text-purple-700',
          pink: 'bg-pink-100 text-pink-700',
          cyan: 'bg-cyan-100 text-cyan-700'
        },
        dark: {
          blue: 'bg-blue-900/40 text-blue-300 border border-blue-800/50',
          green: 'bg-green-900/40 text-green-300 border border-green-800/50',
          purple: 'bg-purple-900/40 text-purple-300 border border-purple-800/50',
          pink: 'bg-pink-900/40 text-pink-300 border border-pink-800/50',
          cyan: 'bg-cyan-900/40 text-cyan-300 border border-cyan-800/50'
        }
      },
      hover: {
        light: {
          blue: 'hover:bg-blue-200',
          green: 'hover:bg-green-200',
          purple: 'hover:bg-purple-200',
          pink: 'hover:bg-pink-200',
          cyan: 'hover:bg-cyan-200'
        },
        dark: {
          blue: 'hover:bg-blue-800/50',
          green: 'hover:bg-green-800/50',
          purple: 'hover:bg-purple-800/50',
          pink: 'hover:bg-pink-800/50',
          cyan: 'hover:bg-cyan-800/50'
        }
      },
      year: {
        light: {
          blue: 'bg-blue-100 text-blue-800 border border-blue-300',
          green: 'bg-green-100 text-green-800 border border-green-300',
          purple: 'bg-purple-100 text-purple-800 border border-purple-300',
          pink: 'bg-pink-100 text-pink-800 border border-pink-300',
          cyan: 'bg-cyan-100 text-cyan-800 border border-cyan-300'
        },
        dark: {
          blue: 'bg-blue-900/40 text-blue-300 border border-blue-800/50',
          green: 'bg-green-900/40 text-green-300 border border-green-800/50',
          purple: 'bg-purple-900/40 text-purple-300 border border-purple-800/50',
          pink: 'bg-pink-900/40 text-pink-300 border border-pink-800/50',
          cyan: 'bg-cyan-900/40 text-cyan-300 border border-cyan-800/50'
        }
      }
    };

    const theme: ThemeType = darkMode ? 'dark' : 'light';

    // Validate the color is one of our supported colors or default to 'blue'
    const validColors: ProjectColor[] = ['blue', 'green', 'purple', 'pink', 'cyan'];
    const safeColor = validColors.includes(color as ProjectColor) ? color as ProjectColor : 'blue';

    return colorMap[type][theme][safeColor];
  };

  // Function to handle showing project details in modal
  const handleShowProjectDetails = (index: number) => {
    setActiveProject(index);
    setShowModal(true);
  };

  return (
    <div className={`min-h-screen flex flex-col pt-16 ${darkMode
      ? 'bg-gradient-to-b from-gray-900 to-gray-900'
      : 'bg-gradient-to-b from-indigo-50 to-blue-50'
      }`}>
      <main className="flex-grow pt-4 pb-8 px-4 max-w-6xl mx-auto w-full">
        {!isLoaded ? (
          <div className="flex justify-center items-center h-64">
            <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${darkMode ? 'border-blue-400' : 'border-blue-500'
              }`}></div>
          </div>
        ) : (
          <>
            {/* Header section */}
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'
                  } text-center mb-4`}
              >
                MY PROJECTS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className={`text-center max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'
                  } text-base md:text-lg mb-6`}
              >
                Discover my journey through code, developing solutions across various domains
              </motion.p>

              {/* Filter by category */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-2 mb-6"
              >
                <button
                  onClick={() => setFilterCategory(null)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${filterCategory === null
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500 text-white'
                    : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  All Projects
                </button>

                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setFilterCategory(category)}
                    className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${filterCategory === category
                      ? darkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : darkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${darkMode
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                    } rounded-xl shadow-md overflow-hidden group h-full flex flex-col border border-l-0 border-r-0 border-b-0 border-t-2 ${getColorClass(project.color, 'border')}`}
                  onClick={() => handleShowProjectDetails(index)}
                >
                  {/* Card Header with Image or Icon */}
                  <div className="relative h-40 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={index < 3}
                      />
                    ) : (
                      <div
                        className={`h-full flex items-center justify-center bg-gradient-to-br ${getColorClass(project.color, 'bg')}`}
                        style={{
                          backgroundImage: `url('/images/code_pattern.svg')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <span className="text-5xl text-white">{project.icon}</span>
                      </div>
                    )}

                    {/* Removed year badge from here */}
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Added year badge next to title */}
                      <div className="flex items-center justify-between mb-2">
                        <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                          {project.title}
                        </h2>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full shadow-sm ml-2 whitespace-nowrap ${getColorClass(project.color, 'year')}`}>
                          {project.year}
                        </span>
                      </div>

                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm line-clamp-2 mb-3`}>
                        {project.description}
                      </p>

                        {/* Tech stack icons */}
                        <div className="flex flex-wrap gap-1 mb-3">
                        {project.techIcons.slice(0, 3).map((icon, i) => (
                          <span 
                          key={i} 
                          className={`inline-block p-1.5 rounded-full text-lg ${getColorClass(project.color, 'bg')} ${
                            darkMode 
                            ? 'text-white' 
                            : getColorClass(project.color, 'text').split(' ')[0]
                          } border ${darkMode ? 'border-transparent' : `border-${project.color}-300`}`}
                          >
                          {icon}
                          </span>
                        ))}
                        </div>

                      {/* Key highlights */}
                      <div className="space-y-1 mb-3">
                        {project.highlights.slice(0, 2).map((highlight, i) => (
                          <div key={i} className="flex items-start text-xs">
                            <span className={`inline-block w-1.5 h-1.5 mt-1 mr-1.5 rounded-full ${getColorClass(project.color, 'bg')}`}></span>
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-between items-center mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click event
                          handleShowProjectDetails(index);
                        }}
                        className={`text-sm inline-flex items-center font-medium px-3.5 py-1.5 rounded-lg shadow-sm ${darkMode
                          ? `bg-${project.color}-900/40 text-${project.color}-300 hover:bg-${project.color}-800/50`
                          : `bg-${project.color}-100 text-${project.color}-800 hover:bg-${project.color}-200 border border-${project.color}-300`
                          } transition-colors`}
                        aria-label={`View details for ${project.title}`}
                      >
                        View Details
                      </button>

                      {project.links.length > 0 && (
                        <a
                          href={project.links[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()} // Prevent card click event
                          className={`text-sm inline-flex items-center px-2 py-1 rounded ${getColorClass(project.color, 'text')}`}
                          aria-label={`Visit ${project.links[0].text}`}
                        >
                          <FaExternalLinkAlt className="mr-1.5" /> Visit
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
              {showModal && activeProject !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
                  onClick={() => setShowModal(false)}
                >
                  <motion.div
                    ref={modalRef}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25 }}
                    className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {activeProject !== null && (
                      <div className="relative">
                        {/* Modal Close Button */}
                        <button
                          onClick={() => setShowModal(false)}
                          className={`absolute top-3 right-3 z-50 p-1.5 rounded-full ${darkMode ? 'bg-gray-800/70' : 'bg-white/70'} ${darkMode ? 'text-white' : 'text-gray-700'} hover:bg-${projects[activeProject].color}-${darkMode ? '800/40' : '100'} transition-colors`}
                          aria-label="Close modal"
                        >
                          <MdClose size={20} />
                        </button>

                        {/* Modal Image/Header - Changed to allow full image display */}
                        <div className="relative">
                          {projects[activeProject].image ? (
                            <div className="relative w-full" style={{ minHeight: '250px' }}>
                              <Image
                                src={projects[activeProject].image}
                                alt={projects[activeProject].title}
                                width={800}
                                height={450}
                                className="w-full object-contain"
                                priority
                              />
                            </div>
                          ) : (
                            <div
                              className={`h-64 flex items-center justify-center bg-gradient-to-r ${getColorClass(projects[activeProject].color, 'bg')}`}
                              style={{
                                backgroundImage: `url('/images/code_pattern.svg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                              }}
                            >
                              <span className="text-6xl text-white/90">{projects[activeProject].icon}</span>
                            </div>
                          )}

                          {/* Project title moved below the image */}
                          <div className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-1`}>
                              {projects[activeProject].title}
                            </h2>
                            <div className="flex items-center">
                              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                                {projects[activeProject].category}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                          {/* Year and tech stack */}
                          <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className={`flex items-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} bg-opacity-10 py-1 px-3 rounded-full ${getColorClass(projects[activeProject].color, 'bg')}`}>
                              <FaCalendar className="mr-1.5" /> {projects[activeProject].year}
                            </div>
                            <div className={`flex items-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} bg-opacity-10 py-1 px-3 rounded-full ${getColorClass(projects[activeProject].color, 'bg')}`}>
                              <FaLayerGroup className="mr-1.5" /> {projects[activeProject].tech.split(',')[0]}
                            </div>
                          </div>

                          {/* Full description */}
                          <div className="mb-5">
                            <h3 className={`text-base font-semibold flex items-center mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                              <FaCode className="mr-2" style={{ color: darkMode ? projects[activeProject].color + '400' : projects[activeProject].color + '600' }} />
                              About the Project
                            </h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
                              {projects[activeProject].description}
                            </p>
                          </div>

                          {/* Project highlights */}
                          <div className="mb-5">
                            <h3 className={`text-base font-semibold flex items-center mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                              <FaTools className="mr-2" style={{ color: darkMode ? projects[activeProject].color + '400' : projects[activeProject].color + '600' }} />
                              Key Highlights
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {projects[activeProject].highlights.map((highlight, i) => (
                                <div key={i} className="flex items-start">
                                  <span className={`inline-block w-1.5 h-1.5 mt-1.5 mr-2 rounded-full ${getColorClass(projects[activeProject].color, 'bg')}`}></span>
                                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="mb-5">
                            <h3 className={`text-base font-semibold flex items-center mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                              <FaLayerGroup className="mr-2" style={{ color: darkMode ? projects[activeProject].color + '400' : projects[activeProject].color + '600' }} />
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {projects[activeProject].tech.split(',').map((tech, i) => (
                                <span key={i} className={`text-sm px-3 py-1 rounded-full ${getColorClass(projects[activeProject].color, 'tag')}`}>
                                  {tech.trim()}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Team Members */}
                          {projects[activeProject].team.length > 0 && (
                            <div className="mb-5">
                              <h3 className={`text-base font-semibold flex items-center mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                <FaUsers className="mr-2" style={{ color: darkMode ? projects[activeProject].color + '400' : projects[activeProject].color + '600' }} />
                                Team Members
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {projects[activeProject].team.map((member, idx) => (
                                  <div
                                    key={idx}
                                    className={`flex items-center p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'
                                      }`}
                                  >
                                    <span className={`w-7 h-7 flex items-center justify-center rounded-full ${getColorClass(projects[activeProject].color, 'bg')} mr-2`}>
                                      {member.icon}
                                    </span>
                                    <div className="flex flex-col">
                                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                        {member.name}
                                      </span>
                                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {member.role}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Links */}
                          {projects[activeProject].links.length > 0 && (
                            <div className="border-t pt-5 mt-5 border-gray-200 dark:border-gray-700">
                              <h3 className={`text-base font-semibold flex items-center mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                <FaExternalLinkAlt className="mr-2" style={{ color: darkMode ? projects[activeProject].color + '400' : projects[activeProject].color + '600' }} />
                                Project Links
                              </h3>
                              <div className="flex flex-wrap gap-3">
                                {projects[activeProject].links.map((link, linkIndex) => (
                                  <a
                                    key={linkIndex}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${getColorClass(projects[activeProject].color, 'tag')}`}
                                  >
                                    {link.icon}
                                    {link.text}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation to Skills Page */}
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <a
                href="/skills"
                className={`${darkMode
                  ? 'bg-gradient-to-r from-cyan-900 to-teal-700 hover:from-cyan-800 hover:to-teal-600'
                  : 'bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700'
                  } text-white px-8 py-4 rounded-lg transition-colors text-center font-medium text-lg shadow-md relative overflow-hidden w-full sm:w-auto sm:min-w-[240px]`}
              >
                {/* Floating icons for Skills button */}
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-cyan-300/40' : 'text-white/30'}`}
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
                  className={`absolute text-xs ${darkMode ? 'text-teal-300/40' : 'text-white/30'}`}
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
                  <FaGraduationCap />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-cyan-300/40' : 'text-white/30'}`}
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
                  <FaTools />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-teal-300/40' : 'text-white/30'}`}
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
                  <FaLaptopCode />
                </motion.span>
                
                <motion.span 
                  className={`absolute text-xs ${darkMode ? 'text-teal-300/40' : 'text-white/30'}`}
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
                  <FaPalette />
                </motion.span>
                
                {/* Button text */}
                <span className="relative z-10">Discover My Skills</span>
              </a>
            </motion.div>
          </>
        )}
      </main>
    </div>
  );
}