import { createContext } from "react";
import { GlobalContextProps } from "@/types/context";

const GlobalContext = createContext<GlobalContextProps | null>(null);

export default GlobalContext;
