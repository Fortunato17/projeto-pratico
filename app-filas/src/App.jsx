import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Routes";
//PROVIDERS
import NotificacoesProvider from "./components/NotificacoesProvider";
import {NavigateProvider} from "./contexts/NavigateProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigateProvider>
          <PageRoutes />
        </NavigateProvider>
      </BrowserRouter>
      <NotificacoesProvider />
    </>
  );
}

export default App;
