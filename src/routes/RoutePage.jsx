import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import Cadastro from "../pages/Cadastro";

export default function RoutePage() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" index element={<HomePage/>} />
            <Route path="/produtos" element={<ProductListingPage/>} />
            <Route path="/pagina3" element={<ProductViewPage/>} />
            <Route path="/cadastro" element={<Cadastro/>} />

        </Routes>
        </BrowserRouter>
        </>
    );
}