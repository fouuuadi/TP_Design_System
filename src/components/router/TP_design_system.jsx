import {Route, Routes, BrowserRouter } from "react-router-dom";
import Profil from "../pages/profil/profil";
import Login from "../pages/login/login";
import Forget from "../pages/forgetpassword/forget";
import NotFound from "../pages/error/404";

const TpDesignSystem = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="TP_Design_System/" element={<Login/>}/>
            <Route path="TP_Design_System/profil" element={<Profil/>}/>
            <Route path="TP_Design_System/forget" element={<Forget/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default TpDesignSystem;