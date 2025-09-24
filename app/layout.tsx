import Root from '@/components/gsap/Root';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Metadata for SEO, OpenGraph, and Twitter
export const metadata: Metadata = {
  title: "Sagar Raghav | Web Developer",
  description:
    "Portfolio of Sagar Raghav – Web Developer skilled in Next.js, Tailwind CSS, and modern web technologies.",
  keywords: [
    "Sagar Raghav",
    "Web Developer",
    "Next.js",
    "Tailwind CSS",
    "Frontend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Sagar Raghav", url: "https://next-portfolio-drab-two.vercel.app/" }],
  creator: "Sagar Raghav",

  openGraph: {
    title: "Sagar Raghav | Web Developer",
    description:
      "Portfolio of Sagar Raghav – Web Developer skilled in Next.js, Tailwind CSS, and modern web technologies.",
    url: "https://next-portfolio-drab-two.vercel.app/",
    siteName: "Sagar Raghav Portfolio",
    images: [
      {
        url: "https://next-portfolio-drab-two.vercel.app/uxui.webp",
        width: 1200,
        height: 630,
        alt: "Sagar Raghav Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sagar Raghav | Web Developer",
    description:
      "Portfolio of Sagar Raghav – Web Developer skilled in Next.js, Tailwind CSS, and modern web technologies.",
    creator: "@your_twitter_handle", // 👈 change to your handle
    images: ["https://next-portfolio-drab-two.vercel.app/uxui.webp"],
  },

  icons: {
    icon: "/s.webp", // 👈 place your favicon in /public
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* All GSAP + cursor logic lives in Root (client component) */}
        <Root>{children}</Root>
      </body>
    </html>
  );
}