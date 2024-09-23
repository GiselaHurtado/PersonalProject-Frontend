import { defineStore } from 'pinia';
import axios from 'axios';

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
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      delete axios.defaults.headers.common['Authorization'];
    },
    initializeAuth() {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        this.user = userData;
        const encodedCredentials = btoa(`${userData.username}:${userData.password}`);
        axios.defaults.headers.common['Authorization'] = `Basic ${encodedCredentials}`;
      }
    },
  },
});