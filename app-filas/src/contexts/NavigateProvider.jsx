//Hooks
import { createContext, useContext } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const NavigateContext = createContext();
export function NavigateProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  //Usamos query strings para pegar o ticket da URL
  const [searchParams] = useSearchParams();
  return (
    <NavigateContext.Provider value={{ navigate, location, searchParams }}>
      {children}
    </NavigateContext.Provider>
  );
}

export const useNavigateGlobal = () => useContext(NavigateContext);
