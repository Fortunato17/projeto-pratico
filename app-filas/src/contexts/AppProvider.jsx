//Contexts
import { FilasProvider } from "./FilasProvider";
import { NavigateProvider } from "./NavigateProvider";
import NotificacoesProvider from "./NotificacoesProvider";

export default function AppProvider({ children }) {
  return (
    <>
      <NotificacoesProvider>
        <FilasProvider>
          <NavigateProvider>{children}</NavigateProvider>
        </FilasProvider>
      </NotificacoesProvider>
    </>
  );
}
