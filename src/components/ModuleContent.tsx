import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BookOpen, Clock, Trophy } from "lucide-react";
import { Module, UserProgress } from "@/types/learning";
import ReactMarkdown from 'react-markdown';
import { NetworkStatus } from "./ui/connection";
interface ModuleContentProps {
  module: Module;
  progress: UserProgress;
  totalModules: number;
  onBack: () => void;
  onStartQuiz: () => void;
}

export const ModuleContent = ({ module, progress, totalModules, onBack, onStartQuiz }: ModuleContentProps) => {
  const isCompleted = progress.completedModules.includes(module.id);
  const quizScore = progress.quizScores[module.id];
  return (
    <div className="min-h-screen bg-background">
        <NetworkStatus/>
    
      {/* Header */}
      <div className="bg-card border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="outline" size="sm" onClick={onBack} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div className="flex-1">
              <Progress value={(progress.completedModules.length / totalModules) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                {progress.completedModules.length} of {totalModules} modules completed
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground mb-2">{module.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{module.estimatedTime} minutes</span>
                </div>
                {quizScore && (
                  <div className="flex items-center gap-1 text-success">
                    <Trophy className="h-4 w-4" />
                    <span>Quiz Score: {quizScore}%</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Video Lesson */}
        {module.videoUrl && (
          <Card className="mb-8 overflow-hidden  ">
            <div className="aspect-video">
              <iframe
                src={module.videoUrl}
                title={`${module.title} - Video Lesson`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>
        )}

        <Card className="p-8">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown 
              components={{
                h1: ({children}) => <h1 className="text-3xl font-bold text-foreground mb-6">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h3>,
                p: ({children}) => <p className="text-foreground mb-4 leading-relaxed">{children}</p>,
                ul: ({children}) => <ul className="text-foreground mb-4 pl-6 space-y-2">{children}</ul>,
                li: ({children}) => <li className="text-foreground">{children}</li>,
                strong: ({children}) => <strong className="font-semibold text-foreground">{children}</strong>,
                code: ({children}) => <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{children}</code>,
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-muted-foreground bg-primary/5 py-4 rounded-r-lg">
                    {children}
                  </blockquote>
                )
              }}
            >
              {module.content}
            </ReactMarkdown>
          </div>
        </Card>

        {/* Quiz Button */}
        <div className="mt-8 text-center">
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Ready to Test Your Knowledge?</h3>
                <p className="text-muted-foreground">
                  Complete the quiz to unlock the next module and track your progress.
                </p>
              </div>
              <Button onClick={onStartQuiz} size="lg" className="gap-2">
                <Trophy className="h-4 w-4" />
                {quizScore ? `Retake Quiz (Current: ${quizScore}%)` : 'Take Quiz'}
              </Button>
            </div>
          </Card>
        </div>
      </div>
        {/* <Stars/> */}
    </div>
  );
};