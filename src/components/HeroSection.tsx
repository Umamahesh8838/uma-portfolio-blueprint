
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-0 right-0 opacity-80 overflow-hidden h-full -z-10">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-down">
            UMA MAHESWAR REDDY
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
