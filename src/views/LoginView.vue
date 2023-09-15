<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="loginView">
        <img src="/imgs/Logo_texto.png" alt="Logo Huellitas" class="logoLogin">
        <form class="form">
            <div class="formInput">
                <input type="text" placeholder="Usuario">
                <input type="text" placeholder="Contraseña">
            </div>
            <span>¿Has olvidado la contraseña?</span>
            <RouterLink to="/">
                <button type="submit" class="btnForm">
                    <div class="btnForm_Group12">
                        <p class="loginText">LOGIN</p>
                    </div>
                    <div class="btnForm_Group11">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" class="arrowSvg">
                        <g opacity="0.75">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 16C2 15.7348 2.10536 15.4805 2.29289 15.2929C2.48043 15.1054 2.73478 15 3 15H26.586L20.292 8.70804C20.1042 8.52027 19.9987 8.26559 19.9987 8.00004C19.9987 7.73449 20.1042 7.47982 20.292 7.29204C20.4798 7.10427 20.7344 6.99878 21 6.99878C21.2656 6.99878 21.5202 7.10427 21.708 7.29204L29.708 15.292C29.8011 15.3849 29.875 15.4953 29.9254 15.6168C29.9758 15.7383 30.0018 15.8685 30.0018 16C30.0018 16.1316 29.9758 16.2618 29.9254 16.3833C29.875 16.5048 29.8011 16.6152 29.708 16.708L21.708 24.708C21.5202 24.8958 21.2656 25.0013 21 25.0013C20.7344 25.0013 20.4798 24.8958 20.292 24.708C20.1042 24.5203 19.9987 24.2656 19.9987 24C19.9987 23.7345 20.1042 23.4798 20.292 23.292L26.586 17H3C2.73478 17 2.48043 16.8947 2.29289 16.7071C2.10536 16.5196 2 16.2653 2 16Z" fill="black"/>
                        </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="154" height="48" viewBox="0 0 154 48" fill="none" class="substractSvg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48H154C110.687 48 110.499 35.9652 110.312 23.9478C110.125 11.9652 109.938 0 67 0H24Z" fill="#F4F4F4" fill-opacity="0.85"/>
                        </svg>
                    </div>
                </button>
            </RouterLink>
        </form>
        <span class="spanLogin">¿No tienes cuenta? <strong>Regístrate</strong></span>
    </div>
</template>

<style scoped>
.loginView {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("/imgs/bg_loginView.jpeg");
}

.logoLogin{
    margin: 3rem 0;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.formInput{
    display: flex;
    width: 327px;
    height: 221px;
    padding: 48px 24px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
    border-radius: 16px;
    border: 2px solid rgba(255, 255, 255, 0.50);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
}

.formInput input{
    display: flex;
    padding: 12px 19px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 0px 8px 8px 0px;
    border-left: 4px solid var(--contraste);
    background: rgba(255, 255, 255, 0.75);
}
.form span{
    align-self: flex-end;
    margin-top: 0.7rem;
    color: var(--light);
    font-size: 12px;
    font-weight: 600;
}
.btnForm{
    margin: 2rem 0;
    width: 327px;
    height: 48px;
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
    font-weight: 500;
    letter-spacing: 0.8px;
}

.loginText:hover {
    letter-spacing: 1.8px;
}
.btnForm_Group11{
    width: 100px;
    height: 48px;
    flex-shrink: 0;
}

.arrowSvg{
    position: relative;
    top: -38px;
    left: 10px;
    z-index: 3;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
}

.arrowSvg:hover{
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

.spanLogin{
    margin: 1rem 0;
    padding: 2rem 0;
    border-top: 1px solid var(--white);
    width: 100%;
    color: var(--light);
    text-align: center;
    font-size: 12px;
    font-weight: 400;
}

.spanLogin strong{
    color: var(--light);
    font-size: 12px;
    font-weight: 600;
}
</style>
