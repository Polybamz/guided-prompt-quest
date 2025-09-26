import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, Play, Lock } from "lucide-react";
import { Module, UserProgress } from "@/types/learning";
import { getModuleProgress, canAccessModule } from "@/utils/progress";

interface ModuleCardProps {
  module: Module;
  progress: UserProgress;
  allModules: Module[];
  onModuleSelect: (moduleId: string) => void;
}

export const ModuleCard = ({ module, progress, allModules, onModuleSelect }: ModuleCardProps) => {
  const status = getModuleProgress(module.id, progress);
  const canAccess = canAccessModule(module.id, progress, allModules);
  const quizScore = progress.quizScores[module.id];
  
  const getStatusIcon = () => {
    if (!canAccess) return <Lock className="h-5 w-5 text-muted-foreground" />;
    if (status === 'completed') return <CheckCircle2 className="h-5 w-5 text-success" />;
    if (status === 'in-progress') return <Play className="h-5 w-5 text-primary fill-current" />;
    return <Play className="h-5 w-5 text-muted-foreground" />;
  };
  
  const getStatusBadge = () => {
    if (!canAccess) return <Badge variant="secondary">Locked</Badge>;
    if (status === 'completed') return <Badge className="bg-success text-success-foreground">Completed</Badge>;
    if (status === 'in-progress') return <Badge>In Progress</Badge>;
    return <Badge variant="outline">Not Started</Badge>;
  };

  return (
    <Card className={`p-6 transition-all duration-200 hover:shadow-md border-l-4 ${
      status === 'completed' ? 'border-l-success bg-success/5' :
      status === 'in-progress' ? 'border-l-primary bg-primary/5' :
      !canAccess ? 'border-l-muted bg-muted/20' :
      'border-l-muted hover:border-l-primary'
    }`}>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {getStatusIcon()}
            <div>
              <h3 className={`text-lg font-semibold ${!canAccess ? 'text-muted-foreground' : 'text-foreground'}`}>
                {module.title}
              </h3>
              <div className="flex items-center gap-4 mt-1">
                {getStatusBadge()}
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{module.estimatedTime} min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className={`text-sm leading-relaxed ${!canAccess ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
          {module.description}
        </p>
        
        {quizScore && (
          <div className="flex items-center gap-2 p-3 bg-success/10 rounded-lg border border-success/20">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-success">Quiz Score: {quizScore}%</span>
          </div>
        )}
        
        <div className="pt-2">
          <Button 
            onClick={() => onModuleSelect(module.id)}
            disabled={!canAccess}
            className="w-full"
            variant={status === 'completed' ? 'outline' : 'default'}
          >
            {!canAccess ? 'Complete Previous Module' :
             status === 'completed' ? 'Review Module' :
             status === 'in-progress' ? 'Continue Learning' :
             'Start Learning'}
          </Button>
        </div>
      </div>
    </Card>
  );
};