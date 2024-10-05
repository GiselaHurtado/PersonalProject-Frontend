// src/stores/auth.js
import { defineStore } from 'pinia';
import AuthService from '@/services/AuthService.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,       // Almacena la información del usuario (nombre de usuario)
    role: null,       // Almacena el rol del usuario (ej: 'ROLE_ADMIN' o 'ROLE_USER')
    isAuthenticated: false,  // Indica si el usuario está autenticado
    errorMessage: '',  // Almacena mensajes de error de autenticación
  }),
  actions: {
    // Acción para iniciar sesión
    async login(username, password) {
      try {
        const response = await AuthService.login(username, password); // Llamada al servicio de autenticación

        // Verificamos que la respuesta contenga el campo username y roles
        if (response && response.username && response.roles) {
          this.user = response.username;   // Almacena el nombre del usuario
          this.role = response.roles[0];   // Almacena el primer rol del array de roles
          this.isAuthenticated = true;     // Marca como autenticado
          this.errorMessage = '';

          // Guarda el nombre de usuario y el rol en localStorage
          localStorage.setItem('user', JSON.stringify({ username: this.user, role: this.role }));
        } else {
          throw new Error('Invalid login response format');
        }
      } catch (error) {
        this.errorMessage = 'Login failed: ' + (error.response?.data?.message || error.message);
        this.isAuthenticated = false;
        throw error;
      }
    },

    // Acción para registrar un nuevo usuario
    async register(name, username, password) {
      try {
        await AuthService.register({ name, username, password });  // Llamada al servicio de registro
        this.errorMessage = '';  // Limpia los mensajes de error
      } catch (error) {
        this.errorMessage = 'Registration failed: ' + (error.response?.data?.message || error.message);
        throw error;
      }
    },

    // Acción para cerrar sesión
    logout() {
      this.user = null;
      this.role = null;          // Limpia el rol del usuario
      this.isAuthenticated = false;
      localStorage.removeItem('user');   // Elimina los datos del usuario del almacenamiento local
    },

    // Acción para cargar el usuario desde localStorage (opcional, para mantener la sesión activa)
    loadUserFromLocalStorage() {
      const savedUser = localStorage.getItem('user');

      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        this.user = parsedUser.username;
        this.role = parsedUser.role;
        this.isAuthenticated = true;
      }
    },
  },
});
