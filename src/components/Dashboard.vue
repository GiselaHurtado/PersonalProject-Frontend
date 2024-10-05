<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '@/stores/users';  // Importa el store de usuarios
import AddUserForm from './AddUserForm.vue';
import EditUserForm from './EditUserForm.vue';
import DeleteUserForm from './DeleteUserForm.vue';

const userStore = useUserStore();  // Instancia del store de usuarios
const username = ref('admin');  // Usuario correcto
const password = ref('password');  // Contraseña correcta

// Estado para manejar las búsquedas
const searchQuery = ref('');

// Computed para filtrar los usuarios con base en la búsqueda
const filteredData = computed(() => {
  return userStore.users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Modal de usuario seleccionado
const selectedUser = ref(null);
const showAddForm = ref(false);  // Estado para el modal de agregar
const showEditForm = ref(false);  // Estado para el modal de editar
const showDeleteForm = ref(false);  // Estado para el modal de eliminación

// Montar el componente y cargar los usuarios desde el backend
onMounted(() => {
  userStore.fetchUsers(username.value, password.value);  // Fetch de usuarios al montar, ahora con las credenciales correctas
});

// Agregar nuevo usuario usando el store
const handleAddUser = async (newUser) => {
  try {
    await userStore.addUser(newUser, username.value, password.value);  // Agregar usuario con credenciales correctas
    showAddForm.value = false;  // Ocultar modal de agregar
  } catch (error) {
    console.error('Error al agregar usuario:', error);
  }
};

// Editar usuario usando el store
const handleEditUser = async (updatedUser) => {
  try {
    // Asegúrate de que el id está definido antes de hacer la solicitud
    if (!updatedUser.id) {
      console.error('El ID del usuario no está definido');
      return;
    }
    await userStore.updateUser(updatedUser.id, updatedUser, username.value, password.value);  // Editar usuario con credenciales correctas
    showEditForm.value = false;  // Ocultar modal de editar
  } catch (error) {
    console.error('Error al editar usuario:', error);
  }
};

// Eliminar usuario usando el store
const handleDeleteUser = async (userToDelete) => {
  try {
    // Asegúrate de que el id está definido antes de hacer la solicitud
    if (!userToDelete.id) {
      console.error('El ID del usuario no está definido');
      return;
    }
    await userStore.deleteUser(userToDelete.id, username.value, password.value);  // Eliminar usuario con credenciales correctas
    showDeleteForm.value = false;
    alert('Usuario eliminado correctamente');
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
  }
};

// Abrir el modal de editar usuario
const editUser = (user) => {
  selectedUser.value = user;
  showEditForm.value = true;  // Mostrar modal de editar
};

// Abrir el modal de eliminar usuario
const deleteUser = (user) => {
  selectedUser.value = user;
  showDeleteForm.value = true;  // Mostrar modal de eliminar
};

// Alternar la visibilidad del modal de agregar usuario
const toggleAddForm = () => {
  showAddForm.value = !showAddForm.value;
};
</script>

<template>
  <div class="table-container">
    <h1>REGISTERED PEOPLE</h1>

    <!-- Búsqueda de usuarios -->
    <input type="text" v-model="searchQuery" placeholder="Buscar por nombre..." />

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredData" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td class="actions">
              <button class="action-btn" @click="editUser(user)"><i class="fa fa-edit"></i></button>
              <button class="action-btn" @click="deleteUser(user)"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Botón para agregar usuario -->
    <button class="add-btn" @click="toggleAddForm">Agregar Usuario</button>

    <!-- Modal para Agregar Usuario -->
    <div v-if="showAddForm" class="modal">
      <div class="modal-content">
        <AddUserForm @add-user="handleAddUser" />
        <button @click="showAddForm = false" class="close-btn">Cerrar</button>
      </div>
    </div>

    <!-- Modal para Editar Usuario -->
    <div v-if="showEditForm" class="modal">
      <div class="modal-content">
        <EditUserForm :userToEdit="selectedUser" @edit-user="handleEditUser" />
        <button @click="showEditForm = false" class="close-btn">Cerrar</button>
      </div>
    </div>

    <!-- Modal para Eliminar Usuario -->
    <div v-if="showDeleteForm" class="modal">
      <div class="modal-content">
        <DeleteUserForm :user="selectedUser" @delete-user="handleDeleteUser" @close="showDeleteForm = false" />
      </div>
    </div>
  </div>
</template>


<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'); /* Importa los iconos */

/* Mantener bordes redondeados */
.table-container {
  width: 100%;
  max-width: 1100px;
  margin: 90px auto;
  padding: 20px;
  background-color: transparent;
  border-radius: 20px;
  color: black;
}

/* Hacer la tabla responsive */
.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border-radius: 20px;
  overflow: hidden;
}

.table thead {
  background-color: #bdc445;
  color: black;
}

.table th, .table td {
  padding: 14px 18px;
  border: none;
  text-align: left;
}

.table tbody tr:nth-child(even) {
  background-color: #e0e596;
}

.table tbody tr:nth-child(odd) {
  background-color: #d2d85b;
}

.table tbody tr:hover {
  background-color: #e2e2e2;
}

.actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: black;
  cursor: pointer;
}

.action-btn:hover {
  color: #7d7f7a;
}

/* Estilo del botón agregar usuario */
.add-btn {
  display: block;
  width: 100%;
  padding: 14px 18px;
  margin-top: 20px;
  background-color: #bdc445;
  border: none;
  border-radius: 20px;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-btn:hover {
  background-color: #a1b13c;
}

/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
}

.close-btn {
  margin-top: 10px;
  padding: 10px;
  background-color: #bdc445;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.close-btn:hover {
  background-color: #a1b13c;
}
</style>
