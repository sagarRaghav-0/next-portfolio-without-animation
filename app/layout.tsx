"use client"

import gsap from 'gsap';
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from "react";
import "./globals.css";

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

  const mainRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const main = mainRef.current;
    const cursor = cursorRef.current;

    if (!main || !cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const handleMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    };



    const handleEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const hoverEl = target.closest(".cursor-hover-target") as HTMLElement | null;
      if (!hoverEl) return;

      const label = hoverEl.dataset.cursorText ?? "";

      cursor.textContent = label;

      cursor.classList.add("cursor-lens");

      gsap.to(cursor, {
        scale: label === "Itachi Uchia" ? 5 : 8,
        backgroundColor: (label === "Itachi Uchia" || label === "" || label === "Goku vs Vegeta") ? "rgba(0,0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)",
        color: "#fff",

        duration: 0.3,
      });
    };


    const handleLeave = () => {
      cursor.textContent = "";
      cursor.classList.remove("cursor-lens");

      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#171717",
        color: "#fff",
        duration: 0.3,
      });
    };


    const handleEnterSocial = (e: Event) => {
      const target = e.target as HTMLElement;
      const hoverEl = target.closest(".cursor-hover-target") as HTMLElement | null;
      if (!hoverEl) return;

      const label = hoverEl.dataset.cursorText ?? "";

      cursor.textContent = label;
      cursor.classList.add("cursor-lens");

      // Define a mapping of label -> image URL
      const labelImageMap: Record<string, string | null> = {
        "LnkedIn": "url('/in.gif')",
        "Instagram": "url('/insta.gif')",
        "Email": "url('/mail.gif')",
        "Github": "url('/github.gif')",
        "Me": "url('/v.jpg')",
      };

      const backgroundImage = labelImageMap[label] ?? "none";

      // Remove text content if you're showing an image instead
      cursor.textContent = backgroundImage !== "none" ? "" : label;

      // Animate with gsap
      gsap.to(cursor, {
        scale: backgroundImage !== "none" ? 4 : 2,
        backgroundImage: backgroundImage,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "transparent", // remove color
        color: "#fff", // optional
        duration: 0.3,
      });
    };


    const handleLeaveSocial = (e: Event) => {
      const target = e.target as HTMLElement;
      const hoverEl = target.closest(".cursor-hover-target") as HTMLElement | null;
      if (!hoverEl) return;

      // Reset the cursor appearance
      cursor.classList.remove("cursor-lens");

      gsap.to(cursor, {
        scale: 1, // back to normal size
        backgroundImage: "none",
        backgroundColor: "transparent",
        color: "#fff",
        duration: 0.3,
      });

      // Optionally clear text content
      cursor.textContent = "";
    };




    main.addEventListener("mousemove", handleMove);

    const hoverTargets = document.querySelectorAll(".cursor-hover-target");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });
    const hoverSocial = document.querySelectorAll(".cursor-hover-social");
    hoverSocial.forEach((el) => {
      el.addEventListener("mouseenter", handleEnterSocial);
      el.addEventListener("mouseleave", handleLeaveSocial);
    });

    return () => {
      main.removeEventListener("mousemove", handleMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });


      hoverSocial.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnterSocial);
        el.removeEventListener("mouseleave", handleLeaveSocial);
      });
    };
  }, [usePathname()]); // 👈 re-run when route changes


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div ref={cursorRef} className=" hidden  z-50 fixed md:flex items-center justify-center rounded-full dark:bg-[#efeded] bg-[#171717] center pointer-events-none w-[20px] h-[20px] text-[2px] text-center font-bold"> </div>

        <div ref={mainRef}>
          {children}
        </div>
      </body>
    </html>
  );
}
