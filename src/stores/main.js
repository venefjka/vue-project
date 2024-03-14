import { ref } from 'vue'
import { defineStore } from 'pinia'

export const mainStore = defineStore('main', () => {
  const catalogItemsArr = ref([
    {
      name: 'Red Hot Chili Peppers - Californication',
      desc: 'альбом, Special 20th Anniversary Limited Edition Picture Disc',
      fullDesc:
        'альтернатива, рок - Warner Bros., Warner Music - Седьмой студийный альбом американской рок-группы RHCP, выпущенный 8 июня 1999 года.',
      src: '/src/assets/californication.jpg',
      price: 4500,
      quality: 'Mint (MT)',
      size: '10',
      playTime: '56:24',
      trackCount: '15',
      id: 1
    },
    {
      name: 'Massive Attack - Mezzanine',
      desc: 'альбом, Deluxe Edition',
      fullDesc:
        'трип-хоп - Virgin Records - Третий студийный альбом бристольского трио Massive Attack, вышедший в 1998 году.',
      src: '/src/assets/mezzanine.jpg',
      price: 5790,
      quality: 'Excellent (EX)',
      size: '12',
      playTime: '63:29',
      trackCount: '11',
      id: 2
    },
    {
      name: 'Radiohead - Kid A',
      desc: 'альбом',
      fullDesc:
        'электроника, экспериментальный рок - XL Recordings Ltd. - Четвёртый студийный альбом британской рок-группы Radiohead, выпущенный в 2000 году.',
      src: '/src/assets/kid_a.png',
      price: 5250,
      quality: 'Very good (VG)',
      size: '7',
      playTime: '49:56',
      trackCount: '10',
      id: 3
    },
    {
      name: 'Slint - Spiderland',
      desc: 'альбом, Remastered Edition',
      fullDesc:
        'построк, мат-рок - Touch & Go Records - Второй и последний студийный альбом американской рок-группы Slint, выпущенный 27 марта 1991 года.',
      src: '/src/assets/spiderland.jpg',
      price: 6190,
      quality: 'Still Sealed (SS)',
      size: '12',
      playTime: '39:32',
      trackCount: '6',
      id: 4
    }
  ])

  return { catalogItemsArr }
})
