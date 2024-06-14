<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link class="navbar-brand" to=""><img src="../assets/rayoLogo.png" class="img" alt="" srcset=""></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse acomodo" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <router-link class="nav-link navDesign" to="">Home</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link navDesign" to="">Features</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link navDesign" to="">Pricing</router-link>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle navDesign" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>
                    <ul class="dropdown-menu">
                        <li><router-link class="dropdown-item navDesign" to="">Action</router-link></li>
                        <li><router-link class="dropdown-item navDesign" to="">Another action</router-link></li>
                        <li><router-link class="dropdown-item navDesign" to="">Something else here</router-link></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
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
    header nav{
        margin-left: -26px;
        width: 1910px;
    }
    .img{
        width: 50px;
        height: auto;
        margin-left: 10px;
    }
    .acomodo{
        margin-left: 75%;
    }
    .navDesign{
        cursor: pointer;
    }
    .navDesign:hover{
        background: rgba(0, 189, 126,0.2);
        text-decoration: underline;
        transition: 0.4s;
    }
</style>
  