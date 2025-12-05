import { api } from './baseApi';

/**
 * Единый API клиент со всеми методами для работы с бэкендом
 */
export const apiClient = {
  // Announcements
  getAnnouncements: async () => {
    const res = await api.get('/announcements?populate=*');
    return res.data.data;
  },

  // Documents
  getDocuments: async () => {
    const res = await api.get('/dokuments?populate=*');
    return res.data.data;
  },
  getSafetyDocuments: async () => {
    const res = await api.get('/safety-docs?populate=*');
    return res.data.data;
  },

  // Entertainment Programs
  getEntertainmentPrice: async () => {
    const res = await api.get('/price-list-of-services?populate=*');
    return res.data.data;
  },
  getEntertainmentOffer: async () => {
    const res = await api.get('/offers-of-services?populate=*');
    return res.data.data;
  },

  // Gallery
  getInfrastructureGallery: async () => {
    const res = await api.get(
      '/infrastruktura-galereyas/?populate=*&sort=createdAt:asc',
    );
    return res.data.data;
  },
  getSafetyGallery: async () => {
    const res = await api.get('/safety-photos/?populate=*&sort=createdAt:asc');
    return res.data.data;
  },

  // Safety Text
  getSafetyText: async () => {
    const res = await api.get('/bezopasnost-teksts?populate=*');
    return res.data.data;
  },

  // History
  getHistoryPhotos: async () => {
    const res = await api.get('/history-photos?populate=*');
    return res.data.data;
  },
  getHistoryText: async () => {
    const res = await api.get('/istoriya-teksts?populate=*');
    return res.data.data;
  },

  // Our Projects
  getProYouthPosts: async () => {
    const res = await api.get('/vzroslaya-smena-pro-yunost-posts?populate=*');
    return res.data.data;
  },
  getMaevkaPosts: async () => {
    const res = await api.get('/maevka?populate=*');
    return res.data.data;
  },
  getOurProjects: async () => {
    const res = await api.get('/our-projects?populate=*');
    return res.data.data;
  },

  // Persons
  getTeamMembers: async () => {
    const res = await api.get('/team-members?populate=*&sort=createdAt:asc');
    return res.data.data;
  },
  getTeachers: async () => {
    const res = await api.get('/teachers?populate=*&sort=createdAt:asc');
    return res.data.data;
  },

  // Route
  getRoute: async () => {
    const res = await api.get('/contacts-photos?populate=*');
    return res.data.data;
  },

  // Service
  getServicePrices: async () => {
    const res = await api.get('/service-prices?populate=*');
    return res.data.data;
  },

  // Technical Base
  getTechnicalBaseText: async () => {
    const res = await api.get('/technical-base-texts?populate=*');
    return res.data.data;
  },
  getTechnicalBasePhoto: async () => {
    const res = await api.get('/materialno-tehnicheskaya-baza-photos?populate=*');
    return res.data.data;
  },

  // Your Projects
  getYourProjectsText: async () => {
    const res = await api.get('/your-project-texts?populate=*');
    return res.data.data;
  },
  getYourProjectsPhoto: async () => {
    const res = await api.get('/your-project-photos?populate=*');
    return res.data.data;
  },
};

