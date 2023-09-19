<script setup>
// Este código importa el componente `RouterLink` del router de Vue.

import { RouterLink } from 'vue-router';
</script>

<template>
  <!-- Este template define un encabezado con un logotipo y un enlace a la vista de inicio de sesión. -->
  <header>
    <nav class="navbar">
      <img src="../assets/images/List.png" alt="List">
      <RouterLink to="/loginView" class="login__route">
      <!-- Este enlace navega a la vista de inicio de sesión. -->
        <img src="../assets/images/NavbarComponent.png" class="login__icon" alt="Icon Login">
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar{
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.5rem;
}
.login__route {
  display: flex;
  align-items: center;
}
.login__icon{
  width: 40px;
  height: 40px;
}
</style>
