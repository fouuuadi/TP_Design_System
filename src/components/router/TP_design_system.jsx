import {Route, Routes, BrowserRouter } from "react-router-dom";
import Profil from "../pages/profil/profil";
import Login from "../pages/login/login";
import Forget from "../pages/forgetpassword/forget";
import NotFound from "../pages/error/404";

const TpDesignSystem = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/profil" element={<Profil/>}/>
            <Route path="/forget" element={<Forget/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default TpDesignSystem;