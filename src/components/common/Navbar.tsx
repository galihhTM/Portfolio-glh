import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { name: 'Home', targetId: 'hero' },
        { name: 'About', targetId: 'about' },
        { name: 'Tech Stack', targetId: 'skills' },
        { name: 'Projects', targetId: 'projects' },
    ];

    const handleScrollTo = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center', // Memastikan section tepat berada di pertengahan viewport
        });
        setActiveSection(targetId);
        }
    };

    // Auto-detect section yang sedang aktif saat di-scroll
    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        navItems.forEach((item) => {
            const element = document.getElementById(item.targetId);
            if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;

            if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(item.targetId);
            }
            }
        });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[92vw]">
        <nav className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 shadow-2xl shadow-black/50">
            
            <div className="hidden sm:flex items-center gap-1.5 pl-1 pr-3 border-r border-neutral-800/80 text-blue-500 font-mono text-xs">
            <Terminal className="w-3.5 h-3.5" />
            <span className="text-neutral-400 font-semibold"></span>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center gap-1 font-mono text-xs">
            {navItems.map((item) => {
                const isActive = activeSection === item.targetId;
                return (
                <button
                    key={item.targetId}
                    onClick={() => handleScrollTo(item.targetId)}
                    className={`relative px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                        ? 'text-white font-semibold bg-neutral-800/90 border border-neutral-700/80 shadow-inner'
                        : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
                    }`}
                >
                    {/* Active Indicator Dot */}
                    {isActive && (
                    <span className="absolute -top-0.5 right-2 w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                    )}
                    {item.name}
                </button>
                );
            })}
            </div>

        </nav>
        </header>
    );
}