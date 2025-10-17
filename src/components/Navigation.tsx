import { Progress } from "@/components/ui/progress";
import { BookOpen, Trophy, User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavigationProps {
  completedModules: number;
  totalModules: number;
  overallProgress: number;
}

export const Navigation = ({ completedModules, totalModules, overallProgress }: NavigationProps) => {
  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Prompt Engineering</h1>
              <p className="text-sm text-muted-foreground">Master Class</p>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  {completedModules}/{totalModules} Completed
                </span>
              </div>
              <div className="flex items-center gap-2 min-w-[120px]">
                <Progress value={overallProgress} className="flex-1 h-2" />
                <span className="text-muted-foreground font-medium">
                  {overallProgress}%
                </span>
              </div>
            </div>

            {/* Theme Toggle & User Avatar */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <div className="bg-primary/10 p-2 rounded-full">
                <User className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};