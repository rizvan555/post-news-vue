import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    posts: []
  }),

  getters: {},

  actions: {
    async getPosts() {
      const response = await fetch('https://dummyjson.com/posts')
      const data = await response.json()
      this.posts = data
    }
  }
})
