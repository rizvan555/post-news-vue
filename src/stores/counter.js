import { defineStore } from 'pinia'

export const useCounterStore = defineStore('postStore', {
  state: () => ({
    posts: []
  }),
  getters: {
    getNewDate() {
      return new Date()
    }
  },

  actions: {
    async getPosts() {
      const response = await fetch('https://dummyjson.com/posts')
      const data = await response.json()
      this.posts = data
    }
  }
})
