import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isLoading, isLoggedIn } = useAuthContext();

  if (isLoading) {
    return <></>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (isLoggedIn) {
    return <>{children}</>;
  }
}
