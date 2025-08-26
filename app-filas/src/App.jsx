import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Routes";
//PROVIDERS
import AppProvider from "./contexts/AppProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <PageRoutes />
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
