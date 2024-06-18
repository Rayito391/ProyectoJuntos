<template>
    <header>
        <nav class="navbar bg-transparent">
            <router-link to=""><img src="../assets/images/NetflixLogo.png" class="img"></router-link>
            <ul class="nav justify-content-center mb-4">
                <div class="acomodo d-flex gap-2 d-md-flex justify-content-md-start">
                    <div class="dropdown">
                        <button class="btn nav-item bg-transparent border border-secondary rounded-2 btn-sm me-md-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#e8eaed" style="margin-right: 8px;"><path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"/></svg>Español
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><router-link class="dropdown-item " href="#">Español</router-link> </li>
                            <li><router-link class="dropdown-item" href="#">Inglés</router-link></li>
                        </ul>
                    </div>
                    <button type="button" class="nav-item rounded-2 btn-sesion btn-sm" data-bs-toggle="button">
                        <router-link to="">Iniciar Sesion</router-link>
                    </button>
                </div>
            </ul>
        </nav>
    </header>
  </template>
  
<script>
    import { Icon } from '@iconify/vue';
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
        color: white;
        width: 120px;
        padding: 5px;
        font-weight: 500;
    }
    .btn-sesion{
        border: 1px solid rgba(229, 9, 20, 1);
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
  