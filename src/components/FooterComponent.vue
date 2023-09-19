<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="footer">
    <div id="icons">
      <RouterLink to="/" class="icon">
        <img src="../assets/images/esquema-de-la-casa.png" />
        <p>Inicio</p>
      </RouterLink>
      <RouterLink to="/" class="icon">
        <img src="../assets/images/chat.png" />
        <p>Chat</p>
      </RouterLink>
      <RouterLink to="/" class="icon">
        <img src="../assets/images/corazon.png" />
        <p>Favoritos</p>
      </RouterLink>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #F4F4F4;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

#icons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 35px;
  text-decoration: none;
  color: var(--black);
  font-size: 14px;
}

.icon img {
  width: 30px;
  height: 30px;
}
</style>
