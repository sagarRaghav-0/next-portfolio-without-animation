"use client";
import Image from "next/image";
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
            <div className=" col-span-1 md:col-span-2 md:px-0 flex flex-col">
                <div className="overflow-hidden">

                    <Copy delay={0.4}>
                        <p data-lag={0.1} className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-12 hidden  md:block leading-snug">
                            I create digital experiences that spark curiosity and leave a mark.
                            Every interface I design is a space where creativity and functionality
                            meet to tell unique stories.
                        </p>


                        <p data-lag={0.6} className="text-xl sm:text-2xl md:text-3xl text- text-shadow-text mt-6 md:mt-0 leading-relaxed">
                            <span>UX|UI Designer</span> and <span>Developer</span>,crafting intuitive interfaces and digital experiences that connect with people.
                        </p>
                    </Copy>
                </div>
            </div>

            {/* Video Section */}
            <div
                data-cursor-text="Goku vs Vegeta"
                className="cursor-hover-target image flex justify-center items-center md:col-span-1 col-span-1 mt-[-70vh] sm:mt-[-30vh] md:mt-[-20vh] px-6">
                <div className="overflow-hidden">

                    <Image
                        data-lag={1}
                        src="/fdbz.gif"
                        alt="contact me"
                        width={100}
                        height={100}
                        className=" w-full h-45 "
                    />
                </div>
            </div>

        </div>
    );
};

export default FirstPage;
