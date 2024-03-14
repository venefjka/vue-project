<script setup>
// components - переиспользуемые компоненты
import { ref } from 'vue'
import { RouterLink } from 'vue-router' // ссылки для роутинга

const itemsMenuArr = ref([
  { name: 'Главная', path: '/' },
  { name: 'Каталог', path: '/catalog' },
  { name: 'Контакты', path: '/contacts' },
  { name: 'О нас', path: '/info' }
])
</script>

<template>
  <div class="wrapper">
    <div class="site-name">Vinil shop</div>
    <nav>
      <RouterLink v-for="(menuItem, idx) in itemsMenuArr" :key="idx" :to="{ path: `${menuItem.path}`}" >
        {{ menuItem.name }}
      </RouterLink>
    </nav>
  </div>
  <hr>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  .site-name {
    width: 30%;
    display: flex;
    align-self: center;
    font-size: 20px;
    font-weight: bold;
  }
}

nav {
  width: 70%;
  text-align: center;
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
  padding: 0 2.5rem;
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
    padding: 1rem 0;
    margin-top: 1rem;
  }

}
</style>
