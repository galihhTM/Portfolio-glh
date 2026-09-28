import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { Plus, ArrowUpRight, Mail, Sparkles } from 'lucide-react';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const descRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const quoteRef = useRef<HTMLDivElement>(null);

    const [currentTime, setCurrentTime] = useState('');

    const nameText = "hey, I'm Galih";
    const letters = nameText.split('');

    const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';

    useEffect(() => {
        const updateTime = () => {
        const now = new Date();
        setCurrentTime(
            now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            })
        );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
        const mainTl = gsap.timeline();

        letterRefs.current.forEach((el, index) => {
            if (!el) return;

            const originalChar = letters[index];
            const isSpace = originalChar === ' ';
            const isEmoji = originalChar === '👋';

            if (isSpace || isEmoji) {
            mainTl.fromTo(
                el,
                { opacity: 0, x: -30 },
                {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: 'power2.out',
                },
                index * 0.045
            );
            return;
            }

            const scrambleTarget = { progress: 0 };

            mainTl.fromTo(
            el,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: 'power2.out',
            },
            index * 0.045
            );

            mainTl.to(
            scrambleTarget,
            {
                progress: 1,
                duration: 1.5,
                ease: 'none',
                onUpdate: () => {
                const randomChar = glyphs[Math.floor(Math.random() * glyphs.length)];
                el.innerText = randomChar;
                },
                onComplete: () => {
                el.innerText = originalChar;
                },
            },
            index * 0.045
            );
        });

        mainTl.fromTo(
            descRef.current,
            { opacity: 0, y: -40 },
            { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
            '-=0.2'
        );

        mainTl
            .fromTo(
            ctaRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
            '-=0.5'
            )
            .fromTo(
            quoteRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
            '-=0.6'
            );

        if (descRef.current) {
            gsap.to(descRef.current, {
            y: 60,
            opacity: 0,
            ease: 'power1.in',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '40% top',
                scrub: true,
            },
            });
        }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
        id="hero"
        ref={containerRef}
        className="w-full min-h-screen bg-[#0a0a0a] text-neutral-100 font-inter flex flex-col justify-between relative"
        >
        <div className="w-full border-t border-b border-neutral-800/80">
            <div className="max-w-6xl mx-auto h-16 sm:h-20 border-x border-neutral-800/80 relative">
            <Plus className="w-2.5 h-2.5 absolute -top-1.25 -left-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -top-1.25 -right-1.25 text-neutral-500 pointer-events-none z-20" />
            
            <Plus className="w-2.5 h-2.5 absolute -bottom-1.25 -left-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -bottom-1.25 -right-1.25 text-neutral-500 pointer-events-none z-20" />
            </div>
        </div>

        <div className="w-full flex-1 flex flex-col border-b border-neutral-800/80">
            <div className="max-w-6xl mx-auto w-full flex-1 border-x border-neutral-800/80 relative px-8 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-10 flex flex-col justify-start pt-6 sm:pt-10 overflow-hidden">
            
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden z-0">
                <svg
                className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-225 h-137.5"
                viewBox="0 0 800 500"
                fill="none"
                >
                {[100, 160, 220, 280, 340, 400, 460, 520, 580].map((radius, i) => (
                    <circle
                    key={i}
                    cx="400"
                    cy="500"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-neutral-500"
                    strokeDasharray={i % 2 === 0 ? '4 4' : 'none'}
                    />
                ))}
                </svg>
            </div>

            <div className="relative z-10 max-w-3xl">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-100 leading-[1.1] flex flex-wrap font-inter sm:font-inter">
                {letters.map((char, index) => (
                    <span
                    key={index}
                    ref={(el) => (letterRefs.current[index] = el)}
                    className="inline-block opacity-0 transform-gpu min-w-[0.3em]"
                    >
                    {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
                </h1>

                <p
                ref={descRef}
                className="max-w-xl mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed font-normal opacity-0"
                >
                An IT student & full-stack web developer driven strive to create innovative solutions and deliver exceptional user experiences on this boring planet
                </p>

                <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-4 opacity-0">

                <div className="flex items-center gap-2">
                    <a
                    href="https://github.com/galihhTM"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                    aria-label="GitHub"
                    >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    </a>

                    <a
                    href="galihh@gmail.com"
                    className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                    aria-label="Email"
                    >
                    <Mail className="w-4 h-4" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="w-full border-b border-neutral-800/80 bg-neutral-950/40">
            <div className="max-w-6xl mx-auto border-x border-neutral-800/80 relative p-4 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Plus className="w-2.5 h-2.5 absolute -top-1.25 -left-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -top-1.25 -right-1.25 text-neutral-500 pointer-events-none z-20" />

            <Plus className="w-2.5 h-2.5 absolute -bottom-1.25 -left-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -bottom-1.25 -right-1.25 text-neutral-500 pointer-events-none z-20" />

            <p
                ref={quoteRef}
                className="text-xs sm:text-sm font-mono text-neutral-500 italic max-w-2xl leading-relaxed opacity-0"
            >
                "It has become appallingly obvious that our technology has exceeded our humanity."
            </p>

            <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-mono text-neutral-400 bg-neutral-900/80 px-2.5 py-1 rounded border border-neutral-800">
                [{currentTime || '07:15 PM'}]
                </span>
            </div>
            </div>
        </div>
        </section>
    );
}