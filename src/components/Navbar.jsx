export default function Navbar() {
    return (
        <nav className="backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 z-50 bg-white
         border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="#hero" className="text-3xl text-cream font-semibold">Rashad</a>
                    <div className="flex text-xl space-x-2 lg:space-x-4 text-cream">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
