
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="section-divider mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            Have a project in mind or want to discuss collaboration opportunities?
            Feel free to reach out through any of these platforms.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button asChild variant="outline" size="lg" className="w-full md:w-auto gap-2 h-20 md:h-16">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row items-center gap-2">
              <Github className="h-6 w-6" />
              <div>
                <span className="block md:inline font-medium">GitHub</span>
                <span className="text-xs text-gray-400 md:ml-2 block md:inline">Check out my code</span>
              </div>
            </a>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full md:w-auto gap-2 h-20 md:h-16">
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row items-center gap-2">
              <Linkedin className="h-6 w-6" />
              <div>
                <span className="block md:inline font-medium">LinkedIn</span>
                <span className="text-xs text-gray-400 md:ml-2 block md:inline">Connect professionally</span>
              </div>
            </a>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full md:w-auto gap-2 h-20 md:h-16">
            <a href="mailto:contact@example.com" className="flex flex-col md:flex-row items-center gap-2">
              <Mail className="h-6 w-6" />
              <div>
                <span className="block md:inline font-medium">Email</span>
                <span className="text-xs text-gray-400 md:ml-2 block md:inline">Send me a message</span>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
