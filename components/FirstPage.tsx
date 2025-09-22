"use client";
import Copy from "./gsap/Copy";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const FirstPage = () => {
    useEffect(() => {
        gsap.from(".image", {
            yPercent: -40,
            opacity: 0,
            duration: 2.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".image",
                start: "top 90%",
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 min-h-screen">
            {/* Text Section */}
            <div className="space-y-8 md:space-y-13 col-span-1 md:col-span-2 px-6 md:px-0 flex flex-col">
                <Copy delay={0.5}>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl hidden md:block leading-snug">
                        I create digital experiences that spark curiosity and leave a mark.
                        Every interface I design is a space where creativity and functionality
                        meet to tell unique stories.
                    </p>
                </Copy>
                <Copy>
                    <p className="text-xl sm:text-2xl md:text-3xl text-[#aeaeae] mt-6 md:mt-0 leading-relaxed">
                        <span>UX|UI Designer</span> and <span>Developer</span>, crafting
                        intuitive interfaces and digital experiences that connect with people.
                    </p>
                </Copy>
            </div>

            {/* Video Section */}
            <div className="image flex justify-center items-center md:col-span-1 col-span-1 mt-[-70vh] sm:mt-[-30vh] md:mt-[-20vh] px-6">
                <video
                    src="/black.mp4"
                    autoPlay
                    loop
                    className="w-[100%] sm:w-[100%] md:w-full max-w-[400px] md:max-w-none rounded-full"
                ></video>
            </div>
        </div>
    );
};

export default FirstPage;
