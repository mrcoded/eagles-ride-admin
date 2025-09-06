import { Loader2 } from "lucide-react";

export function LoadingSpinner({ className }: { className: string }) {
  return (
    <Loader2
      className={`flex flex-1 place-self-center animate-spin ${className}`}
    />
  );
}
