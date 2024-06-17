<script setup>
  import {RouterView} from 'vue-router'
  import MenuBarView from "./views/MenuBarView.vue";
  import TheWelcome from "./views/TheWelcome.vue";
</script>

<template>
  <header>
    <MenuBarView/>
    <TheWelcome/>
  </header>
  <RouterView/>
</template>
<style scoped>

</style>