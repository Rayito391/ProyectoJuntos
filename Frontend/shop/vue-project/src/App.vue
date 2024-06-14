<script setup>
  import {RouterView} from 'vue-router'
  import MenuBarView from "./views/MenuBarView.vue";
</script>

<template>
  <header>
    <MenuBarView/>
  </header>
  <RouterView/>
</template>