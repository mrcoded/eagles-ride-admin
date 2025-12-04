import { createContext } from "react";
import { GlobalContextProps } from "./types";

const GlobalContext = createContext<GlobalContextProps | null>(null);

export default GlobalContext;
