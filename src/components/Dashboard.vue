<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '@/stores/users';
import AddUserForm from './AddUserForm.vue';
import EditUserForm from './EditUserForm.vue';
import DeleteUserForm from './DeleteUserForm.vue';

const userStore = useUserStore();
const username = ref('admin');
const password = ref('password');

const searchQuery = ref('');

const filteredData = computed(() => {
  return userStore.users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const selectedUser = ref(null);
const showAddForm = ref(false);
const showEditForm = ref(false);
const showDeleteForm = ref(false);

onMounted(() => {
  userStore.fetchUsers(username.value, password.value);
});

const handleAddUser = async (newUser) => {
  try {
    await userStore.addUser(newUser, username.value, password.value);
    showAddForm.value = false;
  } catch (error) {
    console.error('Error al agregar usuario:', error);
  }
};

const handleEditUser = async (updatedUser) => {
  try {
    if (!updatedUser.id) {
      console.error('El ID del usuario no está definido');
      return;
    }
    await userStore.updateUser(updatedUser.id, updatedUser, username.value, password.value);
    showEditForm.value = false;
  } catch (error) {
    console.error('Error al editar usuario:', error);
  }
};

const handleDeleteUser = async (userToDelete) => {
  try {
    if (!userToDelete.id) {
      console.error('El ID del usuario no está definido');
      return;
    }
    await userStore.deleteUser(userToDelete.id, username.value, password.value);
    showDeleteForm.value = false;
    alert('Usuario eliminado correctamente');
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
  }
};

const editUser = (user) => {
  selectedUser.value = user;
  showEditForm.value = true;
};

const deleteUser = (user) => {
  selectedUser.value = user;
  showDeleteForm.value = true;
};

const toggleAddForm = () => {
  showAddForm.value = !showAddForm.value;
};
</script>

<template>
  <div class="table-container">
    <h1>REGISTERED USERS</h1>

    <input type="text" v-model="searchQuery" placeholder="Buscar por nombre..." class="search-input" />

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

    <button class="add-btn" @click="toggleAddForm">Agregar Usuario</button>

    <div v-if="showAddForm" class="modal">
      <div class="modal-content">
        <AddUserForm @add-user="handleAddUser" />
        <button @click="showAddForm = false" class="close-btn">Cerrar</button>
      </div>
    </div>

    <div v-if="showEditForm" class="modal">
      <div class="modal-content">
        <EditUserForm :userToEdit="selectedUser" @edit-user="handleEditUser" />
        <button @click="showEditForm = false" class="close-btn">Cerrar</button>
      </div>
    </div>

    <div v-if="showDeleteForm" class="modal">
      <div class="modal-content">
        <DeleteUserForm :user="selectedUser" @delete-user="handleDeleteUser" @close="showDeleteForm = false" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.table-container {
  width: 100%;
  max-width: 1100px;
  margin: 90px auto;
  padding: 20px;
  background-color: transparent;
  border-radius: 20px;
  color: black;
}

h1{
  color: #a1b13c;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
}

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
  background-color: #b4d20a;
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
  color: #83f707;
}

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

.search-input {
  width: 20%;
  background-color: #e0e596;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  font-family: 'Quicksand', sans-serif;
  box-shadow: 0 4px 15px rgba(189, 196, 69, 0.5); 
  outline: none;
  color: black !important;
}

.search-input:focus {
  border-color: #bdc445; /* Borde personalizado al hacer foco, puedes cambiar el color */
  box-shadow: 0px 4px 12px rgba(189, 196, 69, 0.5); /* Opcional: sombra adicional en foco */
}
</style>
