"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface GsapAnimateProps {
    children: ReactNode;
    className?: string;
    wrapperTag?: React.ElementType;
    from?: "left" | "right" | "top" | "bottom";
}

const GsapAnimate: React.FC<GsapAnimateProps> = ({
    children,
    className = "",
    wrapperTag: Wrapper = "div",
    from = "left",
}) => {
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const el = containerRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reset",
            },
        });

        tl.from(el, {
            x: from === "left" ? -100 : from === "right" ? 100 : 0,
            y: from === "top" ? -100 : from === "bottom" ? 100 : 0,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        });

        // ✅ cleanup function kills both timeline and ScrollTrigger
        return () => {
            tl.kill();
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
        };
    }, [from]);

    return (
        <Wrapper ref={containerRef} className={className}>
            {children}
        </Wrapper>
    );
};

export default GsapAnimate;
