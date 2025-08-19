import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Routes";
import NotificacoesProvider from "./components/NotificacoesProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
      <NotificacoesProvider />
    </>
  );
}

export default App;
