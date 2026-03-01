'use client';

import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
    /** URL to the Spline scene (.splinecode file) */
    scene: string;
    /** CSS class to apply to the Spline canvas */
    className?: string;
    /** Callback fired when the scene finishes loading */
    onLoad?: (app: any) => void;
}

/**
 * A lazy-loaded Spline scene component.
 */
export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <div className="w-10 h-10 border-3 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
            }
        >
            <Spline scene={scene} className={className} onLoad={onLoad} />
        </Suspense>
    );
}
