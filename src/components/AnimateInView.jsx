// components/AnimateInView.jsx
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const AnimateInView = ({ children, className = '', ...props }) => {
    const ref = useInViewAnimation();

    return (
        <div ref={ref} className={`animate-item ${className}`} {...props}>
            {children}
        </div>
    );
};