// hooks/useInViewAnimation.jsx
import { useEffect, useRef } from 'react';

export const useInViewAnimation = (options = { threshold: 0.1 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // Skip observing; reveal immediately for accessibility
            if (ref.current) {
                ref.current.classList.add('animate-in');
            }
            return; // No observer created
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target); // Stop observing once animated
                    }
                });
            },
            options
        );

        const current = ref.current;
        if (current) observer.observe(current);

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return ref;
};