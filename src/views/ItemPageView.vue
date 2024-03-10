<script setup>
import { computed, toRaw } from 'vue'
import { mainStore } from '@/stores/main'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = mainStore()
let catalogItemsArr = toRaw(store.catalogItemsArr)

const itemId = route.params.id
let getCatalogItemById = computed(() => catalogItemsArr.find((item) => item.id == itemId))
</script>

<template>
  <main>
    <h1>Карточка товара {{ itemId }}</h1>
    <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="getCatalogItemById.src" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ getCatalogItemById.name }}</h5>
            <p class="card-text">
              {{ getCatalogItemById.desc }}
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Цена: {{ getCatalogItemById.price }}</small>
            </p>
          </div>
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
