export interface Module {
  id: string;
  title: string;
  description: string;
  content: string;
  quiz: Quiz;
  estimatedTime: number; // in minutes
  videoUrl?: string;
  isPremium?: boolean;
}

export interface Quiz {
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  completedModules: string[];
  currentModule: string;
  quizScores: Record<string, number>;
  lastAccessed: string;
  hasPremiumAccess?: boolean;
}

export interface LearningState {
  modules: Module[];
  progress: UserProgress;
  currentView: 'dashboard' | 'module' | 'quiz';
  selectedModule: string | null;
}