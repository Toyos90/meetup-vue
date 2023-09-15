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
    <v-card>
      <v-img :src="imageUrl" alt="Mascota" height="200"></v-img>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    </v-card>
  </template>