"use client";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaFileAlt, FaExternalLinkAlt, FaDownload } from "react-icons/fa";

export default function Resume() {
  const { darkMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const resumeViewUrl =
    "https://www.canva.com/design/DAGs9D95Nak/Zp7LOVSycdSJp4JVIMaK1A/view";
  const resumeEmbedUrl =
    "https://www.canva.com/design/DAGs9D95Nak/Zp7LOVSycdSJp4JVIMaK1A/view?embed";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const titleAnimation: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const cardAnimation: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const badgeAnimation: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <div
      className={`min-h-screen flex flex-col pt-22 ${darkMode
        ? "bg-linear-to-b from-gray-900 via-slate-900 to-gray-900"
        : "bg-linear-to-b from-indigo-50 via-blue-50 to-purple-50"
        }`}
    >
      <main className="grow pt-4 pb-10 px-3 md:px-4 max-w-5xl mx-auto w-full">
        {!isLoaded ? (
          <div className="flex justify-center items-center h-64">
            <div
              className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${darkMode ? "border-blue-400" : "border-blue-500"
                }`}
            ></div>
          </div>
        ) : (
          <>
            {/* Page Title */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
              className={`text-3xl md:text-5xl font-bold ${darkMode ? "text-gray-100" : "text-gray-800"
                } text-center mb-4 md:mb-6`}
            >
              MY RESUME
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-center max-w-2xl mx-auto mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"
                }`}
            >
              A snapshot of my skills, experience, and educational journey as a
              full-stack developer.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={badgeAnimation}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              <a
                href={resumeViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group ${darkMode
                  ? "bg-blue-700 hover:bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200"
                  }`}
              >
                <FaExternalLinkAlt className="text-xs group-hover:scale-110 transition-transform" />
                Open in Canva
              </a>

              <a
                href={`${resumeViewUrl}?utm_content=DAGs9D95Nak&utm_campaign=designshare&utm_medium=embeds&utm_source=link`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group border ${darkMode
                  ? "border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-300 bg-gray-800/50"
                  : "border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-700 bg-white/80"
                  }`}
              >
                <FaDownload className="text-xs group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </motion.div>

            {/* Canva Embed */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              className={`rounded-2xl overflow-hidden ${darkMode
                ? "shadow-2xl shadow-black/40 border border-gray-700/60"
                : "shadow-2xl shadow-blue-100 border border-gray-200"
                }`}
            >
              {/* Header bar */}
              <div
                className={`flex items-center gap-3 px-5 py-3 border-b ${darkMode
                  ? "bg-gray-800/80 border-gray-700"
                  : "bg-white/90 border-gray-200"
                  }`}
              >
                <span
                  className={`p-1.5 rounded-lg ${darkMode ? "bg-blue-600" : "bg-blue-600"
                    } text-white`}
                >
                  <FaFileAlt className="text-sm" />
                </span>
                <div>
                  <p
                    className={`font-semibold text-sm ${darkMode ? "text-gray-100" : "text-gray-900"
                      }`}
                  >
                    Nirmal Patel - Resume
                  </p>
                </div>
              </div>

              {/* Iframe container — Canva A4 aspect ratio ~1:1.4142 */}
              <div
                className="relative w-full"
                style={{ paddingTop: "141.4286%" }}
              >
                {/* Skeleton loader while iframe loads */}
                {!iframeLoaded && (
                  <div
                    className={`absolute inset-0 flex items-center justify-center ${darkMode ? "bg-gray-800" : "bg-gray-100"
                      }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className={`animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 ${darkMode ? "border-blue-400" : "border-blue-500"
                          }`}
                      />
                      <p
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                      >
                        Loading resume…
                      </p>
                    </div>
                  </div>
                )}

                <iframe
                  loading="lazy"
                  src={resumeEmbedUrl}
                  allowFullScreen
                  allow="fullscreen"
                  onLoad={() => setIframeLoaded(true)}
                  title="Nirmal Patel Resume"
                  className="absolute inset-0 w-full h-full border-0 p-0 m-0"
                />
              </div>
            </motion.div>


          </>
        )}
      </main>
    </div>
  );
}
