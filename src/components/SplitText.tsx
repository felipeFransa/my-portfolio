'use client';

import React, { useEffect, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  delayMs?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  highlightWords = [],
  highlightClassName = '',
  delayMs = 35,
}) => {
  const [hasMounted, setHasMounted] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    setHasMounted(true);
  }, []);

  let globalCharIndex = 0;

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {words.map((word, wIdx) => {
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === word.toLowerCase() || word.toLowerCase().includes(hw.toLowerCase())
        );

        const wordChars = word.split('');

        return (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char, cIdx) => {
              const charDelay = globalCharIndex * delayMs;
              globalCharIndex++;

              return (
                <span
                  key={cIdx}
                  className={`inline-block transition-all ${
                    isHighlighted ? highlightClassName : ''
                  } ${
                    hasMounted
                      ? 'opacity-100 translate-y-0 filter-none'
                      : 'opacity-0 translate-y-2 blur-[2px]'
                  }`}
                  style={{
                    transitionDuration: '500ms',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: `${charDelay}ms`,
                  }}
                  aria-hidden="true"
                >
                  {char}
                </span>
              );
            })}
            {/* Espaço entre palavras */}
            {wIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </span>
  );
};
