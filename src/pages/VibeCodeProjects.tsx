
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import RippleText from '@/components/RippleText';

const vibeProjects = [
  {
    title: "Neural Network Visualizer",
    description: "Interactive visualization tool for neural network training process, helping users understand how deep learning models learn patterns.",
    techStack: ["React", "D3.js", "TensorFlow.js", "WebGL"],
    githubLink: "#",
    liveLink: "#",
    videoSrc: "/neural-network-demo.mp4" // placeholder path
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "Real-time sentiment analysis of social media posts with interactive visualization and trend tracking features.",
    techStack: ["Python", "NLP", "React", "Chart.js"],
    githubLink: "#",
    liveLink: "#",
    videoSrc: "/sentiment-analysis-demo.mp4" // placeholder path
  },
  {
    title: "AR Object Recognition",
    description: "Augmented reality application that can identify objects in real-world environments using mobile camera.",
    techStack: ["Unity", "ARCore", "TensorFlow Lite", "C#"],
    githubLink: "#",
    liveLink: "#",
    videoSrc: "/ar-object-demo.mp4" // placeholder path
  },
  {
    title: "Financial Prediction Model",
    description: "LSTM-based system for forecasting stock market trends using historical data and sentiment analysis.",
    techStack: ["Python", "Keras", "Pandas", "Plotly"],
    githubLink: "#",
    liveLink: "#",
    videoSrc: "/financial-model-demo.mp4" // placeholder path
  }
];

const VibeCodeProjects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <RippleText text="Vibe Coding Projects" className="text-3xl md:text-4xl font-bold inline-block" />
            <div className="section-divider mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6 text-gray-400">
              A collection of interactive and visually appealing projects focused on creating engaging user experiences with AI technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vibeProjects.map((project, index) => (
              <Card key={index} className="project-card bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden group">
                <div className="h-48 overflow-hidden bg-muted relative">
                  {/* Video that plays on hover */}
                  <video 
                    src={project.videoSrc}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity absolute inset-0"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                  {/* Fallback image while video loads */}
                  <img 
                    src="/placeholder.svg" 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-0 transition-opacity"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">
                    <RippleText text={project.title} />
                  </CardTitle>
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
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default VibeCodeProjects;
