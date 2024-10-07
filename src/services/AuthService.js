
import axios from 'axios';

class AuthService {
  constructor() {
    this.apiUrl = 'http://localhost:8080/api/v1';  
  }

  
  async login(username, password) {
    const credentials = btoa(`${username}:${password}`); 
    try {
      const response = await axios.post(
        `${this.apiUrl}/login`,
        {}, 
        {
          headers: {
            'Authorization': `Basic ${credentials}`, 
            'Content-Type': 'application/json',
          },
          withCredentials: true, 
        }
      );

     
      return response.data;  
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  }

  
  async register({ name, username, password }) {
    try {
      const response = await axios.post(
        `${this.apiUrl}/register`,
        {},  
        {
          headers: {
            'username': username,
            'password': password,
            'email': name, 
            'firstName': name,  
            'lastName': 'LastNamePlaceholder',  
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;  
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  }
}

export default new AuthService();
