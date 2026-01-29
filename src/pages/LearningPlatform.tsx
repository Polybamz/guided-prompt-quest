import { useState, useEffect } from "react";
import { ModuleCard } from "@/components/ModuleCard";
import { ModuleContent } from "@/components/ModuleContent";
import { QuizComponent } from "@/components/QuizComponent";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Navigation } from "@/components/Navigation";
import { PremiumDialog } from "@/components/PremiumDialog";
import { modules } from "@/data/modules";
import { UserProgress, LearningState } from "@/types/learning";
import { loadProgress, saveProgress, calculateOverallProgress, getNextModule } from "@/utils/progress";
import { toast } from "@/hooks/use-toast";
import { Stars } from "@/components/ui/stars";
import { useSearchParams } from "react-router-dom";
import { NetworkStatus } from "@/components/ui/connection";
import CodeDialog from "@/components/CodeDialog";

export const LearningPlatform = () => {
  const [searchParams] = useSearchParams()
  const access_code = searchParams.get('code')
  const [upgrading, setUpgrading] = useState<boolean>(false)
  const [openCD, setOpenCD] = useState<boolean>(false)
  const [learningState, setLearningState] = useState<LearningState>({
    modules,
    progress: loadProgress(),
    currentView: 'dashboard',
    selectedModule: null
  });
  const [showPremiumDialog, setShowPremiumDialog] = useState(false);
 
  const overallProgress = calculateOverallProgress(learningState.progress, modules.length);

  // Check for payment success on mount
   
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentStatus = params.get('payment');

    if (access_code) {
      setOpenCD(true)
      // const updatedProgress = {
      //   ...learningState.progress,
      //   hasPremiumAccess: true
      // };
      // updateProgress(updatedProgress);
      // toast({
      //   title: "Premium Unlocked! 🎉",
      //   description: "You now have access to all advanced modules. Thank you for your support!",
      // });
      // // Clean up URL
      // window.history.replaceState({}, '', window.location.pathname);
    } else if (paymentStatus === 'cancelled') {
      toast({
        title: "Payment Cancelled",
        description: "You can unlock premium content anytime from the dashboard.",
        variant: "destructive"
      });
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

 

  const updateProgress = (newProgress: UserProgress) => {
    saveProgress(newProgress);
    setLearningState(prev => ({
      ...prev,
      progress: newProgress
    }));
  };

  const cleanUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('code');
    window.history.replaceState({}, '', url.toString());
  }
 useEffect(() => {
    if (!access_code) return;
    validateAccessCode(access_code);
  }, [access_code]);

  const validateAccessCode = async (code: string) => {
    setUpgrading(true);
    try {
      const res = await fetch(
        `https://payment-api-njxi.onrender.com/api/payment/validate-code/${code}`
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Invalid access code");

      updateProgress({
        ...learningState.progress,
        hasPremiumAccess: true,
      });

      toast({
        title: "Premium Activated 🎉",
        description: "Access code verified successfully.",
      });

      cleanUrl();
    } catch (err: any) {
      toast({
        title: "Verification Failed",
        description: err.message || "Unable to validate access code",
        variant: "destructive",
      });
      cleanUrl()
    } finally {
      setUpgrading(false);
    }
  };

  

  const handlePremiumUnlock = async (email:string) => {
    setUpgrading(true)
    try {
      const response = await fetch('https://payment-api-njxi.onrender.com/api/payment/checkout', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email  }),

      })  
      if (!response.ok) throw 'Error generating checkout';
      const data = await response.json()
      setUpgrading(false)
      if (data?.checkout_url) {
        // Open Stripe checkout in a new tab
        window.open(data.checkout_url, '_blank');
        setShowPremiumDialog(false);
      }
    } catch (error) {
      setUpgrading(false)
      toast({
        title: "Payment Error",
        description: "Failed to create payment session. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handlePremiumClick = () => {
    setShowPremiumDialog(true);
  };

  const handleModuleSelect = (moduleId: string) => {
    const updatedProgress = {
      ...learningState.progress,
      currentModule: moduleId
    };
    updateProgress(updatedProgress);

    setLearningState(prev => ({
      ...prev,
      currentView: 'module',
      selectedModule: moduleId
    }));
  };
  const handleStartQuiz = () => {
    setLearningState(prev => ({
      ...prev,
      currentView: 'quiz'
    }));
  };

  const handleQuizComplete = (score: number, moveToNext: boolean = false) => {
    const currentModuleId = learningState.selectedModule!;
    const nextModuleId = getNextModule(currentModuleId, modules);

    const updatedProgress = {
      ...learningState.progress,
      quizScores: {
        ...learningState.progress.quizScores,
        [currentModuleId]: score
      },
      completedModules: score >= 70 && !learningState.progress.completedModules.includes(currentModuleId)
        ? [...learningState.progress.completedModules, currentModuleId]
        : learningState.progress.completedModules,
      currentModule: nextModuleId || currentModuleId
    };

    updateProgress(updatedProgress);

    if (moveToNext && score >= 70 && nextModuleId) {
      setLearningState(prev => ({
        ...prev,
        currentView: 'module',
        selectedModule: nextModuleId
      }));
    }

    if (score >= 70) {
      toast({
        title: "Module Completed! 🎉",
        description: `You scored ${score}% and passed the quiz. ${nextModuleId ? 'The next module is now unlocked!' : 'You have completed all modules!'}`,
      });
    } else {
      toast({
        title: "Keep Learning! 📚",
        description: `You scored ${score}%. Review the content and try again to pass with 70% or higher.`,
        variant: "destructive"
      });
    }
  };

  const handleBackToDashboard = () => {
    setLearningState(prev => ({
      ...prev,
      currentView: 'dashboard',
      selectedModule: null
    }));
  };

  const handleBackToModule = () => {
    setLearningState(prev => ({
      ...prev,
      currentView: 'module'
    }));
  };

  if (learningState.currentView === 'quiz' && learningState.selectedModule) {
    const module = modules.find(m => m.id === learningState.selectedModule);
    if (module) {
      return (<>
        <QuizComponent
          quiz={module.quiz}
          moduleId={module.id}
          moduleTitle={module.title}
          progress={learningState.progress}
          onBack={handleBackToModule}
          onComplete={handleQuizComplete}
          module={module}
          handlePremiumClick={setShowPremiumDialog}
        />
         {/* Premium Dialog */}
      <PremiumDialog
        open={showPremiumDialog}
        onOpenChange={setShowPremiumDialog}
        onUnlock={handlePremiumUnlock}
        onCheckCode={validateAccessCode}
        loading={upgrading}
      />
        </>
      );
    }
  }

  if (learningState.currentView === 'module' && learningState.selectedModule) {
    const module = modules.find(m => m.id === learningState.selectedModule);
    if (module) {
      return (
        <ModuleContent
          module={module}
          progress={learningState.progress}
          totalModules={modules.length}
          onBack={handleBackToDashboard}
          onStartQuiz={handleStartQuiz}
        />
      );
    }
  }
// localStorage.clear()
const sum: number = Object.values(modules).reduce((acc,current)=> acc + current.estimatedTime, 0)
  return (
    <div className="min-h-screen bg-background">
      <NetworkStatus />
      {/* Navigation */}
      <Navigation
        completedModules={learningState.progress.completedModules.length}
        totalModules={modules.length}
        overallProgress={overallProgress}
        hours={`${Math.floor(sum/60)} hours, ${sum%60} minutes`}
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-muted to-accent dark:text-white text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Prompt Engineering Master Class</h1>
            <p className="text-xl text-primary-foreground/90 dark:text-gray-300 max-w-3xl mx-auto">
              Master the art and science of prompt engineering. Learn to craft effective prompts,
              understand AI language models, and build real-world applications.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">{modules.length}</div>
                <div className="text-sm text-primary-foreground/80 dark:text-white">Modules</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{learningState.progress.completedModules.length}</div>
                <div className="text-sm text-primary-foreground/80 dark:text-white ">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{overallProgress}%</div>
                <div className="text-sm text-primary-foreground/80 dark:text-white">Progress</div>
              </div>
            </div>
          </div>
          <Stars />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Progress */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ProgressIndicator
                progress={learningState.progress}
                totalModules={modules.length}
                overallProgress={overallProgress}
              />
            </div>
          </div>
          {/* <div className="sticky top-8 p-16 bg-red-400"></div> */}
          {/* Main Content - Modules */}
          <div className="lg:col-span-3">
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold text-foreground">Course Modules</h2>
              <p className="text-muted-foreground ">
                Complete each module in order and take the quiz to unlock the next one.
              </p>
            </div>

            <div className="grid gap-6">
              {modules.map((module, index) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  progress={learningState.progress}
                  allModules={modules}
                  onModuleSelect={handleModuleSelect}
                  onPremiumClick={handlePremiumClick}
                  index={index}
                />
              ))}
            </div>

            {/* Course Completion */}
            {learningState.progress.completedModules.length === modules.length && (
              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-success/10 to-success/5 border border-success/20 rounded-xl p-8">
                  <div className="text-6xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-success mb-2">Congratulations!</h3>
                  <p className="text-muted-foreground mb-4">
                    You have successfully completed the Prompt Engineering Master Class!
                  </p>
                  <div className="text-sm text-muted-foreground">
                    You are now ready to apply your prompt engineering skills in real-world scenarios.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Premium Dialog */}
      <PremiumDialog
        open={showPremiumDialog}
        onOpenChange={setShowPremiumDialog}
        onUnlock={handlePremiumUnlock}
        onCheckCode={validateAccessCode}
        loading={upgrading}
      />
      <CodeDialog
        onOpenChange={setOpenCD}
        open={openCD}
        code={access_code}
      />
    </div>
  );
};