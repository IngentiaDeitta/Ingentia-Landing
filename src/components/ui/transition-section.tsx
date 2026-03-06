"use client";

import { motion } from "framer-motion";

interface TransitionSectionProps {
    phrase: string;
}

export const TransitionSection = ({ phrase }: TransitionSectionProps) => {
    return (
        <section className="py-32 md:py-48 bg-background flex items-center justify-center transition-colors duration-500 border-t border-b border-border/10">
            <div className="apple-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.2] italic">
                        "{phrase}"
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};
