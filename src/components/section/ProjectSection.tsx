import { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';
import {
    Plus,
    Terminal,
    Maximize2,
    X,
    ExternalLink,
    CheckCircle2,
    GitCommitHorizontal,
} from 'lucide-react';

// Component Inline SVG untuk Ikon GitHub
const GithubIcon = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

interface Project {
    id: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    image: string;
    techStack: string[];
    features: string[];
    githubUrl?: string;
    demoUrl?: string;
}

export default function ProjectSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsGridRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
        id: 'warkop-ade',
        title: 'Warkop Ade — Online Ordering System',
        shortDesc: 'Aplikasi web full-stack untuk pemesanan menu online secara langsung.',
        fullDesc:
            'Sistem pemesanan online dan manajemen warkop terintegrasi. Memungkinkan pelanggan memesan menu via web interaktif dan mempermudah kasir/admin mengelola transaksi, stok menu, serta laporan penjualan secara real-time via dashboard admin.',
        image: '/image/project/WarkopAde.png', 
        techStack: ['React', 'Next.js', 'Tailwind CSS', 'Laravel', 'Filament', 'MySQL', 'REST API'],
        features: [
            'Katalog menu modern',
            'Sistem pemesanan online',
            'Dashboard Admin & Kasir berbasis Laravel Filament',
            'Sinkronisasi stok & riwayat transaksi real-time',
        ],
        githubUrl: 'https://github.com/galihhTM/warkop-ade',
        demoUrl: 'https://warkop-ade.vercel.app/',
        },
        {
        id: 'campus-library',
        title: 'Campus Library & Document Information System',
        shortDesc: 'Sistem informasi perpustakaan dan arsip kampus dengan manajemen peminjaman',
        fullDesc:
            'Sistem informasi manajemen perpustakaan kampus yang dirancang untuk menangani katalogisasi buku, penelusuran dokumen, transaksi peminjaman/pengembalian, pencetakan invoice, serta modul backup database relasional.',
        image: '/image/project/Library.png',
        techStack: ['Laravel', 'MySQL', 'Role-Based AC', 'Laragon'],
        features: [
            'Katalogisasi buku dan arsip dokumen digital',
            'Tracking peminjaman dan pengembalian real-time',
            'Role-Based Access Control (Admin, Pustakawan, Mahasiswa)',
            'Cetak invoice & bukti transaksi otomatis',
        ],
        githubUrl: 'https://github.com/galihhTM/perpustakaan-campus',
        demoUrl: '#',
        },
        {
        id: 'indonesia-one',
        title: 'Indonesia One',
        shortDesc: 'Aplikasi website yang menampilkan informasi dan data terkait menara Indonesia One secara interaktif.',
        fullDesc:
            'Website interaktif yang menampilkan informasi dan data terkait menara Indonesia One, termasuk lokasi, spesifikasi teknis, dan galeri foto. Tersedia fitur pencarian menara berdasarkan lokasi dan kategori, serta peta interaktif untuk navigasi visual.',
        image: '/image/project/IndonesiaOne.png',
        techStack: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
        features: [
            'Interaktif twin tower',
            'Peta interaktif untuk navigasi menara',
            'Akses ke fasilitas menara'
        ],
        githubUrl: 'https://github.com/galihhTM',
        demoUrl: 'https://indonesia-satu.vercel.app/',
        },
        
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
        if (cardsGridRef.current) {
            gsap.fromTo(
            cardsGridRef.current.children,
            { opacity: 0, y: 35 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 65%',
                toggleActions: 'play reverse play reverse',
                },
            }
            );
        }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (selectedProject && modalRef.current) {
        gsap.fromTo(
            modalRef.current,
            { opacity: 0, scale: 0.95, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power3.out' }
        );
        }
    }, [selectedProject]);

    return (
        <section
        ref={sectionRef}
        id="projects"
        className="w-full bg-[#0a0a0a] text-neutral-100 font-sans relative overflow-hidden border-b border-neutral-800/80 py-16 sm:py-24"
        >
        <div className="w-full border-t border-neutral-800/80 absolute top-0 left-0 right-0 z-10" />

        <div className="max-w-6xl mx-auto w-full border-x border-neutral-800/80 relative p-6 sm:p-10 lg:p-12 z-10">
            <Plus className="w-2.5 h-2.5 absolute -top-1.25 -left-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -top-1.25 -right-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -bottom-1.25 -left-1.25 text-neutral-500 pointer-events-none z-20" />
            <Plus className="w-2.5 h-2.5 absolute -bottom-1.25 -right-1.25 text-neutral-500 pointer-events-none z-20" />

            <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-500">
                <Terminal className="w-3.5 h-3.5" />
                // 03. PROJECTS
            </div>
            <span className="text-xs font-mono text-neutral-500">[CLICK TO EXPAND]</span>
            </div>

            <div ref={cardsGridRef} className="flex flex-col gap-6">
            {projects.map((project) => (
                <div
                key={project.id}
                className="group bg-neutral-950/80 border border-neutral-800/80 rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch p-4 sm:p-5 gap-5 sm:gap-6 hover:border-neutral-700 transition-all duration-300 relative"
                >
                <div className="relative w-full sm:w-64 md:w-72 lg:w-80 h-48 sm:h-auto shrink-0 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/60">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />

                    {/* Tombol Expand Overlay */}
                    <div className="absolute top-2.5 right-2.5 flex items-center justify-end pointer-events-none">
                    <button
                        onClick={() => setSelectedProject(project)}
                        className="pointer-events-auto p-1.5 rounded-lg bg-neutral-950/80 hover:bg-blue-600 backdrop-blur-md border border-neutral-800/80 hover:border-blue-500 text-neutral-300 hover:text-white transition-all duration-200 shadow-lg"
                        title="Perbesar Card / Lihat Detail"
                        aria-label="Expand Project Details"
                    >
                        <Maximize2 className="w-3 h-3" />
                    </button>
                    </div>
                </div>

                {/* DETAIL SISI KANAN */}
                <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-100 group-hover:text-blue-400 transition-colors leading-snug">
                        {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
                        {project.shortDesc}
                    </p>

                    <div className="mt-4">
                        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2">
                        TECH STACK
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                            <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                    </div>
                    </div>

                    {/* ACTION FOOTER */}
                    <div className="mt-5 pt-3 border-t border-neutral-900 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {project.demoUrl && project.demoUrl !== '#' && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                            aria-label="View Live Program"
                            title="Live Demo / Website"
                        >
                            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                        </a>
                        )}

                        {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                            aria-label="View Source Code on GitHub"
                            title="GitHub Repository"
                        >
                            <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                        )}
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <div
                ref={modalRef}
                className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-7 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col justify-between"
            >
                <div className="flex items-start justify-between border-b border-neutral-800/80 pb-4 mb-4 shrink-0">
                <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {selectedProject.title}
                </h2>

                <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-colors shrink-0 ml-4"
                    aria-label="Close Modal"
                >
                    <X className="w-4 h-4" />
                </button>
                </div>

                <div className="overflow-y-auto pr-1 space-y-4">
                <div className="relative h-44 sm:h-56 w-full rounded-xl overflow-hidden border border-neutral-800/80 bg-neutral-900 shrink-0">
                    <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center"
                    />
                </div>

                <div>
                    <h3 className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                    PROJECT OVERVIEW
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {selectedProject.fullDesc}
                    </p>
                </div>

                <div>
                    <h3 className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-2">
                    Features & Highlights
                    </h3>
                    <ul className="space-y-1.5">
                    {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <GitCommitHorizontal className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-2">
                    TECHNOLOGY & TOOLS
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                        <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-200"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-3">
                    {selectedProject.githubUrl && (
                    <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 text-xs font-mono transition-colors"
                    >
                        <GithubIcon className="w-3.5 h-3.5" /> VIEW SOURCE CODE
                    </a>
                    )}

                    {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                    <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold transition-colors"
                    >
                        <ExternalLink className="w-3.5 h-3.5" /> LIVE DEMO
                    </a>
                    )}
                </div>

                <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                    [CLOSE]
                </button>
                </div>
            </div>
            </div>
        )}
        </section>
    );
}