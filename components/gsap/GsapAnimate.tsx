"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface GsapAnimateProps {
    children: ReactNode;
    className?: string;
    animation?: gsap.TweenVars;
    scrollTrigger?: ScrollTrigger.Vars;
    wrapperTag?: React.ElementType;
    from?: "left" | "right" | "top" | "bottom";
}

const GsapAnimate: React.FC<GsapAnimateProps> = ({
    children,
    className = "",
    animation,
    scrollTrigger,
    wrapperTag: Wrapper = "div",
    from = "left",
}) => {
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const el = containerRef.current;

        // Default animation based on direction
        const defaultAnim: gsap.TweenVars = {
            x: from === "left" ? -100 : from === "right" ? 100 : 0,
            y: from === "top" ? -100 : from === "bottom" ? 100 : 0,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            immediateRender: false, // ensures it animates even if already visible
        };

        // Animate immediately if element is already in viewport
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            gsap.from(el, { ...defaultAnim, ...animation });
        }

        // Animate on scroll for elements below the viewport
        gsap.from(el, {
            ...defaultAnim,
            ...animation,
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reset",
                ...scrollTrigger,
            },
        });
    }, [animation, scrollTrigger, from]);

    return (
        <Wrapper ref={containerRef} className={className}>
            {children}
        </Wrapper>
    );
};

export default GsapAnimate;
