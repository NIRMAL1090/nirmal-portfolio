import type { Metadata } from "next";

/* ──────────────────────────────────────────────────────────────
   SEO-optimised layout for /resume
   Target queries:
     • nirmal patel resume
     • patel nirmal resume
     • nirmal resume
     • nirmal patel cv
     • nirmal patel developer resume
   ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  /* ── Title (absolute bypasses the root `%s | Nirmal Patel` template) ── */
  title: { absolute: "Nirmal Patel Resume | Full-Stack Software Developer" },

  /* ── Description (≤ 160 chars, keyword-rich) ── */
  description:
    "View and download Nirmal Patel's resume. Nirmal Patel is a full-stack developer skilled in React, Next.js, Node.js, Python, Django, Flutter, IoT and more.",

  /* ── Keywords (all name/query variations) ── */
  keywords: [
    "Nirmal Patel resume",
    "Nirmal Patel CV",
    "Patel Nirmal resume",
    "Patel Nirmal CV",
    "nirmal resume",
    "nirmal1090 resume",
    "Nirmal Patel developer resume",
    "Nirmal Patel full-stack developer",
    "Nirmal Patel portfolio resume",
    "nirmal patel software developer cv",
    "nirmal patel react developer",
    "nirmal patel next.js developer",
    "nirmal patel node.js developer",
    "nirmal patel IoT developer",
    "Nirmal Patel Chaudhary resume",
    "nirmal m patel resume",
    "nirmal patel 2025 resume",
  ],

  /* ── Canonical URL ── */
  alternates: {
    canonical: "https://nirmalpatel.tech/resume",
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  /* ── Open Graph ── */
  openGraph: {
    title: "Resume | Nirmal Patel – Full-Stack Developer CV",
    description:
      "View and download Nirmal Patel's (Patel Nirmal) resume. Full-stack developer with expertise in React, Next.js, Node.js, Python, Django, Flutter and IoT.",
    url: "https://nirmalpatel.tech/resume",
    siteName: "Nirmal Patel Portfolio",
    images: [
      {
        url: "https://nirmalpatel.tech/images/nirmal_profile_pic.webp",
        width: 1200,
        height: 630,
        alt: "Nirmal Patel – Full-Stack Developer Resume",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    title: "Resume | Nirmal Patel – Full-Stack Developer CV",
    description:
      "View and download Nirmal Patel's resume. Full-stack developer skilled in React, Next.js, Node.js, Python, Django, Flutter and IoT.",
    images: ["https://nirmalpatel.tech/images/nirmal_profile_pic.webp"],
    creator: "@nirmal1090",
    site: "https://nirmalpatel.tech",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/*
        JSON-LD Structured Data
        – ProfilePage tells Google this is Nirmal Patel's profile/resume page.
        – Person gives Google all the name variations it needs to associate
          "Nirmal Patel resume", "Patel Nirmal resume", "nirmal resume" etc.
          with this URL.
      */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": "https://nirmalpatel.tech/resume#profilepage",
            name: "Nirmal Patel – Resume",
            url: "https://nirmalpatel.tech/resume",
            description:
              "Official resume / CV of Nirmal Patel, a full-stack developer specialising in React, Next.js, Node.js, Python, Django, Flutter, and IoT.",
            dateModified: "2025-01-01",
            inLanguage: "en-IN",
            isPartOf: {
              "@id": "https://nirmalpatel.tech/#website",
            },
            about: {
              "@type": "Person",
              "@id": "https://nirmalpatel.tech/#person",
              name: "Nirmal Patel",
              alternateName: [
                "Patel Nirmal",
                "nirmal1090",
                "Nirmal M Patel",
                "Nirmal Patel Chaudhary",
              ],
              jobTitle: "Full-Stack Developer",
              description:
                "Nirmal Patel is a full-stack software developer with expertise in React, Next.js, Node.js, Python, Django, Flutter, and IoT. His resume is available at nirmalpatel.tech/resume.",
              url: "https://nirmalpatel.tech",
              image: "https://nirmalpatel.tech/images/nirmal_profile_pic.webp",
              sameAs: [
                "https://github.com/nirmal1090",
                "https://www.linkedin.com/in/chaudharynirmal/",
                "https://discord.com/users/727075947638947852",
                "https://www.youtube.com/@DrakenorGaming",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Django",
                "Flutter",
                "TypeScript",
                "JavaScript",
                "MongoDB",
                "MySQL",
                "IoT",
                "Arduino",
                "Machine Learning",
                "Full-Stack Development",
              ],
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "Full-Stack Developer Resume",
                url: "https://nirmalpatel.tech/resume",
              },
            },
            mainEntity: {
              "@type": "Person",
              "@id": "https://nirmalpatel.tech/#person",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
