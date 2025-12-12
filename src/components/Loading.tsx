import { Loader2 } from "lucide-react";

export function LoadingSpinner({ className }: { className: string }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2
        className={`flex place-self-center animate-spin text-primary ${className}`}
      />
    </div>
  );
}
