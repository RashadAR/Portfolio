  import { useEffect, useState } from 'react';

/**
 * Dynamically loads react-lottie-player only when needed to reduce initial bundle size.
 * Shows a simple animated pulse placeholder until loaded (respecting reduced motion).
 */
export function LazyLottie({ animationData, play = true, loop = true, style, className = '', ariaHidden = true }) {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    let mounted = true;
    // Only import when play requested (in view)
    if (play) {
      import('react-lottie-player').then(mod => {
        if (mounted) setLottie(() => mod.default);
      });
    }
    return () => { mounted = false; };
  }, [play]);

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!Lottie) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg bg-black/10 dark:bg-white/5 ${className}`}
        style={style}
        aria-hidden={ariaHidden}
      >
        <div className={`w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500/40 to-violet-500/40 ${prefersReducedMotion ? '' : 'animate-pulse'}`} />
      </div>
    );
  }

  return (
    <Lottie
      loop={loop}
      animationData={animationData}
      play={play && !prefersReducedMotion}
      style={style}
      className={className}
      aria-hidden={ariaHidden}
    />
  );
}
