
import { Code, BookOpen, Image } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <div className="section-divider mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <span>Machine Learning & AI</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Specialized in developing ML models and algorithms for various applications. 
                Experienced with frameworks like TensorFlow, PyTorch, and scikit-learn.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Natural Language Processing</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Proficient in NLP techniques using BERT and transformers architecture. 
                Experience with text classification, sentiment analysis, and legal document processing.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5 text-primary" />
                <span>Computer Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Strong skills in CV applications using OpenCV and deep learning. 
                Built systems for sign language recognition, object detection, and more.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
