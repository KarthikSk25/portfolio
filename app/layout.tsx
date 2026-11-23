import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Outfit } from "next/font/google";
import { AnimateOnView } from "@/components/AnimateOnView";
import { Rail } from "@/components/Rail";
import { profile } from "@/lib/profile";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Karthikeyan R — Full-Stack Developer";
const description =
  "Portfolio of Karthikeyan R, a Coimbatore full-stack developer working with React.js, React Native, Java, Spring Boot, and MySQL.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#141414",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Full-Stack Developer",
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref,
  url: profile.linkedin,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressCountry: "IN",
  },
  sameAs: [profile.linkedin],
  knowsAbout: [
    "React.js",
    "React Native",
    "TypeScript",
    "Next.js",
    "Java",
    "Spring Boot",
    "MySQL",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a className="skip" href="#about">
          Skip to content
        </a>
        <div className="shell">
          <Rail />
          {children}
        </div>
        <AnimateOnView />
      </body>
    </html>
  );
}
