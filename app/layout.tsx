import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { ThemeProvider } from '../context/ThemeContext';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const viewport = {
  themeColor: "#1e293b",
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
  // userScalable: "no",
};

export const metadata = {
  title: "Nirmal Patel Portfolio - Full-Stack Developer",
  description: "Explore Nirmal Patel's portfolio showcasing skills in full-stack development, React, Node.js, and more.",
  image: "https://nirmal.social/images/nirmal_profile_pic.webp",
  color: "#000001",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Nirmal Patel Portfolio - Full-Stack Developer",
    description: "Explore Nirmal Patel's portfolio showcasing skills in full-stack development, React, Node.js, and more.",
    url: "https://nirmal.social",
    siteName: "Nirmal Patel Portfolio - Full-Stack Developer",
    images: [
      {
        url: "https://nirmal.social/images/nirmal_profile_pic.webp",
        width: 1200,
        height: 630,
        alt: "Nirmal's Logo/profile picture",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirmal Patel Portfolio - Full-Stack Developer",
    description: "Explore Nirmal Patel's portfolio showcasing skills in full-stack development, React, Node.js, and more.",
    images: ["https://nirmal.social/images/nirmal_profile_pic.webp"],
    creator: "@nirmalpatel",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  appleWebApp: {
    capable: true,
    title: "Nirmal's Portfolio",
    statusBarStyle: "default",
    navigationBarColor: "#1e293b",
  },
  keywords: ["nirmal patel, nirmal portfolio, nirmal skills, nirmal1090, patel nirmal, nirmal full-stack developer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon for general browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Apple Touch Icon for iOS devices */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Additional favicon sizes */}
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nirmal Patel",
            alternateName: ["nirmal1090", "Patel Nirmal"],
            jobTitle: "Full-Stack Developer",
            url: "https://nirmal.social",
            image: "https://nirmal.social/images/nirmal_profile_pic.webp",
            sameAs: [
              "https://github.com/nirmal1090",
              "https://www.linkedin.com/in/nirmal-patel-3995b0251",
              "https://discord.com/users/727075947638947852",
            ],
            description: "Nirmal Patel is a full-stack developer showcasing skills in React, Node.js, and IoT through his portfolio.",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://nirmal.social",
            name: "Nirmal Patel Portfolio",
            description: "Explore Nirmal Patel's portfolio showcasing full-stack development skills and projects.",
          })}
        </script>
        <link rel="canonical" href="https://nirmal.social" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
            <Analytics /> {/* Vercel Analytics */}
            <SpeedInsights /> {/* Vercel Speed Insights */}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}