import { useEffect } from "react";
//import Cookies from "js-cookie";
//import axios from "axios";
//bug du logout à corriger
const Logout = () => {
    const handleLogout = async () => {
    //     const token = localStorage.getItem('token');
    //             const config = {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             };
    //     try {
    //         await axios.get(`${process.env.REACT_APP_API_URL}user/logout`, {
    //         withCredentials: true,
    //     },config);
    //     //Cookies.remove("token");
    //     localStorage.remove(token);
    //     window.location.href = "/";
    // } catch (error) {
    //     console.error("Erreur lors de la déconnexion :", error);
    // }
    localStorage.removeItem('token');
    window.location= '/';
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return null;
};

export default Logout;
