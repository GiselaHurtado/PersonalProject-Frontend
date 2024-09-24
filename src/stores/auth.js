import { defineStore } from 'pinia';
import api from './api.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    setUser(userData) {
      this.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      api.defaults.headers.common['Authorization'] = `Basic ${btoa(`${userData.username}:${userData.password}`)}`;
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      delete api.defaults.headers.common['Authorization'];
    },
    async login(username, password) {
      try {
        const credentials = btoa(`${username}:${password}`);
        const response = await api.post('/login', {}, {
          headers: { 'Authorization': `Basic ${credentials}` }
        });
        this.setUser({ username, password, ...response.data });
        return response.data;
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },

    initializeAuth() {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
        const { username, password } = this.user;
        api.defaults.headers.common['Authorization'] = `Basic ${btoa(`${username}:${password}`)}`;
      }
    }
  },
});
