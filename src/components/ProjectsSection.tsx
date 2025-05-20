
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Law Judgement Prediction",
    description: "A BERT-based NLP system for predicting legal judgements based on case details and precedents. The model analyzes legal documents to forecast potential outcomes.",
    techStack: ["Python", "BERT", "NLP", "TensorFlow", "Legal Analysis"],
    githubLink: "#",
    liveLink: "#",
    image: "/placeholder.svg"
  },
  {
    title: "Sign Language Recognition",
    description: "An OpenCV-based computer vision application that detects and interprets sign language gestures in real-time, converting them to text or speech for accessibility.",
    techStack: ["Python", "OpenCV", "Computer Vision", "TensorFlow", "Accessibility"],
    githubLink: "#",
    liveLink: "#",
    image: "/placeholder.svg"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
          <div className="section-divider mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            Showcasing my latest projects in machine learning and artificial intelligence.
            These projects demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <div className="h-48 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
