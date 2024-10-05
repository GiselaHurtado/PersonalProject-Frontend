import axios from 'axios';

// Codificar las credenciales en Base64
const encodeCredentials = (username, password) => {
  return 'Basic ' + btoa(`${username}:${password}`);
};

export default class UsersRepository {
  constructor(uri) {
    this.uri = uri; // Base URL para la API
  }

  async getUsers(username, password) {
    try {
      const response = await axios.get(this.uri, {
        headers: {
          Authorization: encodeCredentials(username, password),
          'Content-Type': 'application/json',
        },
        withCredentials: true, // Para manejar cookies si es necesario
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Error fetching users');
    }
  }

  async addUser(newUser, username, password) {
    try {
      const response = await axios.post(this.uri, newUser, {
        headers: {
          Authorization: encodeCredentials(username, password),
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error('Error adding user:', error);
      throw new Error('Failed to add user');
    }
  }

  async updateUser(id, updatedUser, username, password) {
    try {
      if (!id) throw new Error('ID del usuario es undefined o null'); // Verificación del id
      const response = await axios.put(`${this.uri}/${id}`, updatedUser, {
        headers: {
          Authorization: encodeCredentials(username, password),
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error);
      throw new Error('Failed to update user');
    }
  }

  async deleteUser(id, username, password) {
    try {
      if (!id) throw new Error('ID del usuario es undefined o null'); // Verificación del id
      const response = await axios.delete(`${this.uri}/${id}`, {
        headers: {
          Authorization: encodeCredentials(username, password),
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error('Error deleting user:', error.response?.data || error.message);
      throw new Error('Failed to delete user');
    }
  }
}
