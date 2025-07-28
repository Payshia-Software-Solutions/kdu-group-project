"use client";

import { useState } from "react";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { getAISuggestion } from "@/lib/actions";

type ContentSuggesterProps = {
  originalContent: string;
  context: string;
};

export function ContentSuggester({ originalContent, context }: ContentSuggesterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSuggest = async () => {
    setIsOpen(true);
    setIsLoading(true);
    setError("");
    setSuggestion("");
    
    const result = await getAISuggestion(originalContent, context);
    
    setIsLoading(false);
    if (result.success) {
      setSuggestion(result.suggestion || "No suggestion available.");
    } else {
      setError(result.error || "An unknown error occurred.");
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(suggestion);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleSuggest}
        className="absolute top-0 right-0 h-8 gap-1 text-accent-foreground/70 hover:text-accent-foreground hover:bg-accent/30"
      >
        <Sparkles className="h-4 w-4" />
        Suggest Copy
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-headline">
              <Sparkles className="text-primary" />
              AI Content Suggestion
            </DialogTitle>
            <DialogDescription>
              Here is an alternative version of the content, crafted by AI.
            </DialogDescription>
          </DialogHeader>
          <div className="my-4 p-4 border rounded-md min-h-[150px] bg-muted/50">
            {isLoading && (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            {error && <p className="text-destructive">{error}</p>}
            {suggestion && <p className="text-foreground">{suggestion}</p>}
          </div>
          <DialogFooter>
            {suggestion && (
                <Button onClick={handleCopy} variant="outline">
                    {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                    {copied ? 'Copied!' : 'Copy Text'}
                </Button>
            )}
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
