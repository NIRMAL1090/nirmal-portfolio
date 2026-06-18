import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills", 
  description: "Explore Nirmal Patel's technical skills across React, Next.js, Node.js, TypeScript, Python, Flutter, IoT, and performance optimization.",
  alternates: {
    canonical: "https://nirmalpatel.tech/skills",
  },
  openGraph: {
    title: "Skills | Nirmal Patel",
    description: "Explore Nirmal Patel's technical skills across React, Next.js, Node.js, TypeScript, Python, Flutter, IoT, and performance optimization.",
    url: "https://nirmalpatel.tech/skills",
    type: "website",
  },
  twitter: {
    title: "Skills | Nirmal Patel",
    description: "Explore Nirmal Patel's technical skills across React, Next.js, Node.js, TypeScript, Python, Flutter, IoT, and performance optimization.",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
