import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Projects | Aryan Singh Thakur — Full-Stack Developer",
  description:
    "Real-world full-stack projects built by Aryan Singh Thakur using React, Next.js, Node.js, MongoDB, and TypeScript. Explore web apps, tools, and creative experiments.",
  keywords: [
    "Aryan Singh Thakur projects",
    "aryan thakur portfolio projects",
    "aryan singh thakur web projects",
    "full stack projects React Next.js",
    "aryan thakur bca projects",
    ...config.keywords,
  ],
  alternates: { canonical: `${config.site}/projects` },
  openGraph: {
    title: "Projects | Aryan Singh Thakur",
    description:
      "Real-world full-stack projects by Aryan Singh Thakur — built with React, Next.js, Node.js, and TypeScript.",
    url: `${config.site}/projects`,
    siteName: "Aryan Singh Thakur",
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Aryan Singh Thakur Projects" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Aryan Singh Thakur",
    description: "Real-world full-stack projects by Aryan Singh Thakur.",
    images: [config.ogImg],
    creator: config.social.twitterHandle,
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
