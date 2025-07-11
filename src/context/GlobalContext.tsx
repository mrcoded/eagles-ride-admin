import { GlobalContextProps } from "@/types";
import { createContext, useContext } from "react";

const GlobalContext = createContext<GlobalContextProps | null>(null);

export default GlobalContext;

export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
