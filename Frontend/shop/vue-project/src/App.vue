<template>
  <div id="app">
      <div class="background">
          <div class="overlay"></div>
          <header>
              <MenuBarView />
          </header>
          <main>
              <TheWelcome />
              <router-view />
          </main>
      </div>
  </div>
</template>

<script setup>
import MenuBarView from './views/MenuBarView.vue';
import TheWelcome from './views/TheWelcome.vue';
</script>

<style>
#app {
  background: black;
  width: 100%;
  max-width: 100%; /* Ajusta el máximo ancho según sea necesario */
  overflow-x: hidden; /* Oculta cualquier desbordamiento horizontal */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.background{
  height: 680px;
  position: relative;
  margin-top: 0;
  background-image: url('@/assets/images/netflixBackground.png');
  background-position: center;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Ajusta la opacidad según sea necesario */
  z-index: 1;
}

header, main {
  position: relative;
  z-index: 2;
}
</style>
