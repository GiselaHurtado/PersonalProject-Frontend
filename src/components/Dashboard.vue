<template>
  <div class="table-container">
    <div class="header">
      <input v-model="searchQuery" type="text" placeholder="Search" class="search-input" />
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Country</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredData" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.salary }}</td>
          <td>{{ row.country }}</td>
          <td>{{ row.city }}</td>
          <td>
            <button class="action-btn"><i class="fa fa-heart"></i></button>
            <button class="action-btn"><i class="fa fa-edit"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const tableData = ref([
  { id: 1, name: 'Dakota Rice', salary: '$36,738', country: 'Niger', city: 'Oud-Turnhout' },
  { id: 2, name: 'Minerva Hooper', salary: '$23,789', country: 'Curaçao', city: 'Sinaai-Waas' },
  { id: 3, name: 'Sage Rodriguez', salary: '$56,142', country: 'Netherlands', city: 'Baileux' },
  { id: 4, name: 'Philip Chaney', salary: '$38,735', country: 'Korea, South', city: 'Overland Park' },
  { id: 5, name: 'Doris Greene', salary: '$63,542', country: 'Malawi', city: 'Feldkirchen in Kärnten' },
  { id: 6, name: 'Mason Porter', salary: '$78,615', country: 'Chile', city: 'Gloucester' },
  { id: 7, name: 'Alden Chen', salary: '$63,929', country: 'Finland', city: 'Gary' },
  { id: 8, name: 'Colton Hodges', salary: '$93,961', country: 'Nicaragua', city: 'Delft' }
]);

const searchQuery = ref('');
const filteredData = computed(() => {
  return tableData.value.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'); /* Importa los iconos */

.table-container {
  width: 100%;
  max-width: 1100px; /* Hacemos la tabla más grande */
  margin: 0 auto;
  padding: 20px;
  background-color: transparent;
  border-radius: 20px; /* Bordes más redondeados */
  box-shadow: none; /* Eliminamos cualquier sombra de borde */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}

.search-input {
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border-radius: 20px; /* Bordes redondeados de la tabla */
  overflow: hidden; /* Asegurarse que el contenido respete los bordes redondeados */
}

.table thead {
  background-color: #bdc445; /* Color amarillo */
  color: white;
}

.table th,
.table td {
  padding: 14px 18px; /* Hacemos las celdas un poco más grandes */
  border: none; /* Eliminamos cualquier recuadro alrededor de las celdas */
  text-align: left;
}

.table tbody tr:nth-child(even) {
  background-color: #e0e596; /* Amarillo claro */
}

.table tbody tr:nth-child(odd) {
  background-color: #d2d85b; /* Amarillo intermedio */
}

.table tbody tr:hover {
  background-color: #e2e2e2; /* Gris al pasar el mouse */
}

.action-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: white; /* Íconos en blanco */
  cursor: pointer;
  margin-right: 5px;
}

.action-btn:hover {
  color: #ff4d4d; /* Color al pasar sobre el ícono */
}
</style>
