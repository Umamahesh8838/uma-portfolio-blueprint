
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { BackgroundCells } from '@/components/ui/background-ripple-effect';

const Index = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundCells className="bg-background">
        <div className="relative z-10 pointer-events-auto">
          <NavBar />
          
          <HeroSection />
          
          <div className="fade-in-section">
            <ProjectsSection />
          </div>
          
          <div className="fade-in-section">
            <ResumeSection />
          </div>
          
          <div className="fade-in-section">
            <BlogSection />
          </div>
          
          <div className="fade-in-section">
            <ContactSection />
          </div>
          
          <Footer />
          <ScrollToTop />
        </div>
      </BackgroundCells>
    </div>
  );
};

export default Index;
