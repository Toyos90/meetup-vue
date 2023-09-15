<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="footer">
    <div id="icons">
        <RouterLink to="/" class="icon">
            <img width="40" height="40" src="../assets/images/esquema-de-la-casa.png"/>
            <p>Inicio</p>
        </RouterLink>
        <RouterLink to="/" class="icon">
            <img width="40" height="40" src="../assets/images/chat.png">
            <p>Chat</p>
        </RouterLink>
        <RouterLink to="/PetDetailsView" class="icon">
            <img width="40" height="40" src="../assets/images/corazon.png">
            <p>Favoritos</p>
        </RouterLink>
    </div>
  </footer>
</template>

<style>
  .footer {
    display:flex;
    flex-direction: row;
    justify-content:space-evenly; 
    background-color: #F4F4F4;
    padding: 5px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  #icons{
      display: flex;
  }
  .icon{
      display:flex;
      flex-direction: column;
      align-items: center;
      margin: 5px 35px;   
      text-decoration: none;
      color: var(--black);
  }
  .icon p {
    text-decoration: none;
  }
</style>