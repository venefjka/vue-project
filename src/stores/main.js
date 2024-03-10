import { ref } from 'vue'
import { defineStore } from 'pinia'

export const mainStore = defineStore('main', () => {
  const catalogItemsArr = ref([
    {
      name: 'Виниловый диск 1',
      desc: 'Описание 1',
      src: '/src/assets/disk.jpg',
      price: 500,
      id: 1
    },
    {
      name: 'Виниловый диск 2',
      desc: 'Описание 2',
      src: '/src/assets/disk.jpg',
      price: 1300,
      id: 2
    },
    {
      name: 'Виниловый диск 3',
      desc: 'Описание 3',
      src: '/src/assets/disk.jpg',
      price: 1000,
      id: 3
    },
    {
      name: 'Виниловый диск 4',
      desc: 'Описание 4',
      src: '/src/assets/disk.jpg',
      price: 9999,
      id: 4
    }
  ])
  
  return { catalogItemsArr }
})
