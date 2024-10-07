// src/stores/auth.js
import { defineStore } from 'pinia';
import AuthService from '@/services/AuthService.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,       
    role: null,       
    isAuthenticated: false,  
    errorMessage: '', 
  }),
  actions: {
    
    async login(username, password) {
      try {
        const response = await AuthService.login(username, password); 

       
        if (response && response.username && response.roles) {
          this.user = response.username;   
          this.role = response.roles[0];   
          this.isAuthenticated = true;    
          this.errorMessage = '';

          
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
      this.role = null;          
      this.isAuthenticated = false;
      localStorage.removeItem('user');   
    },

   
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
