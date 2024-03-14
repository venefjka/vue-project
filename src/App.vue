<script setup>
import { RouterView } from 'vue-router'
import Header from './components/TheHeader.vue'
import Footer from './components/TheFooter.vue'
</script>

<template>
  <Header />
  <RouterView /> 
  <!-- это представление, которое рендерит соответствующий компонент, основываясь на пути url  -->
  <Footer />
</template>

<style>
@import '@/style/style.css';
#app {
  height: 100vh;
  width: 100vw;
  display: block;
}
</style>
