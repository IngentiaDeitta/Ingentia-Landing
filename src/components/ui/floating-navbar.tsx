"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: React.ReactNode;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [visible, setVisible] = useState(true);

    React.useEffect(() => setMounted(true), []);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true); // Keep visible at very top
            } else {
                if (direction < 0) {
                    setVisible(true); // Scrolling up
                } else {
                    setVisible(false); // Scrolling down
                }
            }
        }
    });

    if (!mounted) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-7xl fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black/80 bg-white/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-4 items-center justify-between",
                    className
                )}
            >
                <Link href="/" className="flex items-center gap-2 relative h-10 w-40">
                    <Image
                        src={theme === "dark" ? "/Logo Negro_T.png" : "/logo-light.png"}
                        alt="Ingentia Logo"
                        fill
                        className="object-contain object-left scale-125"
                        priority
                    />
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((navItem: any, idx: number) => (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 font-medium text-sm transition-colors"
                            )}
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="hidden sm:block text-sm">{navItem.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5 text-neutral-50" /> : <Moon className="w-5 h-5 text-neutral-600" />}
                    </button>
                    <a
                        href="#contacto"
                        className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-6 py-2.5 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                    >
                        <span>Hablar con un Ingeniero</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                    </a>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
