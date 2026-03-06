"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface TextBlockAnimationProps {
    children: React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
    blockColor?: string;
    stagger?: number;
    duration?: number;
    className?: string;
}

export default function TextBlockAnimation({
    children,
    animateOnScroll = true,
    delay = 0,
    blockColor = "#3b82f6", // Default to accent-blue
    stagger = 0.1,
    duration = 0.6,
    className
}: TextBlockAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        // The logic from user's provided code manually injected blocks.
        // For the sake of the prompt's provided logic and provided "Arquitectura" section,
        // we'll assume the children can be treated as a block.

        const items = Array.from(containerRef.current.children) as HTMLElement[];
        if (items.length === 0) return;

        const blocks: HTMLElement[] = [];
        const textElements: HTMLElement[] = [];

        items.forEach((item) => {
            // Apply positioning to the container of the text
            item.style.position = "relative";
            item.style.overflow = "hidden";

            const block = document.createElement("div");
            block.style.position = "absolute";
            block.style.top = "0";
            block.style.left = "0";
            block.style.width = "100%";
            block.style.height = "100%";
            block.style.backgroundColor = blockColor;
            block.style.zIndex = "2";
            block.style.transform = "scaleX(0)";
            block.style.transformOrigin = "left center";

            item.appendChild(block);

            // Set initial state of the actual text
            // We assume the item is the text container
            gsap.set(item, { color: "transparent" }); // Hide the text initially by color

            blocks.push(block);
            textElements.push(item);
        });

        // Create the Master Timeline
        const tl = gsap.timeline({
            defaults: { ease: "expo.inOut" },
            scrollTrigger: animateOnScroll ? {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
            } : null,
            delay: delay
        });

        tl.to(blocks, {
            scaleX: 1,
            duration: duration,
            stagger: stagger,
            transformOrigin: "left center",
        })
            .set(textElements, {
                color: "inherit", // Show the text when block covers it
                clearProps: "all"
            }, `<${duration / 2}`)
            .to(blocks, {
                scaleX: 0,
                duration: duration,
                stagger: stagger,
                transformOrigin: "right center"
            }, `<${duration * 0.4}`);

    }, {
        scope: containerRef,
        dependencies: [animateOnScroll, delay, blockColor, stagger, duration]
    });

    return (
        <div ref={containerRef} className={cn("relative", className)}>
            {children}
        </div>
    );
}
