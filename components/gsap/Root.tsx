"use client";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Theend from "@/components/Theend";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";


export default function RootClient({ children }: { children: React.ReactNode }) {
    const mainRef = useRef<HTMLDivElement | null>(null);
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const main = mainRef.current;
        const content = contentRef.current;
        const cursor = cursorRef.current;

        if (!main || !cursor) return;
        // Register GSAP plugin
        gsap.registerPlugin(ScrollSmoother);

        // Create smooth scrolling
        const smoother = ScrollSmoother.create({
            wrapper: main,
            content: content,
            smooth: 2,  // scroll smoothness
            effects: true, // enable data-speed/data-lag effects
            smoothTouch: 0.1,
        });

        gsap.set(cursor, { xPercent: -100, yPercent: -300 });

        const handleMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 1,
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

            const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

            gsap.to(cursor, {
                scale: label === "Itachi Uchia" ? 5 : 8,
                backgroundColor:
                    label === "Itachi Uchia" || label === "" || label === "Goku vs Vegeta"
                        ? darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                        : darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                color: "#fff",

                duration: 0.3,
            });
        };


        const handleLeave = () => {
            cursor.textContent = "";
            cursor.classList.remove("cursor-lens");
            const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

            gsap.to(cursor, {
                scale: 1,

                backgroundColor:
                    darkMode ? "#efefef" : "#171717",
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
                "Me": "url('/v.webp')",
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
                borderRadius: "50%",
            });
        };


        const handleLeaveSocial = (e: Event) => {
            const target = e.target as HTMLElement;
            const hoverEl = target.closest(".cursor-hover-target") as HTMLElement | null;
            if (!hoverEl) return;

            // Reset the cursor appearance
            cursor.classList.remove("cursor-lens");


            const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;


            gsap.to(cursor, {
                scale: 1, // back to normal size
                backgroundImage: "none",
                backgroundColor: darkMode ? "#efefef" : "#171717",

                color: "#fff",
                duration: 0.3,
                borderRadius: "50%",

            });

            // Optionally clear text content
            cursor.textContent = "";
        };


        const handleCapabilitieEnter = (e: Event) => {
            const target = e.target as HTMLElement
            const hoverEl = target.closest(".cursor-hover-target") as HTMLElement | null;
            if (!hoverEl) return;

            const label = hoverEl.dataset.cursorText ?? "";
            cursor.textContent = label;
            cursor.classList.add("cursor-lens");

            const labelImageMap: Record<string, string | null> = {
                "dev": "url('/cap.avif')",
                "design": "url('/uxui.webp')",
                "web": "url('/web.webp')",

            };

            const backgroundImage = labelImageMap[label] ?? "none";

            // Remove text content if you're showing an image instead
            cursor.textContent = backgroundImage !== "none" ? "" : label;

            gsap.to(cursor, {
                scale: backgroundImage !== "none" ? 6 : 2,
                backgroundImage: backgroundImage,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "transparent", // remove color
                color: "#fff", // optional
                duration: 0.3,
                width: "70px",
                height: "40px",
                borderRadius: "0%",
            });

        }


        const handleCapabilitiesLeave = (e: Event) => {
            const target = e.target as HTMLElement;
            const hoverEl = target.closest(".cursor-hover-target") as HTMLElement | null;
            if (!hoverEl) return;

            // Reset the cursor appearance
            cursor.classList.remove("cursor-lens");

            const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

            gsap.to(cursor, {
                scale: 1, // back to normal size
                backgroundImage: "none",
                backgroundColor: darkMode ? "#efefef" : "#171717",
                color: "#fff",
                duration: 0.3,
                width: "20px",
                height: "20px",
                borderRadius: "50%",

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

        const hoverCapability = document.querySelectorAll(".cursor-hover-capability");
        hoverCapability.forEach((el) => {
            el.addEventListener("mouseenter", handleCapabilitieEnter);
            el.addEventListener("mouseleave", handleCapabilitiesLeave);
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

            hoverCapability.forEach((el) => {
                el.removeEventListener("mouseenter", handleCapabilitieEnter);
                el.removeEventListener("mouseleave", handleCapabilitiesLeave);
            });

            smoother.kill();
        };
    }, [usePathname()]); // 👈 re-run when route changes


    return (
        <>
            <div
                ref={cursorRef}
                className="hidden z-50 fixed md:flex items-center justify-center rounded-full dark:bg-[#efeded] bg-[#171717] pointer-events-none w-[20px] h-[20px] text-[2px] font-bold"
            />
            <div ref={mainRef}>
                <Navbar />
                <div ref={contentRef}>
                    {children}
                    <Theend />
                    <Footer />
                    <Banner />
                </div>
            </div>
        </>
    );
}