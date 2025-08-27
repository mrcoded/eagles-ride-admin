import { createContext } from "react";
import { AuthContextType } from "@/types/context";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
