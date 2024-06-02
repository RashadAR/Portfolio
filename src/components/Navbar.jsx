import { useState } from 'react';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('');

    const handleClick = (link) => {
        setActiveLink(link);
    };

    const linkClasses = (link) => (
        `hover:text-[#fdfcdc] hover:underline decoration-3 underline-offset-6 ${activeLink === link ? 'text-[#fdfcdc] underline' : 'text-cream'
        }`
    );

    return (
        <nav className="backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="#hero" className="text-3xl text-cream font-semibold">Rashad</a>
                    <div className="flex text-lg space-x-2 lg:space-x-4 text-cream">
                        <a href="#about" onClick={() => handleClick('about')} className={linkClasses('about')}>About</a>
                        <a href="#skills" onClick={() => handleClick('skills')} className={linkClasses('skills')}>Skills</a>
                        <a href="#projects" onClick={() => handleClick('projects')} className={linkClasses('projects')}>Projects</a>
                        <a href="#contact" onClick={() => handleClick('contact')} className={linkClasses('contact')}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
