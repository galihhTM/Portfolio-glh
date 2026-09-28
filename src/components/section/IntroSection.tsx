import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';
import { Plus, Terminal, Laptop } from 'lucide-react';

export default function IntroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const linesRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
        const validLines = linesRef.current.filter(Boolean);

        if (validLines.length > 0) {
            gsap.fromTo(
            validLines,
            {
                opacity: 0,
                x: -60, 
            },
            {
                opacity: 1,
                x: 0, 
                duration: 1.5,
                stagger: 0.35, 
                ease: 'power3.out',
                scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 60%',
                toggleActions: 'play reverse play reverse',
                },
            }
            );
        }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
        ref={sectionRef}
        id="about"
        className="w-full bg-[#0a0a0a] text-neutral-100 font-inter relative overflow-hidden border-b border-neutral-800/80 py-16 sm:py-24"
        >
        {/* Garis Horizontal Edge-to-Edge Atas Section */}
        <div className="w-full border-t border-neutral-800/80 absolute top-0 left-0 right-0 z-10" />

        {/* Container Utama Garis Vertikal Kiri & Kanan */}
        <div className="max-w-6xl mx-auto w-full border-x border-neutral-800/80 relative p-6 sm:p-10 lg:p-8 z-10">
            <Plus className="w-2.5 h-2.5 absolute -top-1.25 -left-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -top-1.25 -right-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -bottom-1.25 -left-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -bottom-1.25 -right-1.25 text-neutral-500 pointer-events-none z-20" />

            <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-500">
                <Terminal className="w-3.5 h-3.5" />
                // 01. ABOUT GALIH
            </div>
            <span className="text-xs font-mono text-neutral-500">[FULL-STACK & SECURITY]</span>
            </div>

            <div className="w-full bg-neutral-950/80 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-neutral-800/60 pb-4 mb-6">
                <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800/80 text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5 text-blue-400" /> galih/about
                </div>
            </div>

            <div className="my-2">
                <div className="text-left pl-4 sm:pl-5 my-6 space-y-4">
                
                <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal overflow-hidden">
                    <span
                    ref={(el) => (linesRef.current[0] = el)}
                    className="block opacity-0 transform-gpu"
                    >
                    Hai, aku <strong className="text-white font-semibold">Galih Min Fadlil</strong>. Mahasiswa S1 Teknologi Informasi di Universitas Bina Sarana Informatika & Full-Stack Web Developer.
                    </span>
                    <span
                    ref={(el) => (linesRef.current[1] = el)}
                    className="block opacity-0 transform-gpu mt-2"
                    >
                    Aku memiliki pengalaman dalam pengembangan <span className="text-neutral-100 font-medium">Laravel, React, Next.js</span> untuk membangun aplikasi web modern.
                    </span>
                </p>

                <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal overflow-hidden">
                    <span
                    ref={(el) => (linesRef.current[2] = el)}
                    className="block opacity-0 transform-gpu"
                    >
                    Aku juga memiliki minat yang besar dalam bidang <span className="text-neutral-100 font-medium">Cybersecurity</span>, dengan fokus pada <span className="text-neutral-100 font-medium">penetration testing, ethical hacking, dan keamanan aplikasi web</span>.
                    </span>
                    <span
                    ref={(el) => (linesRef.current[3] = el)}
                    className="block opacity-0 transform-gpu mt-2"
                    >
                    Aku berkomitmen untuk terus belajar dan mengembangkan keterampilan di bidang ini, karena aku senang menghadapi tantangan baru dan mengupgrade diriku satu langkah kedepan.
                    </span>
                </p>

                </div>
            </div>

            <div className="pt-4 border-t border-neutral-800/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-4 text-neutral-400">
                <span className="flex items-center gap-1.5">
                    SYSTEM STATUS:
                    <span className="text-emerald-400 font-medium flex items-center gap-1 ml-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> BERNAFAS
                    </span>
                </span>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
}