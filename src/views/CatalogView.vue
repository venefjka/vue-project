<script setup>
import { mainStore } from '@/stores/main'

const store = mainStore()
let catalogItemsArr = store.catalogItemsArr
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
          <RouterLink :to="`/catalog/item/${item.id}`" class="btn btn-primary">Подробнее</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
h1 {
  margin-top: 15px;
}
.catalog-container {
  display: flex;
  flex-wrap: wrap;
  .card {
    margin: 0px 15px 15px 0px;
    .card-body {
      display: grid;
      .btn {
        margin-top: auto;
        width: 130px;
      }
    }
  }
}
</style>
