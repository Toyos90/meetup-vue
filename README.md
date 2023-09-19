
![Logo](https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png)


# MeetUp Vue 2023

Introducción básica a Vue 3.


## Run Locally  💻

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


## Running Tests 🕵🏽

To run tests, run the following command

```bash
  npm run test:unit
```


## Installation 💽

Install project-name with npm

```bash
  npm init vue@latest
```

Optional features
```http
Project name: <project-name> 

|          FEATURE  | INSTALL |
| ----------------- | ------- |
|               TS: |    NO   |
|              JSX: |    NO   |
|   ADD VUE ROUTER: |   YES   |
|            PINIA: |    NO   |
|           VITEST: |   YES   |
|       END-TO-END: |    NO   |
|           ESLINT: |    NO   |
|         PRETTIER: |    NO   |
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
## Tech Stack

Vue3, Vuetify, Vitest.

## 🔗 Links
[![vue](https://img.shields.io/badge/Vue3-'?style=for-the-badge&logo=ko-fi&logoColor=white)](https://vuejs.org/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://router.vuejs.org/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)


## Authors ©️

- [@luluzan](https://github.com/luluzan)
- [@Toyos90](https://github.com/Toyos90)
- [@albegosu](https://github.com/albegosu)
- [@cesarconte](https://github.com/cesarconte)
- [@NAFISA-USMANOVA](https://github.com/NAFISA-USMANOVA)


## Roadmap

- Additional browser support

- Add more integrations


## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


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

