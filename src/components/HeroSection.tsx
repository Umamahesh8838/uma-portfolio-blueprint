
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RippleText from '@/components/RippleText';
import { TextScramble } from '@/components/ui/text-scramble';
import { useState } from 'react';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-down cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TextScramble
              as="span"
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              trigger={isHovered}
              duration={1.2}
              speed={0.02}
              onScrambleComplete={() => setIsHovered(false)}
            >
              UMA MAHESWAR REDDY
            </TextScramble>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl animate-fade-up" style={{ animationDelay: "200ms" }}>
            B.Tech CSE (AIML) Student. <span className="text-primary">Machine Learning</span> & <span className="text-secondary">AI Developer</span>.
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="mt-20 flex justify-center gap-8 opacity-80 animate-fade-up" style={{ animationDelay: "600ms" }}>
            <div className="flex flex-col items-center">
              <div className="w-20 h-px bg-gray-700"></div>
              <span className="mt-2 text-sm text-gray-400">AI/ML</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-px bg-gray-700"></div>
              <span className="mt-2 text-sm text-gray-400">NLP</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-px bg-gray-700"></div>
              <span className="mt-2 text-sm text-gray-400">Computer Vision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
