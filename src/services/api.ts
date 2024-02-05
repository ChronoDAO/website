/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;

export interface AboutSectionData {
  _id: number;
  title: string;
  subtitle: string;
  paragraphe1: string;
  paragraphe2: string;
  paragraphe3: string;
  logo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export interface ShortSectionData {
  _id: number;
  title: string;
  subtitle: string;
  paragraphe: string;
  logo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

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

    const { data } = response.data;

    if (data.length === 0) {
      console.warn('No tab data found.');
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tabsWithLogoUrl = data.map((tab: { logo: { url: any; }; image: { url: any; }; }) => {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchGameDetailsFromAPI = async (gameId: any) => {
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

export const fetchGameSection01Data = async () => {
  try {
    const response = await axiosInstance.get('/api/game-sections', {
      params: {
        populate: 'logo1,logo2,logo3,logo4',
      },
    });

    const sectionData = response.data && response.data.data && response.data.data[0];

    if (!sectionData) {
      console.warn('No data found for GameSection01.');
      return null;
    }

    return sectionData.attributes;
  } catch (error) {
    console.error('Error fetching GameSection01 data:', error);
    throw error;
  }
};


export const fetchAboutDaoData = async () => {
  try {
    const response = await axiosInstance.get('/api/about-daos', {
      params: {
        populate: 'logo',
      },
    });

    const aboutDaoData = response.data && response.data.data && response.data.data[0];

    if (!aboutDaoData) {
      console.warn('No data found for AboutDao.');
      return null;
    }

    return aboutDaoData.attributes;
  } catch (error) {
    console.error('Error fetching AboutDao data:', error);
    throw error;
  }
};

export const fetchTimelineData = async () => {
  try {
    const response = await axiosInstance.get('/api/timelines', {
      params: {
        populate: 'logo',
      },
    });

    console.log(response.data); // Déplacez le console.log ici

    const timelineData = response.data && response.data.data;

    if (!timelineData || timelineData.length === 0) {
      console.warn('No data found for Timeline.');
      return null;
    }

    return timelineData.map((data: { attributes: { text: any; logo: any; }; }) => ({
      text: data.attributes.text, // ou le nom du champ contenant le texte
      logo: data.attributes.logo,
    }));
  } catch (error) {
    console.error('Error fetching Timeline data:', error);
    throw error;
  }
};


export const fetchAboutSectionData = async () => {
  try {
    const response = await axiosInstance.get('/api/about-sections', {
      params: {
        populate: 'logo',
      },
    });

    const aboutSectionData = response.data.data;

    if (!aboutSectionData || aboutSectionData.length === 0) {
      console.warn('No data found for AboutSection.');
      return null;
    }

    return aboutSectionData.map((data: {
      _id: any; attributes: AboutSectionData 
}) => ({
      id: data._id,
      title: data.attributes.title,
      subtitle: data.attributes.subtitle,
      paragraphe1: data.attributes.paragraphe1,
      paragraphe2: data.attributes.paragraphe2,
      paragraphe3: data.attributes.paragraphe3,
      logo: data.attributes.logo,
    }));
  } catch (error) {
    console.error('Error fetching AboutSection data:', error);
    throw error;
  }
};

export const fetchShortSectionData = async () => {
  try {
    const response = await axiosInstance.get('/api/about-shortsections', {
      params: {
        populate: 'logo',
      },
    });

    const shortSectionData = response.data.data;

    if (!shortSectionData || shortSectionData.length === 0) {
      console.warn('No data found for ShortSection.');
      return null;
    }

    return shortSectionData.map((data: {
      _id: any; attributes: ShortSectionData 
}) => ({
      id: data._id,
      title: data.attributes.title,
      subtitle: data.attributes.subtitle,
      paragraphe: data.attributes.paragraphe,
      logo: data.attributes.logo,
    }));
  } catch (error) {
    console.error('Error fetching ShortSection data:', error);
    throw error;
  }
};

export const fetchHomeBannerData = async () => {
  try {
    const response = await axiosInstance.get('/api/home-banners');
    const homeBannerData = response.data.data;

    if (!homeBannerData || homeBannerData.length === 0) {
      console.warn('No data found for HomeBanner.');
      return null;
    }

    return homeBannerData[0].attributes;
  } catch (error) {
    console.error('Error fetching HomeBanner data:', error);
    throw error;
  }
};

export const fetchTextScrollWords = async () => {
  try {
    const response = await axiosInstance.get('/api/text-scrolls');
    const textScrollWords = response.data.data;

    if (!textScrollWords || textScrollWords.length === 0) {
      console.warn('No data found for TextScroll words.');
      return null;
    }

    return textScrollWords.map((wordData: { _id: any; attributes: { word: any; }; }) => ({
      id: wordData._id,
      word: wordData.attributes.word,
    }));
  } catch (error) {
    console.error('Error fetching TextScroll words data:', error);
    throw error;
  }
};