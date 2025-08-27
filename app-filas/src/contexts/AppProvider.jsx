//Contexts
import { FilasProvider } from "./FilasProvider";
import { NavigateProvider } from "./NavigateProvider";
import NotificacoesProvider from "./NotificacoesProvider";

export default function AppProvider({ children }) {
  return (
    <>
      <NotificacoesProvider>
        <NavigateProvider>
          <FilasProvider>{children}</FilasProvider>
        </NavigateProvider>
      </NotificacoesProvider>
    </>
  );
}
