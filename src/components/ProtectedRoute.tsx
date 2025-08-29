import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
