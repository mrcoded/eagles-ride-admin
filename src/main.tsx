import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import QueryProvider from "./providers/QueryProvider.tsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import GlobalProvider from "./providers/GlobalProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <GlobalProvider>
        <BrowserRouter>
          <Toaster position="top-center" reverseOrder={false} />
          <App />
        </BrowserRouter>
      </GlobalProvider>
    </QueryProvider>
  </StrictMode>
);
