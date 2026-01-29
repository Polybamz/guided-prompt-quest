import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";


interface CodeDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    code: string

}

const CodeDialog = ({ open, onOpenChange, code }: CodeDialogProps) => {
    const handleCopyCode = (code: string) => {
        try {
            navigator.clipboard.writeText(code)
            toast({
                title: 'Copy',
                description: `Successfully copied: ${code}`,
            })
            onOpenChange(false)
        } catch (e) {
            toast({
                title: 'Error',
                description: e,
                variant: 'destructive'
            })
        }
    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        Your Access Code
                    </DialogTitle>
                    <DialogDescription>
                        keep this code save. Code is valid for 14 days
                    </DialogDescription>
                </DialogHeader>
                <div className="flex gap-2">
                    <Input value={code} disabled /> <Button onClick={() => handleCopyCode(code)}><Copy /></Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CodeDialog;