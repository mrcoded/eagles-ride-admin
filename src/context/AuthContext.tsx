import { createContext } from "react";
import { AuthContextProps } from "@/context/types";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;
