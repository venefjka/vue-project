<script setup>
import { ref } from 'vue'

let catalogItemsArr = ref([
  {
    name: 'Виниловый диск',
    desc: 'Описание',
    src: '/src/assets/disk.jpg'
  },
  {
    name: 'Виниловый диск',
    desc: 'Описание',
    src: '/src/assets/disk.jpg'
  },
  {
    name: 'Виниловый диск',
    desc: 'Описание',
    src: '/src/assets/disk.jpg'
  },
  {
    name: 'Виниловый диск',
    desc: 'Описание',
    src: '/src/assets/disk.jpg'
  }
])
</script>

<template>
  <main>
    <h1>Каталог</h1>
    <div class="catalog-container">
      <div v-for="(item, idx) in catalogItemsArr" :key="idx" class="card" style="width: 18rem">
        <img :src="item.src" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">
            {{ item.desc }}
          </p>
          <a href="#" class="btn btn-primary">Подробнее</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 15px;
}
.catalog-container {
  display: flex;
  flex-wrap: wrap;
  .card {
    margin: 0px 15px 15px 0px;
  }
}
</style>
