import { ref } from 'vue'
import { defineStore } from 'pinia'

export const mainStore = defineStore('main', () => {
  const catalogItemsArr = ref([
    {
      name: 'Виниловый диск 1',
      desc: 'Описание 1',
      fullDesc: 'Подробное описание 1',
      src: '/src/assets/disk.jpg',
      price: 500,
      quality: 'Excellent (EX)',
      size: '10',
      playTime: '4:15',
      trackCount: '1',
      id: 1
    },
    {
      name: 'Виниловый диск 2',
      desc: 'Описание 2',
      fullDesc: 'Подробное описание 2',
      src: '/src/assets/disk.jpg',
      price: 1300,
      quality: 'Very good (VG)',
      size: '7',
      playTime: '3:45',
      trackCount: '1',
      id: 2
    },
    {
      name: 'Виниловый диск 3',
      desc: 'Описание 3',
      fullDesc: 'Подробное описание 3',
      src: '/src/assets/disk.jpg',
      price: 1000,
      quality: 'Poor (P)',
      size: '10',
      playTime: '15:37',
      trackCount: '4',
      id: 3
    },
    {
      name: 'Виниловый диск 4',
      desc: 'Описание 4',
      fullDesc: 'Подробное описание 4',
      src: '/src/assets/disk.jpg',
      price: 9999,
      quality: 'Mint (MT)',
      size: '12',
      playTime: '44:15',
      trackCount: '10',
      id: 4
    }
  ])
  
  return { catalogItemsArr }
})
