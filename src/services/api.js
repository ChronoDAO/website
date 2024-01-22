import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export const fetchTabsFromAPI = async () => {
  try {
    const response = await axiosInstance.get('/api/game-tabs', {
      params: {
        populate: 'image, logo',
      },
    });

    const { data, meta } = response.data;

    if (data.length === 0) {
      console.warn('No tab data found.');
    }

    const tabsWithLogoUrl = data.map((tab) => {
      if (tab.logo && tab.logo.url) {
        tab.image = { url: tab.logo.url };
      }

      return tab;
    });

    return tabsWithLogoUrl;
  } catch (error) {
    console.error('Error fetching tabs:', error);
    throw error;
  }
};

export const fetchGameDetailsFromAPI = async (gameId) => {
  try {
    const response = await axiosInstance.get(`/api/games/${gameId}`, {
      params: {
        populate: 'image,logo',
      },
    });

    const gameDetails = response.data.data.attributes;

    if (gameDetails && !gameDetails.image && gameDetails.logo) {
      gameDetails.image = { url: gameDetails.logo.url };
    }

    if (gameDetails) {
      return gameDetails;
    } else {
      console.warn('No game details found.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching game details:', error);
    return null;
  }
};
