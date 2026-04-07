import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Craft & Services | Aryan Singh Thakur — Web Development Services",
  description:
    "Aryan Singh Thakur's freelance web development services. Frontend from ₹5,000, Backend from ₹5,000, Full Website from ₹10,000. React, Next.js, Node.js with 1 month free support.",
  keywords: [
    "Aryan Singh Thakur services",
    "aryan thakur freelance",
    "aryan singh thakur craft",
    "web development services Delhi",
    "hire React developer India",
    "Next.js developer for hire",
    "affordable web development India",
    "freelance full stack developer aryan",
    ...config.keywords,
  ],
  alternates: { canonical: `${config.site}/craft` },
  openGraph: {
    title: "Craft & Services | Aryan Singh Thakur",
    description:
      "Freelance web development by Aryan Singh Thakur. Frontend, backend, full-stack. Starting from ₹5,000. React, Next.js, Node.js.",
    url: `${config.site}/craft`,
    siteName: "Aryan Singh Thakur",
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Aryan Singh Thakur Services" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft & Services | Aryan Singh Thakur",
    description: "Freelance web dev by Aryan Singh Thakur. Frontend, backend, full-stack. Starting ₹5,000.",
    images: [config.ogImg],
    creator: config.social.twitterHandle,
  },
};

export default function CraftLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
