"use client";
import { createContext, useState, useEffect, useContext } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with true for dark mode as default
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved preference, but default to dark mode if none
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    } 
    // No else clause needed as we already initialized with dark mode
  }, []);

  useEffect(() => {
    // Apply dark mode class and save preference
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
