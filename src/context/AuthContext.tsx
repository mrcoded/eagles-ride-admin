import { createContext } from "react";
import { AuthContextProps } from "@/types/context";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;
