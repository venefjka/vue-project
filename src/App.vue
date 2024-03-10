<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <RouterView /> 
  <Footer />
  <!-- это представление, которое рендерит соответствующий компонент, основываясь на пути url  -->
</template>

<style>
@import '@/style/style.css';
#app {
  height: 100vh;
  width: 100vw;
  display: block;
}
</style>
