import { Plus, ArrowUp, Mail, Terminal } from 'lucide-react';

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

export default function FooterSection() {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    return (
        <footer className="w-full bg-[#0a0a0a] text-neutral-100 font-sans relative">
        <div className="w-full border-t border-neutral-800/80 absolute top-0 left-0 right-0 z-10" />

        <div className="max-w-6xl mx-auto w-full border-x border-neutral-800/80 relative p-6 sm:p-10 lg:p-12 z-10">
            
            <Plus className="w-2.5 h-2.5 absolute -top-1.25 -left-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -top-1.25 -right-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -bottom-1.25 -left-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -bottom-1.25 -right-1.25 text-neutral-500 pointer-events-none z-20" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-neutral-900">
            <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-500">
                <Terminal className="w-3.5 h-3.5" />
                // 04. WHAT'S NEXT
            </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Let's work together.
                </h2>
            </div>

            <div className="flex items-center gap-3">
                <a
                href="mailto:galihminfadlil@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white text-xs font-mono transition-all duration-200"
                >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>SAY HELLO</span>
                </a>

                <a
                href="https://github.com/galihhTM"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-all duration-200"
                aria-label="GitHub Profile"
                >
                <GithubIcon className="w-4 h-4" />
                </a>
            </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
            <div>
                © {new Date().getFullYear()} GALIH MIN FADLIL. 
            </div>

            <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-blue-400 transition-colors cursor-pointer group"
            >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
            </div>

        </div>

        {/* Garis Horizontal Edge-to-Edge Bawah */}
        <div className="w-full border-b border-neutral-800/80 absolute bottom-0 left-0 right-0 z-10" />
        </footer>
    );
}