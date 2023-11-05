import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navStore', {
  state: () => ({
    navs: [
      { id: 1, name: 'World' },
      { id: 2, name: 'Business' },
      { id: 3, name: 'Arts' },
      { id: 4, name: 'Lifestyle' },
      { id: 5, name: 'Opinion' }
    ]
  }),
  getters: {},

  actions: {}
})
