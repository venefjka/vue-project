<script setup>
import { computed, toRaw } from 'vue'
import { mainStore } from '@/stores/main'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = mainStore()
let catalogItemsArr = toRaw(store.catalogItemsArr)

const itemId = route.params.id
let getCatalogItemById = computed(() => catalogItemsArr.find((item) => item.id == itemId))

function onImgClick() {
  window.open(`${window.location.origin}${getCatalogItemById.value.src}`, '_blank')
}
</script>

<template>
  <main>
    <h1>Карточка товара {{ itemId }}</h1>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="getCatalogItemById.src"
            @click="onImgClick"
            class="img img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{ getCatalogItemById.name }}</h2>
            <div class="card-text">
              <h3>Краткое описание:</h3>
              <span class="description">{{ getCatalogItemById.desc }}</span>
            </div>
            <div class="card-text">
              <h3>Подробное описание:</h3>
              <span class="full-description">{{ getCatalogItemById.fullDesc }}</span>
            </div>
            <div class="card-text">
              <h3>Цена:</h3>
              <span class="full-description">{{ getCatalogItemById.price }} руб.</span>
            </div>
            <div class="card-text params">
              <h3>Характеристики:</h3>
              <ul>
                <li>Оценка состояния винила - {{ getCatalogItemById.quality }}</li>
                <li>Размер - {{ getCatalogItemById.size }} дюймов</li>
                <li>Количество треков - {{ getCatalogItemById.trackCount }}</li>
                <li>Длительность - {{ getCatalogItemById.playTime }}</li>
              </ul>
            </div>
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
.card-body {
  .card-title {
    margin-bottom: 30px;
  }
  .card-text {
    margin-bottom: 10px;
    font-weight: 400;
  }
  .card-text .description {
    color: hsl(206.03, 85.92%, 51.92%);
    font-size: 14px;
    font-style: italic;
    line-height: 16px;
  }
  .card-text .full-description {
    color: hsl(206.03, 85.92%, 51.92%);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }
  .card-text.params ul {
    font-size: 15px;
    font-family: monospace;
    margin-top: 0.5rem;
    li {
        list-style-image: url(/src/assets/disc.svg);
    }
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    display: inline;
    font-size: 18px;
    margin-right: 5px;
  }
}
.img {
  cursor: pointer;
}
main .card {
  margin-top: 1rem;
  background-color: #ffffffb8;
}
</style>
