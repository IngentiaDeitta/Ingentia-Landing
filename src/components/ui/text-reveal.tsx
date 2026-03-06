'use client';

import { cn } from "@/lib/utils";
import { useState, useEffect } from 'react';

interface TextRevealProps {
  word?: string;
  className?: string;
}

export default function TextReveal({ word = "Cinematic Reveal", className = "" }: TextRevealProps) {
  const [key, setKey] = useState(0);

  // We keep the dynamic key logic in case we want to trigger it programmatically later,
  // but we remove the manual replay button.

  return (
    <div className={cn("text-reveal-container", className)}>

      <div key={key} className="text-wrapper">
        <h1 className="title" aria-label={word}>
          {word.split(" ").map((wordStr, wordIndex) => (
            <span key={`word-${wordIndex}`} className="word whitespace-nowrap inline-block mx-[0.1em]">
              {wordStr.split("").map((char, charInWordIndex) => {
                // Calculate a unique index for animation delay
                const charIndex = word.split(" ").slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0) + charInWordIndex;
                return (
                  <span
                    key={`${key}-${wordIndex}-${charInWordIndex}`}
                    className="char"
                    style={{
                      "--index": charIndex,
                    } as React.CSSProperties}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>
      </div>

      <style jsx>{`
        /* --- THEME VARIABLES --- */
        .text-reveal-container {
          --bg-color: transparent;
          --text-color: #18181b;      /* Zinc-900 */
          --container-border: transparent;
        }

        @media (prefers-color-scheme: dark) {
          .text-reveal-container {
            --text-color: #fafafa;    /* Zinc-50 */
          }
        }

        :global(.dark) .text-reveal-container {
          --text-color: #fafafa;
        }

        /* --- Layout & Container --- */
        .text-reveal-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          background-color: var(--bg-color); 
          color: var(--text-color);
          border: 1px solid var(--container-border);
          border-radius: 12px;
          overflow: hidden;
          min-height: 200px;
          width: 100%;
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .text-wrapper {
          position: relative;
          z-index: 10;
        }

        /* --- Typography --- */
        .title {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          color: var(--text-color);
          transition: color 0.3s ease;
          text-align: center;
        }

        /* --- Character Animation --- */
        .char {
          display: inline-block;
          opacity: 0;
          filter: blur(12px);
          transform: translateY(40%) scale(1.1) translateZ(0);
          animation: cinematic-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(0.04s * var(--index));
          will-change: transform, opacity, filter;
        }

        /* --- Keyframes --- */
        @keyframes cinematic-reveal {
          0% {
            opacity: 0;
            filter: blur(12px);
            transform: translateY(40%) scale(1.1);
          }
          50% {
             opacity: 0.7;
             filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .char {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
