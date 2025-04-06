"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord, FaYoutube, FaPaperPlane, FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
  // Add loading state
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Enhanced animations
  const titleAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };
  
  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };
  
  const itemAnimation = (index: number) => ({
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        delay: 0.2 + (index * 0.1),
        ease: "easeOut" 
      } 
    }
  });

  // Form state and validation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length === 0) {
  //     setIsSubmitted(true);
  //     alert("Thank you for your message!");
  //     setFormData({ name: "", email: "", message: "" }); // Reset form
  //   } else {
  //     setErrors(validationErrors);
  //   }
  // };

// Handle form submission for Formspree
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length === 0) {
    setIsLoading(true);
    setErrors({});
    try {
      const response = await fetch("https://formspree.io/f/mdkepaey", { // Replace with your Formspree endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        const errorData = await response.json();
        setErrors({ submit: errorData.detail || "Failed to send message. Please try again." });
      }
    } catch (error) {
      setErrors({ submit: "An error occurred. Please try again later." });
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  } else {
    setErrors(validationErrors);
  }
};

  // Social media links with icons
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nirmal-patel-3995b0251", icon: <FaLinkedin className="text-xl" />, color: "bg-blue-600", text: "Nirmal Patel" },
    { name: "GitHub", url: "https://github.com/nirmal1090", icon: <FaGithub className="text-xl" />, color: "bg-gray-800", text: "nirmal1090" },
    { name: "Email", url: "mailto:nirmalmpatel1090@gmail.com", icon: <FaEnvelope className="text-xl" />, color: "bg-red-600", text: "nirmalmpatel1090@gmail.com" },
    { name: "Discord", url: "https://discord.gg/KEFGnHV3gy", icon: <FaDiscord className="text-xl" />, color: "bg-indigo-600", text: "patelnirmal" },
    { name: "YouTube", url: "https://youtube.com/@DrakenorGaming", icon: <FaYoutube className="text-xl" />, color: "bg-red-700", text: "Drakenor Gaming" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50 pt-12">
      <main className="flex-grow pt-4 pb-8 px-3 md:px-4 max-w-6xl mx-auto w-full">
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
              className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-10 md:mb-14"
            >
              Get In Touch
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardAnimation}
                className="relative"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <FaPaperPlane className="text-blue-600 mr-3" />
                  Send Me a Message
                </h2>
                
                {showSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center shadow-md"
                >
                  <div className="text-green-600 text-xl mb-2">✓</div>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="mt-4 text-blue-600 hover:text-blue-800 underline"
                  >
                    Dismiss
                  </button>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true" // Optional, for flexibility if you switch to Netlify
                  data-netlify-honeypot="bot-field" // Optional, for spam protection
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" /> {/* Optional for Netlify */}
                  <motion.div variants={itemAnimation(0)}>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                      disabled={isLoading}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </motion.div>

                  <motion.div variants={itemAnimation(1)}>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                      disabled={isLoading}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </motion.div>

                  <motion.div variants={itemAnimation(2)}>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="What would you like to discuss?"
                      disabled={isLoading}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </motion.div>

                  {errors.submit && <p className="text-red-500 text-sm mt-1">{errors.submit}</p>}

                  <motion.button
                    variants={itemAnimation(3)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
              </motion.div>

              {/* Social Links and Info */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardAnimation}
                className="relative"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Connect With Me</h2>
                
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemAnimation(index)}
                      whileHover={{ scale: 1.01, x: 2 }}
                      className="flex items-center justify-between p-3 rounded-lg transition-colors group relative overflow-hidden"
                    >
                      {/* Dynamic background fill on hover */}
                      <div 
                        className={`absolute inset-0 w-0 group-hover:w-full ${link.color.replace('bg-', 'bg-')} opacity-10 transition-all duration-300 ease-out`}
                        style={{ transitionProperty: 'width' }}
                      ></div>
                      
                      <div className="flex items-center relative z-10">
                        <div className={`${link.color} text-white p-2 rounded-full mr-4 shadow-sm`}>
                          {link.icon}
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">{link.name}</span>
                          {link.text && (
                            <div className="text-sm text-gray-600">{link.text}</div>
                          )}
                        </div>
                      </div>
                      <FaExternalLinkAlt className="text-gray-400 group-hover:text-gray-600 transition-colors ml-2 relative z-10" />
                    </motion.a>
                  ))}
                </div>
                
                <motion.div 
                  variants={itemAnimation(socialLinks.length)}
                  className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100 shadow-sm"
                >
                  <h3 className="font-semibold text-blue-800 mb-2">Response Time</h3>
                  <p className="text-blue-700 text-sm">I typically respond to messages within 2-3 days. For urgent inquiries, please contact me directly via email.</p>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}