<script>
  export default {
    methods: {
      filterData(status) {
        // Lógica para aplicar el filtro según el estado seleccionado
        this.$emit('filter', status);
      }
    }
  };
  </script>

<template>
    <div class="btn_container">
      <v-btn @click="filterData('todos')" :class="{ 'selected': filterCategory === 'todos' }">Todos</v-btn>
      <v-btn @click="filterData('Perros')" :class="{ 'selected': filterCategory === 'Perros' }">Perros</v-btn>
      <v-btn @click="filterData('Gatos')" :class="{ 'selected': filterCategory === 'Gatos' }">Gatos</v-btn>
    </div>
  </template>
  
 
  <style scoped>

  .btn-container {
    display: flex;
    justify-content: center;
    gap: 10px; 
  }
  
  .selected {
    background-color: #8B5A2B;
    color: white;
    border-radius: 10px; }
  
  </style>

  