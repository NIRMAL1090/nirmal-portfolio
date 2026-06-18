import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact", 
  description: "Contact Nirmal Patel for freelance work, full-stack development opportunities, collaborations, or project inquiries.",
  alternates: {
    canonical: "https://nirmalpatel.tech/contact",
  },
  openGraph: {
    title: "Contact | Nirmal Patel",
    description: "Contact Nirmal Patel for freelance work, full-stack development opportunities, collaborations, or project inquiries.",
    url: "https://nirmalpatel.tech/contact",
    type: "website",
  },
  twitter: {
    title: "Contact | Nirmal Patel",
    description: "Contact Nirmal Patel for freelance work, full-stack development opportunities, collaborations, or project inquiries.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
