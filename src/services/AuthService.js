// src/services/AuthService.js
import axios from 'axios';

class AuthService {
  constructor() {
    this.apiUrl = 'http://localhost:8080/api/v1';  // URL del backend
  }

  // Método para hacer login
  async login(username, password) {
    const credentials = btoa(`${username}:${password}`); // Codifica en Base64 las credenciales
    try {
      const response = await axios.post(
        `${this.apiUrl}/login`,
        {}, // No se necesita enviar cuerpo, solo encabezados
        {
          headers: {
            'Authorization': `Basic ${credentials}`,  // Autenticación básica en los encabezados
            'Content-Type': 'application/json',
          },
          withCredentials: true, // Para enviar cookies si es necesario
        }
      );

      // Suponemos que el backend devuelve los datos en el formato adecuado
      // Ejemplo: { roles: [...], id: ..., username: ..., message: ... }
      return response.data;  // Devolvemos los datos al frontend
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  }

  // Método para registro (enviando datos por el header)
  async register({ name, username, password }) {
    try {
      const response = await axios.post(
        `${this.apiUrl}/register`,
        {},  // El cuerpo de la solicitud queda vacío, solo se usan los encabezados
        {
          headers: {
            'username': username,
            'password': password,
            'email': name,  // Si el backend espera este campo en el header
            'firstName': name,  // Campo opcional, si es necesario en el header
            'lastName': 'LastNamePlaceholder',  // Puedes ajustar si el backend espera este campo
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;  // Devolvemos los datos al frontend
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  }
}

export default new AuthService();
