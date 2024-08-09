import { useState, useEffect, useCallback, useMemo } from 'react';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    const handleClick = useCallback((link) => {
        setActiveLink(link);
        setIsMenuOpen(false);
    }, []);

    const linkClasses = useMemo(() => (link) => (
        `hover:text-[#fdfcdc] hover:underline decoration-3 underline-offset-6 ${activeLink === link ? 'text-[#fdfcdc] underline' : 'text-cream'
        }`
    ), [activeLink]);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const renderLink = useCallback((href, text) => (
        <a href={href} onClick={() => handleClick(text.toLowerCase())} className={linkClasses(text.toLowerCase())}>
            {text}
        </a>
    ), [handleClick, linkClasses]);

    const menuButton = useMemo(() => (
        <button onClick={toggleMenu} className="text-cream focus:outline-none">
            <div className={`w-6 h-5 flex flex-col justify-between transform transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
                <span className={`w-full h-0.5 bg-cream transform transition-all duration-300 ${isMenuOpen ? 'rotate-90 translate-y-2.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-cream transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-cream transform transition-all duration-300 ${isMenuOpen ? '-rotate-180 -translate-y-2' : ''}`}></span>
            </div>
        </button>
    ), [isMenuOpen, toggleMenu]);

    const navLinks = useMemo(() => (
        <>
            {renderLink("#about", "About")}
            {renderLink("#skills", "Skills")}
            {renderLink("#projects", "Projects")}
            {renderLink("#contact", "Contact")}
        </>
    ), [renderLink]);

    return (
        <nav className="backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="#hero" className="text-3xl text-cream font-semibold">Rashad</a>
                    {isMobile ? menuButton : (
                        <div className="flex text-lg space-x-2 lg:space-x-4 text-cream">
                            {navLinks}
                        </div>
                    )}
                </div>
                {isMobile && (
                    <div className={`${isMenuOpen ? 'max-h-48' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
                        <div className="flex flex-col space-y-2 py-2">
                            {navLinks}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}