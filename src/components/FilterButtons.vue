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
    <div>
      <v-btn @click="filterData('todos')">Todos</v-btn>
      <v-btn @click="filterData('perros')">Perros</v-btn>
      <v-btn @click="filterData('gatos')">Gatos</v-btn>
    </div>
  </template>
  
  