<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'; // Importamos la tienda de autenticación

const router = useRouter();
const authStore = useAuthStore(); // Usamos la tienda de autenticación

// Función para cerrar sesión
const logout = () => {
  authStore.logout();  // Llamamos la función de cierre de sesión desde la tienda
  router.push('/login'); // Redirigimos al login después de cerrar sesión
};

// Computed property para verificar si el usuario está autenticado
const isAuthenticated = ref(authStore.isAuthenticated); // Asume que 'isAuthenticated' existe en la tienda
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <svg width="40" height="40" viewBox="0 0 100 100">
        <path d="M50 10 L90 90 L10 90 Z" fill="black" />
        <path d="M50 30 L70 70 L30 70 Z" fill="white" />
      </svg>
    </div>
    <div class="menu">
      <a @click="router.push('/')">DASHBOARD</a>
      <a @click="router.push('/manage-users')">MANAGE USERS</a>
      <a @click="router.push('/settings')">SETTINGS</a>
    </div>

    <!-- Aquí verificamos si el usuario está autenticado -->
    <div class="right-section" v-if="isAuthenticated">
      <!-- Saludo personalizado al administrador -->
      <span class="admin-greeting">Hi, Admin</span>
      <!-- Botón de Logout -->
      <button class="auth-button" @click="logout">LOGOUT</button>
    </div>

    <!-- Si el usuario NO está autenticado mostramos los botones de login y register -->
    <div class="auth-buttons" v-else>
      <button class="auth-button" @click="router.push('/login')">LOGIN</button>
      <button class="auth-button" @click="router.push('/register')">REGISTER</button>
    </div>
  </nav>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');

.navbar {
  background-color: #fff;
  color: #000;
  padding: 0 50px; /* Mantengo el padding que diste */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%; /* Respetamos el ancho que diste */
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Sección del logo */
.logo {
  height: 40px;
}

/* Menú de navegación */
.menu {
  display: flex;
  gap: 20px;
  margin-left: 650px; /* Mantengo el margen que diste */
  flex-grow: 1;
  justify-content: flex-start; /* Alineamos el menú correctamente */
}

.menu a {
  color: #000;
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 16px;
  transition: color 0.3s ease;
  padding: 5px 10px;
}

.menu a:hover {
  color: #bdc445;
}

/* Sección derecha (Logout y Admin) */
.right-section {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 30px; /* Mantengo el margen que diste */
}

.auth-button {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-button:hover {
  background-color: #333;
}

/* Cambios para pantallas medianas y pequeñas */
@media (max-width: 1024px) {
  .navbar {
    padding: 0 30px; /* Reducimos un poco el padding en pantallas medianas */
  }

  .menu {
    margin-left: 0; /* Eliminamos el margen para centrar el menú */
    justify-content: center; /* Centramos el menú en pantallas medianas */
    gap: 15px; /* Reducimos el espacio entre los enlaces del menú */
  }

  .auth-button {
    padding: 6px 12px; /* Reducimos ligeramente el tamaño del botón */
    margin-right: 10px;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 20px; /* Reducimos el padding lateral */
  }

  .menu {
    margin-left: 0; /* Alineamos mejor el menú en pantallas más pequeñas */
    justify-content: center; /* Centramos el menú */
    gap: 10px; /* Reducimos aún más el espacio entre los elementos del menú */
  }

  .auth-button {
    padding: 5px 10px; /* Ajustamos el botón "Logout" */
    font-size: 12px;
  }

  .right-section {
    gap: 30px; /* Aumentamos el espacio entre el menú y el "Hi, Admin" */
  }

  .right-section span {
    font-size: 12px; /* Reducimos el texto "Hi, Admin" */
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0 10px; /* Reducimos aún más el padding */
  }

  .menu {
    margin-left: 0; /* Eliminamos el margen */
    justify-content: center; /* Aseguramos que el menú esté centrado */
    gap: 8px; /* Reducimos aún más el espacio entre los elementos del menú */
  }

  .auth-button {
    padding: 4px 10px;
    font-size: 10px; /* Ajustamos el tamaño del botón en pantallas pequeñas */
  }

  .right-section {
    gap: 20px; /* Mantén un buen espacio entre el menú y el "Hi, Admin" */
  }

  .right-section span {
    font-size: 10px; /* Ajustamos el tamaño del saludo */
  }
}

</style>