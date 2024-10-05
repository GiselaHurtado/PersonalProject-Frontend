import { defineStore } from 'pinia';
import UsersRepository from '@/repositories/UsersRepository.js';

const userRepository = new UsersRepository('http://localhost:8080/api/v1/users');

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [], // Almacena los usuarios obtenidos
    errorMessage: '',
  }),

  actions: {
    async fetchUsers(username, password) {
      try {
        const data = await userRepository.getUsers(username, password);
        this.users = data; // Asigna los datos recibidos al estado
      } catch (error) {
        this.errorMessage = 'Error fetching users';
        console.error(error);
      }
    },

    async addUser(newUser, username, password) {
      try {
        await userRepository.addUser(newUser, username, password);
        this.fetchUsers(username, password); // Refresca la lista después de agregar
      } catch (error) {
        this.errorMessage = 'Error adding user';
        console.error(error);
      }
    },

    async updateUser(id, updatedUser, username, password) {
      try {
        await userRepository.updateUser(id, updatedUser, username, password);
        this.fetchUsers(username, password); // Refresca la lista
      } catch (error) {
        this.errorMessage = 'Error updating user';
        console.error(error);
      }
    },

    async deleteUser(id, username, password) {
      try {
        await userRepository.deleteUser(id, username, password);
        this.fetchUsers(username, password); // Refresca la lista después de eliminar
      } catch (error) {
        this.errorMessage = 'Error deleting user';
        console.error(error);
      }
    }
  },
});
