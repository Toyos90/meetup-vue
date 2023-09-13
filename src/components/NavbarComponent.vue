<script>
import { ref } from 'vue'

export default {
  setup() {
    const drawer = ref(false)

    return { drawer }
  },
}
</script>

<template>
  <v-app>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <img src="../assets/images/List.png" alt="List icon">
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon>
        <RouterLink to="/LoginView">
          <img src="../assets/images/NavbarComponent.png" alt="Login icon">
        </RouterLink>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Menú</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <RouterLink to="/">
              <v-list-item-title>Inicio</v-list-item-title>
            </RouterLink>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</v-app>
</template>

<style scoped>

</style>
