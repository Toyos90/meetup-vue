<script>
export default {
  props: {
    imageUrl: String,
    title: String,
    subtitle: String,
  },
  data() {
    return {
      showOverlay: false,
    };
  },
  methods: {
    toggleOverlay() {
      this.showOverlay = !this.showOverlay;
    },
  },
};
</script>


<template>
  <div class="imgMini">
    <v-card class="rounded" @click="toggleOverlay" id="petCard">
      <v-img :src="imageUrl" alt="Mascota" height="200"></v-img>
    </v-card>
    <div v-if="showOverlay" class="overlay">
      <button @click="toggleOverlay" class="close-button">X</button>
      <img :src="imageUrl" alt="Mascota" style="width: 100%;" class="overlay-image">
      <div class="overlay-content">
        <h2>{{ title }}</h2>
        <h3>{{ subtitle }}</h3>
      </div>
      <div class="text">
        <p>Es una mascota juguetona y cariñosa, le encanta que le rasquen la barriga.</p>
        <button type="submit" class="btnForm">
          <div class="btnForm_Group12">
            <p class="loginText">Contactar</p>
          </div>
          <div class="btnForm_Group11">
            <a href="https://wa.me/34645395976" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="phoneSvg">
                <path
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="154" height="48" viewBox="0 0 154 48" fill="none"
                class="substractSvg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48H154C110.687 48 110.499 35.9652 110.312 23.9478C110.125 11.9652 109.938 0 67 0H24Z"
                  fill="#F4F4F4" fill-opacity="0.85" />
              </svg>
            </a>

          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#petCard {
  background-color: var(--light);
  box-shadow: none;
}

#petCard__title{
  padding: 16px;}


.imgMini img{
border-radius: 16px;
object-fit: cover;
width: 154px;
height: 154px;
border-radius: 16px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 9999;
  background-color: var(--light);
}

.overlay img.overlay-image {
  max-width: 100%;
  height: auto;
  position: relative;
  margin-top: -5px; 
  z-index: 1;

}
.overlay-content {
background-color: var(--light);
border-radius: 25px 25px 0 0;
padding: 20px;
position: relative; 
z-index: 2; 
margin-top: -100px;
 
}

  .overlay h2 {
  margin-left: 0.6rem;
  font-weight: 600;
  letter-spacing: 3px;
  }

.overlay h3 {
color: var(--contraste);
margin-bottom: 1rem;
font-weight: 600;
letter-spacing: 1px;
margin-left: 0.6rem;
margin-bottom: 0;
}

.overlay p{font-size: 15px;

}

.close-button {
position: absolute;
top: 10px;
left: 10px; 
background-color: var(--light);
border: none;
border-radius: 50%; 
color: black;
font-size: 1.2rem;
padding: 7px 12px;
cursor: pointer;
z-index: 3; 
}

.btnForm{
margin: 2rem 0;
width: 327px;
height: 48px;
}

p{
margin: 0 auto;
padding-left: 1rem;
letter-spacing: 1px;
}

.text{
background-color: var(--white);
padding: 1.2rem;
font-weight: 300;
align-content: center;
width: 100%;
}

.btnForm_Group12 {
width: 327px;
height: 48px;
flex-shrink: 0;
border-radius: 32px;
background: var(--contraste);    
}

.loginText{
position: relative;
left: 50px;
top: 13px;

color: var(--white);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.8px;
text-transform: uppercase;
}
.loginText:hover {
letter-spacing: 1.8px;
}

.btnForm_Group11{
width: 100px;
height: 48px;
flex-shrink: 0;
}

.phoneSvg{
position: relative;
top: -38px;
left: 10px;
z-index: 3;
width: 32px;
height: 32px;
flex-shrink: 0;

}

.phoneSvg:hover{
left: 25px;
}

.substractSvg{
position: relative;
top: -87px;
fill: rgba(244, 244, 244, 0.85);
width: 154px;
height: 48px;
flex-shrink: 0;
}

</style>