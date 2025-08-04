import { createContext } from "react";

export const store = createContext();

const ContextApp = ({ children }) => {
  return <store.Provider value={{}}>{children}</store.Provider>;
};

export default ContextApp;
