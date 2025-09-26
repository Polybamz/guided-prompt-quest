import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Play } from "lucide-react";
import { UserProgress } from "@/types/learning";
import { getModuleProgress } from "@/utils/progress";

interface ProgressIndicatorProps {
  progress: UserProgress;
  totalModules: number;
  overallProgress: number;
}

export const ProgressIndicator = ({ progress, totalModules, overallProgress }: ProgressIndicatorProps) => {
  return (
    <div className="bg-card rounded-xl p-6 border shadow-sm">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Your Progress</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Overall Completion</span>
              <span className="font-medium text-primary">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>
        </div>
        
        <div className="pt-2 border-t">
          <p className="text-sm text-muted-foreground mb-3">Module Status</p>
          <div className="space-y-2">
            {Array.from({ length: totalModules }, (_, i) => {
              const moduleId = `module-${i + 1}`;
              const status = getModuleProgress(moduleId, progress);
              
              return (
                <div key={moduleId} className="flex items-center gap-3">
                  {status === 'completed' && (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  )}
                  {status === 'in-progress' && (
                    <Play className="h-5 w-5 text-primary fill-current" />
                  )}
                  {status === 'not-started' && (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                  <span className={`text-sm ${
                    status === 'completed' ? 'text-success font-medium' :
                    status === 'in-progress' ? 'text-primary font-medium' :
                    'text-muted-foreground'
                  }`}>
                    Module {i + 1}
                  </span>
                  {progress.quizScores[moduleId] && (
                    <span className="text-xs text-muted-foreground ml-auto">
                      Score: {progress.quizScores[moduleId]}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {progress.lastAccessed && (
          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground">
              Last accessed: {new Date(progress.lastAccessed).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};