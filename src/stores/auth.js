// src/stores/auth.js
import { defineStore } from 'pinia';
import AuthService from '@/services/AuthService.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
    errorMessage: '',
  }),
  actions: {
    async login(username, password) {  // Cambiado 'email' a 'username'
      try {
        const response = await AuthService.login(username, password);  // Ajustado para usar 'username'
        this.user = response.username;  // Asume que el backend devuelve 'username'
        this.isAuthenticated = true;
        this.errorMessage = '';
        // Guarda el token en localStorage (opcional)
        localStorage.setItem('user', this.user);
      } catch (error) {
        this.errorMessage = 'Login failed: ' + (error.response?.data?.message || error.message);
        this.isAuthenticated = false;
        throw error;
      }
    },
    async register(name, username, password) {
      try {
        await AuthService.register({ name, username, password });
        this.errorMessage = '';
      } catch (error) {
        this.errorMessage = 'Registration failed: ' + (error.response?.data?.message || error.message);
        throw error;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      localStorage.removeItem('user');
    },
  },
});
