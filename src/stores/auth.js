import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(username, password) {
    
      console.log('Login attempt', username, password);
     
      this.user = { username };
    },
    async register(username, email, password) {

      console.log('Register attempt', username, email, password);
 
      this.user = { username, email };
    },
    logout() {
      this.user = null;
    },
  },
})