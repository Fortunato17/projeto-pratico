import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/cliente/HomePage";
import FaleConnoscoPage from "./pages/cliente/FaleConnoscoPage";
import NovaFilaPage from "./pages/cliente/NovaFilaPage";
import FilasPage from "./pages/cliente/FilasPage";
import ConsultarPage from "./pages/cliente/ConsultaPage";

export default function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fale-connosco" element={<FaleConnoscoPage />} />
            <Route path="/nova-fila" element={<NovaFilaPage />} />
            <Route path="/filas" element={<FilasPage />} />
            <Route path="/consultar" element={<ConsultarPage />} />
        </Routes>
    );
}
