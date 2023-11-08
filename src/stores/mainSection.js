import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    posts: []
  }),

  getters: {
    getNewDate() {
      const date = new Date()
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },

  actions: {
    async getPosts() {
      const response = await fetch(
        'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=64b826567a8a457380cca1f368675e5c'
      )
      const data = await response.json()
      this.posts = data
    }
  }
})
