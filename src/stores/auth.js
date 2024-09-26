// stores/auth.js
import { defineStore } from 'pinia';
import axios from 'axios';
import api from './api.js'; // Suponiendo que tienes una instancia de axios configurada

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    // Método para establecer el usuario y las cabeceras de autorización
    setUser(userData) {
      this.user = userData;
      this.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(userData));
      const credentials = btoa(`${userData.username}:${userData.password}`);
      localStorage.setItem('auth', `Basic ${credentials}`);
      api.defaults.headers.common['Authorization'] = `Basic ${credentials}`;
    },

    // Método para eliminar las credenciales
    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem('user');
      localStorage.removeItem('auth');
      delete api.defaults.headers.common['Authorization'];
    },

    // Método para iniciar sesión con autenticación básica
    async login(username, password) {
      try {
        const credentials = btoa(`${username}:${password}`);
        const response = await api.post('/login', {}, {
          headers: { 'Authorization': `Basic ${credentials}` }
        });
        this.setUser({ username, password, ...response.data });
        return response.data;
      } catch (error) {
        console.error('Error en login:', error);
        throw error;
      }
    },

    // Método para inicializar la autenticación desde localStorage
    initializeAuth() {
      const storedUser = localStorage.getItem('user');
      const authHeader = localStorage.getItem('auth');
      if (storedUser && authHeader) {
        this.user = JSON.parse(storedUser);
        this.isAuthenticated = true;
        api.defaults.headers.common['Authorization'] = authHeader;
      }
    },

    // Método para autenticar con la API de eventos
    async loginWithEvents(username, password) {
      const authHeader = 'Basic ' + btoa(username + ':' + password);
      try {
        await axios.get('/calendar/events', {
          headers: { Authorization: authHeader }
        });
        this.setUser({ username, password });
        return true;
      } catch (error) {
        console.error('Login with events failed:', error);
        throw error;
      }
    },
  },
});
