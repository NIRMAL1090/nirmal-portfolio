import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey", 
  description: "Follow Nirmal Patel's journey from early experimentation to full-stack development, IoT projects, and professional software engineering.",
  alternates: {
    canonical: "https://nirmalpatel.tech/journey",
  },
  openGraph: {
    title: "Journey | Nirmal Patel",
    description: "Follow Nirmal Patel's journey from early experimentation to full-stack development, IoT projects, and professional software engineering.",
    url: "https://nirmalpatel.tech/journey",
    type: "website",
  },
  twitter: {
    title: "Journey | Nirmal Patel",
    description: "Follow Nirmal Patel's journey from early experimentation to full-stack development, IoT projects, and professional software engineering.",
  },
};

export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
