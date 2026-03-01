'use client'

import { Suspense, lazy, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    const [isInView, setIsInView] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsInView(true)
            },
            { threshold: 0.1, rootMargin: '200px' }
        )

        const currentRef = containerRef.current
        if (currentRef) observer.observe(currentRef)
        return () => { if (currentRef) observer.unobserve(currentRef) }
    }, [])

    return (
        <div ref={containerRef} className={className}>
            <AnimatePresence>
                {isInView && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full"
                    >
                        <Suspense
                            fallback={
                                <div className="w-full h-full flex items-center justify-center bg-black/5 dark:bg-white/5 animate-pulse rounded-3xl backdrop-blur-sm">
                                    <div className="w-10 h-10 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            }
                        >
                            <Spline
                                scene={scene}
                                className="w-full h-full"
                            />
                        </Suspense>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
