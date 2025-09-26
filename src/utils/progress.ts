import { UserProgress } from "@/types/learning";

const STORAGE_KEY = 'prompt-engineering-progress';

export const loadProgress = (): UserProgress => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Error loading progress:', error);
  }
  
  return {
    completedModules: [],
    currentModule: 'module-1',
    quizScores: {},
    lastAccessed: new Date().toISOString()
  };
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    progress.lastAccessed = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const calculateOverallProgress = (progress: UserProgress, totalModules: number): number => {
  return Math.round((progress.completedModules.length / totalModules) * 100);
};

export const getModuleProgress = (moduleId: string, progress: UserProgress): 'not-started' | 'in-progress' | 'completed' => {
  if (progress.completedModules.includes(moduleId)) {
    return 'completed';
  }
  if (progress.currentModule === moduleId) {
    return 'in-progress'; 
  }
  return 'not-started';
};

export const canAccessModule = (moduleId: string, progress: UserProgress, modules: any[]): boolean => {
  const moduleIndex = modules.findIndex(m => m.id === moduleId);
  if (moduleIndex === 0) return true; // First module always accessible
  
  const previousModule = modules[moduleIndex - 1];
  return progress.completedModules.includes(previousModule.id);
};

export const getNextModule = (currentModuleId: string, modules: any[]): string | null => {
  const currentIndex = modules.findIndex(m => m.id === currentModuleId);
  if (currentIndex < modules.length - 1) {
    return modules[currentIndex + 1].id;
  }
  return null;
};