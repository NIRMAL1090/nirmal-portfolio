"use client";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord, FaYoutube } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  const { darkMode } = useTheme();

  // Only render content client-side to prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nirmal-patel-3995b0251", icon: <FaLinkedin /> },
    { name: "GitHub", url: "https://github.com/nirmal1090", icon: <FaGithub /> },
    { name: "Gmail", url: "mailto:nirmalmpatel1090@gmail.com", icon: <FaEnvelope /> },
    { name: "Discord", url: "https://discord.gg/KEFGnHV3gy", icon: <FaDiscord /> },
    { name: "YouTube", url: "https://www.youtube.com/@DrakenorGaming", icon: <FaYoutube /> },
  ];

  // Use conditional rendering to avoid hydration mismatches
  if (!isMounted) {
    // Return a placeholder with the EXACT SAME structure and classes as the real content
    return (
      <footer className={`${
        darkMode 
          ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-slate-900' 
          : 'bg-gradient-to-r from-indigo-950 via-blue-950 to-purple-950'
      } text-white py-8 px-4 transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Nirmal Patel</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-300'} text-sm mb-4`}>Full-Stack Developer | IoT Enthusiast</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-400'} text-sm`}>Creating innovative solutions<br />with passion and precision</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
              <div className="flex space-x-4">
                {/* Empty placeholder space for icons */}
                <div className="h-[1.25rem] w-28"></div>
              </div>
            </div>
          </div>
          <div className={`h-px ${
            darkMode
              ? 'bg-gradient-to-r from-transparent via-gray-600 to-transparent'
              : 'bg-gradient-to-r from-transparent via-gray-500 to-transparent'
          } opacity-30 my-4`}></div>
          <div className={`text-center ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          } text-sm`}>
            <p>©2025 Nirmal Patel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }

  // Only render the actual content after mounting on client side
  return (
    <footer className={`${
      darkMode 
        ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-slate-900' 
        : 'bg-gradient-to-r from-indigo-950 via-blue-950 to-purple-950'
    } text-white py-8 px-4 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
          {/* Left side - Site information */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Nirmal Patel</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-300'} text-sm mb-4`}>Full-Stack Developer | IoT Enthusiast</p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-400'} text-sm`}>Creating innovative solutions<br />with passion and precision</p>
          </div>
          
          {/* Right side - Social links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'
                  } transition-colors`}
                  aria-label={link.name}
                  title={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider - adjusted opacity for dark mode */}
        <div className={`h-px ${
          darkMode
            ? 'bg-gradient-to-r from-transparent via-gray-600 to-transparent'
            : 'bg-gradient-to-r from-transparent via-gray-500 to-transparent'
        } opacity-30 my-4`}></div>
        
        {/* Copyright */}
        <div className={`text-center ${
          darkMode ? 'text-gray-500' : 'text-gray-400'
        } text-sm`}>
          <p>©2025 Nirmal Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}