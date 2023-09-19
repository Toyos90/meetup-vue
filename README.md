
<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" alt="Logo Vue")
</p>


# MeetUp Vue 2023

Introducción básica a Vue 3.


## 🔗 Links
[![vue](https://img.shields.io/badge/Vue3-4FC08D'?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![router](https://img.shields.io/badge/RouterVue-000000?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://router.vuejs.org/)
[![pinia](https://img.shields.io/badge/Pinia-FFDB00?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://pinia.vuejs.org/)
[![vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=white)](https://vuetifyjs.com/)
## 💻  Run Repository Locally

[![git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/) [![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

Clone the project

```bash
  git clone https://github.com/Toyos90/meetup-vue
```

Go to the project directory

```bash
  cd meetup-vue
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## 🕵🏽 Running Tests

[![vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)

To run tests, run the following command 

```bash
  npm run test:unit
```


## 🪜 Dependencies

```bash
meetup-vue@0.0.0 
├── @mdi/font@7.2.96
├── @vitejs/plugin-vue@4.3.4
├── @vue/test-utils@2.4.1
├── eslint-plugin-vue@9.17.0
├── eslint@8.49.0
├── jsdom@22.1.0
├── vite@4.4.9
├── vitest-svelte-kit@0.0.7
├── vitest@0.34.4
├── vue-router-mock@1.0.0
├── vue-router@4.2.4
├── vue@3.3.4
├── vuetify@3.4.0-alpha.1
└── vuex@4.1.0
```

## 💽 Installation a New Vue3 Project - Steps

Install project-name with npm

```bash
    npm init vue@latest
```

Optional features
```bash
    ✔ Project name: … <your-project-name>
    ✔ Add TypeScript? No
    ✔ Add JSX Support? No
    ✔ Add Vue Router for Single Page Application development? Yes
    ✔ Add Pinia for state management? No
    ✔ Add Vitest for Unit testing? Yes
    ✔ Add an End-to-End Testing Solution? No
    ✔ Add ESLint for code quality? No
    ✔ Add Prettier for code formatting? No
```

Go to project directory
```bash
    cd <project-name>
```
Install dependencies
```bash
    npm install
```
Start the server
```bash
    npm run dev
```
## 🍍 Basic Code Structure

Basic Main.js
```bash
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
```

Basic View/Component
```diff
<script setup>
    //YOUR LOGIC FOR VIEW OR COMPONENT
</script>

<template>
    //YOUR HTML TEMPLATE
</template>

<style scoped>
    //YOUR STYLES FOR THIS VIEW OR COMPONENT
<style>
```

Basic Router
```diff
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router;
```


## Authors ©️

- [@luluzan](https://github.com/luluzan)
- [@Toyos90](https://github.com/Toyos90)
- [@albegosu](https://github.com/albegosu)
- [@cesarconte](https://github.com/cesarconte)
- [@NAFISA-USMANOVA](https://github.com/NAFISA-USMANOVA)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

