// hooks/useInViewAnimation.jsx
import { useEffect, useRef } from 'react';

export const useInViewAnimation = (options = { threshold: 0.1 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            options
        );

        const current = ref.current;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [options]);

    return ref;
};