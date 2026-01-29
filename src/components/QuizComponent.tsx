import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, ArrowLeft, Trophy, BookOpen, ArrowRight } from "lucide-react";
import { Quiz, UserProgress, Module } from "@/types/learning";
import { NetworkStatus } from "./ui/connection";

interface QuizComponentProps {
  quiz: Quiz;
  moduleId: string;
  moduleTitle: string;
  module: Module;
  progress: UserProgress;
  onBack: () => void;
  onComplete: (score: number, moveToNext?: boolean) => void;
  handlePremiumClick: (p0: boolean)=>void;
}

export const QuizComponent = ({ quiz, moduleId, moduleTitle, progress, onBack, onComplete, module,  handlePremiumClick }: QuizComponentProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
   const isPremiumLocked = module.isPremium && !progress.hasPremiumAccess;
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz complete - calculate score
      const correctAnswers = quiz.questions.filter((question, index) => 
        selectedAnswers[index] === question.correctAnswer
      ).length;
      
      const score = Math.round((correctAnswers / totalQuestions) * 100);
      setQuizComplete(true);
      setShowResults(true);
      onComplete(score);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const canProceed = selectedAnswers[currentQuestionIndex] !== undefined;

  if (showResults) {
    const correctAnswers = quiz.questions.filter((question, index) => 
      selectedAnswers[index] === question.correctAnswer
    ).length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const passed = score >= 70;

    return (
      <div className="min-h-screen bg-background">
            <NetworkStatus/>
        
        <div className="max-w-3xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <Button variant="outline" size="sm" onClick={onBack} className="gap-2 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Module
            </Button>
            <h1 className="text-2xl font-bold text-foreground">Quiz Results</h1>
            <p className="text-muted-foreground">{moduleTitle}</p>
          </div>

          {/* Results Summary */}
          <Card className="p-8 text-center mb-6">
            <div className="space-y-6">
              <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center ${
                passed ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
              }`}>
                {passed ? <Trophy className="h-10 w-10" /> : <BookOpen className="h-10 w-10" />}
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">{score}%</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  You scored {correctAnswers} out of {totalQuestions} questions correctly
                </p>
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  passed ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                }`}>
                  {passed ? '🎉 Quiz Passed!' : '📚 Keep Learning!'}
                </div>
              </div>

              {passed ? (
                <p className="text-muted-foreground">
                  Great job! You've successfully completed this module. The next module is now unlocked.
                </p>
              ) : (
                <p className="text-muted-foreground">
                  You need 70% or higher to pass. Review the module content and try again.
                </p>
              )}
            </div>
          </Card>

          {/* Detailed Results */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Question Review</h3>
            <div className="space-y-4">
              {quiz.questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className={`p-4 rounded-lg border ${
                    isCorrect ? 'bg-success/5 border-success/20' : 'bg-destructive/5 border-destructive/20'
                  }`}>
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-foreground mb-2">
                          Question {index + 1}: {question.question}
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <span className="font-medium">Your answer:</span> {question.options[userAnswer]}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-muted-foreground mb-2">
                            <span className="font-medium">Correct answer:</span> {question.options[question.correctAnswer]}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground italic">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Action Buttons */}
          {!passed && <Button onClick={onBack} className="gap-2">
                Retake Quiz
                {/* <ArrowRight className="h-4 w-4" /> */}
              </Button> }
          {passed && (
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" onClick={onBack} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
              {!isPremiumLocked ?
               <Button onClick={()=>{handlePremiumClick(true)}}>
                Unlook All Module
                </Button> 
                : <Button onClick={() => onComplete(score, true)} className="gap-2">
                Next Module
                <ArrowRight className="h-4 w-4" />
              </Button>}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="outline" size="sm" onClick={onBack} className="gap-2 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Module
          </Button>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Module Quiz</h1>
            <p className="text-muted-foreground">{moduleTitle}</p>
            <div className="flex items-center gap-4">
              <Progress value={progressPercentage} className="flex-1 h-2" />
              <span className="text-sm text-muted-foreground">
                {currentQuestionIndex + 1} of {totalQuestions}
              </span>
            </div>
          </div>
        </div>

        {/* Question */}
        <Card className="p-8 mb-6">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Question {currentQuestionIndex + 1}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-foreground leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>

            <RadioGroup 
              value={selectedAnswers[currentQuestionIndex]?.toString() || ""} 
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
              className="space-y-4"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer text-foreground leading-relaxed"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={handlePrevious} 
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          <Button 
            onClick={handleNext} 
            disabled={!canProceed}
            className="gap-2"
          >
            {currentQuestionIndex === totalQuestions - 1 ? (
              <>
                <Trophy className="h-4 w-4" />
                Complete Quiz
              </>
            ) : (
              'Next Question'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};