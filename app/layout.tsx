import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Nirmal's Portfolio",
  description: "Portfolio of Patel Nirmal Mukeshkumar",
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
      <body className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}