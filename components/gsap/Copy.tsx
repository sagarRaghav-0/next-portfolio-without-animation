"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import React, { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
    animateOnScroll?: boolean;
    delay?: number;
}

const Copy: React.FC<React.PropsWithChildren<CopyProps>> = ({
    children,
    animateOnScroll = true,
    delay = 0
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const elementRef = useRef<HTMLElement[]>([]);
    const splitRef = useRef<SplitText[]>([]);
    const lines = useRef<HTMLElement[]>([]);

    useGSAP(() => {
        if (!containerRef.current) return;

        splitRef.current = [];
        elementRef.current = [];
        lines.current = [];

        let elements: HTMLElement[] = [];

        if (containerRef.current.hasAttribute("data-copy-wrapper")) {
            elements = Array.from(containerRef.current.children).filter(
                (el): el is HTMLElement => el instanceof HTMLElement
            );
        } else {
            elements = [containerRef.current];
        }

        elements.forEach((element) => {
            elementRef.current.push(element);

            const split = SplitText.create(element, {
                type: "lines",
                mask: "lines",
                linesClass: "line++",
            });

            splitRef.current.push(split);

            const computedStyle = window.getComputedStyle(element);
            const textIndent = computedStyle.textIndent;

            if (textIndent && textIndent !== "0px") {
                if (split.lines.length > 0 && split.lines[0] instanceof HTMLElement) {
                    split.lines[0].style.paddingLeft = textIndent;
                }
                element.style.textIndent = "0";
            }

            lines.current.push(...split.lines.filter((el): el is HTMLElement => el instanceof HTMLElement));
        });

        gsap.set(lines.current, { y: "100%" });

        const animationProps = {
            y: "0%",
            duration: 0.4,
            stagger: 0.3,
            ease: "power4.out",
            delay: delay,
        };

        if (animateOnScroll) {
            gsap.to(lines.current, {
                ...animationProps,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reset",
                }
            });
        } else {
            gsap.to(lines.current, animationProps);
        }

        return () => {
            splitRef.current.forEach((split) => {
                split.revert();
            });
        };
    }, {
        scope: containerRef,
        dependencies: [animateOnScroll, delay],
    });

    // ✅ Wrap children in a div instead of cloneElement
    return (
        <div ref={containerRef} data-copy-wrapper="true">
            {children}
        </div>
    );
};

export default Copy;




