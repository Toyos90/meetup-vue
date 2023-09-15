<script>
</script>

<template>
  <footer class="footer">
    <div id="icons">
        <div class="icon">
            <img width="40" height="40" src="../assets/images/esquema-de-la-casa.png"/>
            <p>Inicio</p>
        </div><br/>
        <div class="icon">
            <img width="40" height="40" src="../assets/images/chat.png">
            <p>Chat</p>
        </div><br/>
        <div class="icon">
            <img width="40" height="40" src="../assets/images/corazon.png">
            <p>Favoritos</p>
        </div>
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
    flex-direction: row;
}
.icon{
    display:flex;
    flex-direction: column;
    justify-items: center;
    margin: 5px 35px;
    
}




</style>