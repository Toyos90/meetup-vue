<script>
export default {
  props: {
    imageUrl: String,
    title: String,
    subtitle: String,
  },
};
</script>


<template>
  <v-card id="petCard">
    <v-img :src="imageUrl" alt="Mascota" height="200"></v-img>
    <div id="petCard__description">
      <v-card-title id="petCard__title">{{ title }}</v-card-title>
      <v-card-subtitle id="petCard__subtitle">{{ subtitle }}</v-card-subtitle>
    </div>
  </v-card>
</template>

<style>
  #petCard {
    background-color: transparent;
    box-shadow: none;
  }
  
  #petCard__title{
    padding: 0 16px;
  }

</style>