import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../../lib/gsap';

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    useEffect(() => {
        const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenis.on('scroll', ScrollTrigger.update);

        const updateGsap = (time: number) => {
        lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateGsap);
        gsap.ticker.lagSmoothing(0);

        return () => {
        lenis.destroy();
        gsap.ticker.remove(updateGsap);
        };
    }, []);

    return <>{children}</>;
}