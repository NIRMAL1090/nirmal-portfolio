import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { ThemeProvider } from '../context/ThemeContext';

export const viewport = {
  themeColor: "#1e293b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export const metadata = {
  title: "Nirmal's Portfolio",
  description: "Discover Nirmal's journey, skills, and the projects he's built across web, design, and development.",
  image: "https://nirmal.social/images/nirmal_profile_pic.JPG",
  color: "#1e293b",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Nirmal's Portfolio",
    description: "Discover Nirmal's journey, skills, and the projects he's built across web, design, and development.",
    url: "https://nirmal.social",
    // siteName: "Nirmal's Portfolio",
    images: [
      {
        url: "https://nirmal.social/images/nirmal_profile_pic.JPG",
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
    title: "Nirmal's Portfolio",
    description: "Discover Nirmal's journey, skills, and the projects he's built across web, design, and development.",
    images: ["https://nirmal.social/images/nirmal_profile_pic.JPG"],
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
      </head>
      <body className="min-h-screen flex flex-col bg-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}