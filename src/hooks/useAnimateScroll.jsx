import { useEffect } from 'react';

const useAnimateScroll = (selector) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.add('show', entry.isIntersecting);
            });
        });

        const hiddenElements = document.querySelectorAll(selector);
        hiddenElements.forEach((el) => observer.observe(el));

        // Cleanup function to prevent memory leaks
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

export default useAnimateScroll;
