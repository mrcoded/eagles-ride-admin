import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

import AuthProvider from "./providers/AuthProvider.tsx";
import QueryProvider from "./providers/QueryProvider.tsx";
import GlobalProvider from "./providers/GlobalProvider.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { ErrorBoundary, ErrorFallback } from "@/components/ErrrorBoundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <ErrorBoundary fallback={(reset) => <ErrorFallback reset={reset} />}>
        <BrowserRouter>
          <AuthProvider>
            <ThemeProvider>
              <GlobalProvider>
                <Toaster position="top-center" reverseOrder={false} />
                <App />
              </GlobalProvider>
            </ThemeProvider>
          </AuthProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </QueryProvider>
  </StrictMode>
);
