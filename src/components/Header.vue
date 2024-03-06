// components - переиспользуемые компоненты

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router' // ссылки для роутинга

const itemsMenuArr = ref([
  { name: 'Главная', path: '/' },
  { name: 'Каталог', path: 'catalog' },
  { name: 'Контакты', path: 'r' },
  { name: 'О нас', path: 't' }
])
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink v-for="(menuItem, idx) in itemsMenuArr" :key="idx" :to="menuItem.path">
        {{ menuItem.name }}
      </RouterLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  font-size: 20px;
  padding: 0 5rem;
  border-left: 1px solid var(--color-border);
  color: hsla(206.03deg 85.92% 51.92%);
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
