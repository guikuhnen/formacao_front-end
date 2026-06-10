import { createContext } from "react";

export const Context = createContext();

const HookUseContext = ({ children }) => {
  const contextValue = "Valor do contexto 123";

  return (
    <Context.Provider value={{ contextValue }}>{children}</Context.Provider>
  );
};

export default HookUseContext;
