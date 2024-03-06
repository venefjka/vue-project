<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <hr>
  <RouterView /> 
  <!-- это представление, которое рендерит соответствующий компонент, основываясь на пути url  -->
</template>

<style>
#app {
  height: 100vh;
  width: 100vw;
  display: block;
}
</style>
