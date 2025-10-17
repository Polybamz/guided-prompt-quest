import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Coffee, Lock, Sparkles } from "lucide-react";

interface PremiumDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUnlock: () => void;
}

export const PremiumDialog = ({ open, onOpenChange, onUnlock }: PremiumDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">Unlock Premium Content</DialogTitle>
          <DialogDescription className="text-center">
            Support the developer and get access to advanced modules 5-8
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              What You'll Get:
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Advanced Ethics & Bias module</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Multi-Step Prompting strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Real-World Applications across industries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Practical AI Application building</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Video lessons for all modules</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">$5</div>
            <div className="text-sm text-muted-foreground">One-time payment</div>
          </div>
        </div>

        <DialogFooter className="sm:justify-center">
          <Button onClick={onUnlock} className="w-full gap-2" size="lg">
            <Coffee className="h-5 w-5" />
            Buy Developer a Coffee & Unlock
          </Button>
        </DialogFooter>
        
        <p className="text-xs text-center text-muted-foreground">
          Thank you for supporting independent education! 🙏
        </p>
      </DialogContent>
    </Dialog>
  );
};
