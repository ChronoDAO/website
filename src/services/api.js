import axios from 'axios';

const apiUrl = 'http://localhost:1337/api';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA1NDM5Mjc0LCJleHAiOjE3MDgwMzEyNzR9.tLkNrxRsUhZwvubaLRwjra1RI1p4UG8yWC2_BQtBJaE'; // Remplacez cela par votre propre token

// Créez une instance d'axios avec le token dans les en-têtes
export const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

// Fonction pour récupérer les onglets depuis l'API
export const fetchTabsFromAPI = async () => {
  try {
    const response = await axiosInstance.get('/game-tabs');
    console.log('Réponse complète des onglets:', response);

    const { data, meta } = response.data;
    console.log('Données des onglets:', data);
    console.log('Méta-données:', meta);

    if (data.length === 0) {
      console.warn('Aucune donnée d\'onglet trouvée.');
    }

    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des onglets:', error);
    throw error;
  }
};

// Fonction pour récupérer les détails d'un jeu depuis l'API
export const fetchGameDetailsFromAPI = async (gameTabId) => {
  try {
    const response = await axiosInstance.get(`/game-tabs/${gameTabId}`);
    const gameDetails = response.data.game;  // Assurez-vous que la structure de la réponse correspond à votre modèle de données
    return gameDetails;
  } catch (error) {
    console.error('Erreur lors de la récupération des détails du jeu par ID via la relation:', error);
    throw error;
  }
};
