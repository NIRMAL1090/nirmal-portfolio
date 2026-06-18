import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects", // The root layout template will append " | Nirmal Patel"
  description: "Browse Nirmal Patel's featured projects, including Discord bots, mobile apps, IoT systems, and modern Next.js websites.",
  alternates: {
    canonical: "https://nirmalpatel.tech/projects",
  },
  openGraph: {
    title: "Projects | Nirmal Patel",
    description: "Browse Nirmal Patel's featured projects, including Discord bots, mobile apps, IoT systems, and modern Next.js websites.",
    url: "https://nirmalpatel.tech/projects",
    type: "website",
  },
  twitter: {
    title: "Projects | Nirmal Patel",
    description: "Browse Nirmal Patel's featured projects, including Discord bots, mobile apps, IoT systems, and modern Next.js websites.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
