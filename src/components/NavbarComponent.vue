<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav class="navbar">
      <img src="../assets/images/List.png" alt="List">
      <RouterLink to="/loginView" class="login__route">
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
