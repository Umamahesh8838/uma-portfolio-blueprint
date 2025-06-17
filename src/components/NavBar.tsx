import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FileText, Github, Linkedin, Home, Code, BookOpen, Mail } from 'lucide-react';
import { MouseFollowingEyes } from '@/components/ui/mouse-following-eyes';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine which section is currently in view
      const sections = ['home', 'projects', 'resume', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'home';
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6",
        scrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-md" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <a href="#home" className="font-bold text-xl text-white">UMR.</a>
          <MouseFollowingEyes />
        </div>
        
        <div className="hidden md:flex space-x-1">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeSection === link.href.substring(1)
                  ? "text-white bg-primary/20"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              )}
            >
              <span className="flex items-center gap-1.5">
                <link.icon className="h-4 w-4" />
                {link.name}
              </span>
            </a>
          ))}
        </div>
        
        <div className="flex md:hidden">
          <div className="flex gap-2">
            <a 
              href="https://github.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer" 
              className="p-2 text-gray-300 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
