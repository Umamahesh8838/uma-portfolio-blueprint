
import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <div className="section-divider mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Coming Soon
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-400 mb-4">
                I'll be sharing my thoughts, tutorials, and insights on AI, machine learning, 
                and more in this space soon.
              </p>
              <p className="text-sm text-gray-500">
                Stay tuned for articles on NLP, computer vision, and the latest in AI research.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
