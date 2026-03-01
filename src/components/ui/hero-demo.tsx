'use client'

import { ArrowRight } from 'lucide-react'
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

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
                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-20 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="text-accent-blue text-sm font-bold tracking-[0.2em] uppercase mb-6">
                            Automatización Operativa con IA
                        </p>

                        <h1 className="text-[42px] md:text-[60px] lg:text-[72px] font-black leading-[1.0] tracking-[-2px] mb-8 text-white">
                            Tu empresa
                            <br />
                            <span className="text-neutral-400 font-light">pierde dinero</span>
                            <br />
                            todos los días.
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-lg leading-relaxed">
                            Por procesos que deberían estar automatizados. Construimos aplicaciones con IA que eliminan fricciones operativas en semanas, no meses.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start">
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
                                className="flex items-center justify-center gap-2.5 bg-accent-blue text-white py-5 px-10 rounded-full text-lg font-bold border-2 border-white/10 shadow-2xl cursor-pointer"
                            >
                                Solicita tu Demo
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="#problema"
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-2 text-neutral-400 hover:text-white py-5 px-4 rounded-full text-lg font-medium transition-colors cursor-pointer"
                            >
                                Ver el problema →
                            </motion.a>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 mt-16 pt-12 border-t border-white/10">
                            <div>
                                <div className="text-4xl font-black text-white">+15hs</div>
                                <div className="text-sm text-neutral-400 font-medium mt-1">Semanales ahorradas</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-white">10+</div>
                                <div className="text-sm text-neutral-400 font-medium mt-1">Industrias impactadas</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-accent-blue">Semanas</div>
                                <div className="text-sm text-neutral-400 font-medium mt-1">No meses</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ─── Right: Robot ─── */}
                <div className="flex-1 relative min-h-[50vh] md:min-h-screen pointer-events-auto">
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
