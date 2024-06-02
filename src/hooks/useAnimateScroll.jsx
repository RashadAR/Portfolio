import { useEffect } from 'react';

const useAnimateScroll = (selector) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        });

        const hiddenElements = document.querySelectorAll(selector);
        hiddenElements.forEach((el) => observer.observe(el));

        // Cleanup function to prevent memory leaks
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, [selector]);
};

export default useAnimateScroll;
