import { Loader2 } from "lucide-react";

export function LoadingSpinner({ className }: { className: string }) {
  return (
    <Loader2
      className={`flex place-self-center animate-spin text-primary ${className}`}
    />
  );
}
