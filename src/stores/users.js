import { defineStore } from 'pinia';
import UsersRepository from '@/repositories/UsersRepository.js';

const userRepository = new UsersRepository('http://localhost:8080/api/v1/users');

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [], 
    errorMessage: '',
  }),

  actions: {
    async fetchUsers(username, password) {
      try {
        const data = await userRepository.getUsers(username, password);
        this.users = data; 
      } catch (error) {
        this.errorMessage = 'Error fetching users';
        console.error(error);
      }
    },

    async addUser(newUser, username, password) {
      try {
        await userRepository.addUser(newUser, username, password);
        this.fetchUsers(username, password); 
      } catch (error) {
        this.errorMessage = 'Error adding user';
        console.error(error);
      }
    },

    async updateUser(id, updatedUser, username, password) {
      try {
        await userRepository.updateUser(id, updatedUser, username, password);
        this.fetchUsers(username, password); 
      } catch (error) {
        this.errorMessage = 'Error updating user';
        console.error(error);
      }
    },

    async deleteUser(id, username, password) {
      try {
        await userRepository.deleteUser(id, username, password);
        this.fetchUsers(username, password); 
      } catch (error) {
        this.errorMessage = 'Error deleting user';
        console.error(error);
      }
    }
  },
});
