<template>
    <header>
        <nav class="navbar bg-transparent" style="border: 1px solid red;">
            <router-link to=""><img src="../assets/images/NetflixLogo.png" class="img"></router-link>
            <ul class="nav justify-content-center mb-4">
                <div class="acomodo d-flex gap-2 d-md-flex justify-content-md-start">
                    <div class="dropdown">
                        <button class="btn nav-item bg-transparent border rounded-2 btn-sm me-md-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <Icon icon="mdi:language"  style="color: white" />Español
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><router-link class="dropdown-item " href="#">Español</router-link> </li>
                            <li><router-link class="dropdown-item" href="#">Inglés</router-link></li>
                        </ul>
                    </div>
                    <button type="button" class="nav-item border rounded-2 btn-sesion btn-sm" data-bs-toggle="button">
                        <router-link to="">Iniciar Sesion</router-link>
                    </button>
                </div>
            </ul>
        </nav>
    </header>
    
  </template>
  
<script>
    import { Icon } from '@iconify/vue'
    export default {
        name: 'MenuBarView'
    }
</script>
  
<style scoped>
    nav{
        width: 1920px;
        margin-left: 0px
    }
    nav ul li{
        display: inline-block;
    }
    nav .acomodo{
        margin-left: -300%;
    }
    nav button{
        width: 120px;
        padding: 5px;
        font-weight: bold;
    }
    .btn-sesion{
        font-size: small;
        background-color: rgba(229, 9, 20, 1);
        color: white;
        transition: .2s ease-in-out;
    }
    .btn-sesion:hover{
        background-color: rgb(197, 16, 25);
        color: white;
        text-decoration: underline
    }
    nav .img{
        width: 190px;
        height: auto;
        margin-left: 180%;
        margin-top: -20px;
    }


</style>
  