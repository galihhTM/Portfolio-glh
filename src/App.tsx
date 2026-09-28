import SmoothScroll from './components/common/SmoothScroll';
import Navbar from './components/common/Navbar';
import HeroSection from './components/section/HeroSection';
import IntroSection from './components/section/IntroSection';
import TechSection from './components/section/TechSection';
import ProjectSection from './components/section/ProjectSection';
import FooterSection from './components/section/FooterSection';

export default function App() {
  return (
    <SmoothScroll>
      <div className="w-full min-h-screen bg-[#0a0a0a] text-neutral-100 font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden">
        {/* Background Grid Pattern */}
        <Navbar />
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
        <main className="relative z-10 w-full">
          <HeroSection />
          <IntroSection />
          <TechSection />
          <ProjectSection />
          <FooterSection />
        </main>
      </div>
    </SmoothScroll>
  );
}