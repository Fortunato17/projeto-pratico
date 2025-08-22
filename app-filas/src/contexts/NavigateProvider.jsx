import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const NavigateContext = createContext();
export  function NavigateProvider({ children }) {
  const navigate = useNavigate();
  return (
    <NavigateContext.Provider value={{ navigate }}>
      {children}
    </NavigateContext.Provider>
  );
}
export function useNavigateGlobal() {
  const {navigate} = useContext(NavigateContext);
  return navigate;
}
