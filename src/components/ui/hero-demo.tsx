'use client'

import { ArrowRight, Zap, Globe, TrendingUp } from 'lucide-react'
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { motion, AnimatePresence } from "framer-motion";
import ProjectBadge from "@/components/ui/project-badge";

const stats = [
    { id: 'stat-1', name: '+Eficiencia operativa', icon: Zap },
    { id: 'stat-2', name: '+Adaptable a cualquier industria', icon: Globe },
    { id: 'stat-3', name: '+Impacto en semanas', icon: TrendingUp },
];

export function SplineSceneBasic() {
    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden relative w-full">
            {/* Spotlight effect */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Subtle blue gradient overlay */}
            <div className="absolute inset-0 pointer-events-none z-[1]">
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,132,255,0.12)] via-transparent to-transparent" />
            </div>

            {/* Main split layout */}
            <div className="relative z-[2] min-h-screen flex flex-col md:flex-row">

                {/* ─── Left: Copy ─── */}
                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-8 md:pt-16 lg:pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-light leading-[1.05] tracking-tight mb-4 text-white">
                            Tu PyME no necesita más software.
                            <br />
                            <span className="font-bold text-accent-blue inline-block mt-1">Necesita Ingeniería.</span>
                        </h1>

                        <div className="space-y-2 mb-6 text-balance max-w-xl">
                            <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
                                De procesos rotos a sistemas inteligentes. Optimizamos tu operación con arquitecturas de IA diseñadas para escalar, no para parchear.
                            </p>
                        </div>

                        <div className="flex items-start mb-10">
                            <motion.a
                                href="#contacto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(0,132,255,0.4)",
                                        "0 0 50px rgba(0,132,255,0.8)",
                                        "0 0 20px rgba(0,132,255,0.4)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="flex items-center justify-center gap-2.5 bg-accent-blue text-white py-4 px-10 rounded-full text-base font-bold border-2 border-white/10 shadow-2xl cursor-pointer"
                            >
                                Agendar Diagnóstico de Eficiencia
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                        </div>

                        {/* Stats as Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-white/10"
                        >
                            <AnimatePresence>
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={stat.id}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + i * 0.1 }}
                                    >
                                        <ProjectBadge project={stat} href="#contacto" />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ─── Right: Robot ─── */}
                <div className="flex-1 relative min-h-[40vh] md:min-h-screen pointer-events-auto">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full absolute inset-0"
                    />
                    {/* Edge fade for blending */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
                </div>
            </div>
        </div>
    )
}
