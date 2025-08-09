import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/cliente/HomePage";
import FaleConnoscoPage from "./pages/cliente/FaleConnoscoPage"
import NovaFilaPage from "./pages/cliente/NovaFilaPage";
import  TestePage  from "./pages/cliente/TestePage";
export default function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<FaleConnoscoPage/>}/>
        </Routes>
    )
}