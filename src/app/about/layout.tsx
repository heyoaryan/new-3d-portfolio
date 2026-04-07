import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "About Aryan Singh Thakur | Full-Stack Developer from Delhi",
  description:
    "Learn about Aryan Singh Thakur — BCA student and Full-Stack Developer from Delhi, India. Skilled in React, Next.js, Node.js, TypeScript, MongoDB, Docker, and more.",
  keywords: [
    "Aryan Singh Thakur about",
    "about aryan thakur",
    "aryan thakur developer Delhi",
    "aryan thakur bca student",
    "aryan singh thakur skills",
    "full stack developer Delhi India",
    ...config.keywords,
  ],
  alternates: { canonical: `${config.site}/about` },
  openGraph: {
    title: "About Aryan Singh Thakur | Full-Stack Developer",
    description:
      "BCA student and Full-Stack Developer from Delhi. React, Next.js, Node.js, TypeScript specialist. Hackathon winner.",
    url: `${config.site}/about`,
    siteName: "Aryan Singh Thakur",
    images: [{ url: config.profileImg, width: 800, height: 800, alt: "Aryan Singh Thakur" }],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aryan Singh Thakur | Full-Stack Developer",
    description: "BCA student and Full-Stack Developer from Delhi. React, Next.js, Node.js specialist.",
    images: [config.profileImg],
    creator: config.social.twitterHandle,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
