import axios from 'axios';

const API_URL = 'http://localhost:5000';

const authService = {
  isAuthenticated: async () => {
    try {
      const response = await axios.get(`${API_URL}/authenticated`, { withCredentials: true });
      return response.data.authenticated;
    } catch (error) {
      console.error('Erreur de vérification de l\'authentification :', error);
      return false;
    }
  }
};

export default authService;
