import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profil from "../pages/profil/profil";
import Login from "../pages/login/login";
import NotFound from "../pages/error/404";

const TpDesignSystem = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="TP_Design_System/" element={<Login/>}/>
            <Route path="TP_Design_System/profil" element={<Profil/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default TpDesignSystem;