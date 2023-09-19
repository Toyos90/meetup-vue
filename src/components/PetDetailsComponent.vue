<script>

</script>

<template>
<div class="imgCat">
    <div class="info">
        <h1>Cleo</h1>
        <h3>Común Europeo</h3>
        <div class="text">
            <p>Es una gata juguetona y cariñosa, le encanta que le rasquen la barriga.</p>
            <button type="submit" class="btnForm">
                <div class="btnForm_Group12">
                    <p class="loginText">Contactar</p>
                </div>
                <div class="btnForm_Group11">
                    <a href="https://wa.me/34645395976" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="phoneSvg">
                            <g clip-path="url(#clip0_18_89)">
                            <path d="M5.48097 1.99195C5.39242 1.87805 5.28065 1.78428 5.15308 1.71689C5.02551 1.6495 4.88505 1.61003 4.74105 1.60109C4.59705 1.59215 4.4528 1.61395 4.31787 1.66505C4.18294 1.71615 4.06043 1.79537 3.95847 1.89745L2.40747 3.44995C1.68297 4.17595 1.41597 5.20345 1.73247 6.10495C3.04608 9.83634 5.18292 13.2241 7.98447 16.017C10.7774 18.8185 14.1651 20.9553 17.8965 22.269C18.798 22.5855 19.8255 22.3185 20.5515 21.594L22.1025 20.043C22.2046 19.941 22.2838 19.8185 22.3349 19.6836C22.386 19.5486 22.4078 19.4044 22.3988 19.2604C22.3899 19.1164 22.3504 18.9759 22.283 18.8484C22.2156 18.7208 22.1219 18.609 22.008 18.5205L18.5475 15.8295C18.4258 15.7351 18.2842 15.6696 18.1335 15.6379C17.9828 15.6062 17.8269 15.6091 17.6775 15.6465L14.3925 16.467C13.954 16.5765 13.4946 16.5707 13.059 16.4501C12.6235 16.3294 12.2266 16.098 11.907 15.7785L8.22297 12.093C7.90313 11.7735 7.67146 11.3767 7.55054 10.9411C7.42962 10.5055 7.42357 10.0461 7.53297 9.60745L8.35497 6.32245C8.39233 6.17305 8.39528 6.01711 8.36357 5.8664C8.33187 5.71569 8.26636 5.57415 8.17197 5.45245L5.48097 1.99195ZM2.82597 0.766454C3.08847 0.503878 3.40382 0.30015 3.75108 0.168796C4.09835 0.0374423 4.46959 -0.0185307 4.84015 0.00459377C5.2107 0.0277182 5.5721 0.129411 5.90035 0.302919C6.22859 0.476428 6.51616 0.717781 6.74397 1.01095L9.43497 4.46995C9.92847 5.10445 10.1025 5.93095 9.90747 6.71095L9.08697 9.99595C9.04455 10.1661 9.04684 10.3443 9.09363 10.5133C9.14041 10.6823 9.23009 10.8363 9.35397 10.9605L13.0395 14.646C13.1637 14.7701 13.318 14.8599 13.4873 14.9067C13.6566 14.9535 13.8351 14.9557 14.0055 14.913L17.289 14.0925C17.6739 13.9962 18.0757 13.9887 18.4639 14.0706C18.8521 14.1525 19.2167 14.3215 19.53 14.565L22.989 17.256C24.2325 18.2235 24.3465 20.061 23.2335 21.1725L21.6825 22.7235C20.5725 23.8335 18.9135 24.321 17.367 23.7765C13.4087 22.3837 9.81488 20.1177 6.85197 17.1465C3.88091 14.184 1.61489 10.5906 0.221974 6.63295C-0.321026 5.08795 0.166474 3.42745 1.27647 2.31745L2.82747 0.766454H2.82597Z" fill="black" fill-opacity="0.75"/>
                            </g><defs><clipPath id="clip0_18_89"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="154" height="48" viewBox="0 0 154 48" fill="none" class="substractSvg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48H154C110.687 48 110.499 35.9652 110.312 23.9478C110.125 11.9652 109.938 0 67 0H24Z" fill="#F4F4F4" fill-opacity="0.85"/>
                        </svg>
                    </a>
                </div>
                </button>
        </div>
    </div>
</div>
</template>

<style scoped>
.imgCat {
  background-image: url("imgs/cat1.png");
  background-size: contain;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Alinea el contenido en la parte inferior */
  align-items: center;
}
    
.btnForm{
    margin: 2rem 0;
    width: 327px;
    height: 48px;
}

.info{
    background-color: var(--light);
    border-radius: 25px 25px 0px 0px;
}

h1, h3{
    margin-left: 1.6rem;
}

h1{
    margin-top: 1rem;
    font-weight: 600;
    letter-spacing: 3px;
}

h3{
    color:var(--contraste);
    margin-bottom: 1rem;
    font-weight: 800;
    letter-spacing: 1px;
}
.text{
    background-color: var(--white);
    padding: 1.5rem;
    font-weight: 300;
    }
p{
    margin: 0 auto;
padding-left: 1rem;}
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