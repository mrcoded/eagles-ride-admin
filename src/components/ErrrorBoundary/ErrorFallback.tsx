import { ErrorFallbackProps } from "@/types";

export const ErrorFallback = ({ reset }: ErrorFallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50">
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        System Malfunction
      </h2>
      <p className="text-slate-700 mb-6">
        Oops! Something went wrong. We have been notified.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
};
