import { useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const Logout = () => {
    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:5000/user/logout', { withCredentials: true });
            Cookies.remove('token');
            window.location.href = '/';
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error);
        }
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return null;
};

export default Logout;

