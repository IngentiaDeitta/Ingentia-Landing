"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "rgb(0 0 0)",       // black
        "rgb(0 0 0)",       // black
        "rgb(0 0 0)",       // black
    ];

    // Aligned with the site's blue/purple/emerald palette
    const linearGradients = [
        "linear-gradient(to bottom right, rgb(0 132 255), rgb(59 130 246))",    // accent-blue
        "linear-gradient(to bottom right, rgb(139 92 246), rgb(99 102 241))",   // purple
        "linear-gradient(to bottom right, rgb(16 185 129), rgb(6 182 212))",    // emerald → cyan
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="h-[36rem] overflow-y-auto flex justify-center relative space-x-10 rounded-3xl p-10 border border-white/10"
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-2xl font-bold text-white"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-base text-neutral-300 max-w-sm mt-6 leading-relaxed"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "hidden lg:block h-72 w-96 rounded-2xl sticky top-10 overflow-hidden shadow-2xl transition-all duration-700",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
