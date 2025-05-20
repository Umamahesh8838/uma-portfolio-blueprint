
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="section-divider mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
            <CardHeader className="bg-primary/10 border-b border-border/50">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                My Resume
              </CardTitle>
              <CardDescription>
                Download my complete resume to learn more about my skills and experience
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Education</h3>
                <div className="space-y-2 text-gray-400">
                  <p>B.Tech in Computer Science (AIML)</p>
                  <p className="text-sm text-gray-500">Pre-final Year Student</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'BERT', 'OpenCV', 'Machine Learning'].map((skill, i) => (
                    <span key={i} className="text-sm px-3 py-1 bg-muted rounded-full text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Full Resume (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
