import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/cliente/HomePage";
import FaleConnoscoPage from "./pages/cliente/FaleConnoscoPage"
export default function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<FaleConnoscoPage />}/>
        </Routes>
    )
}