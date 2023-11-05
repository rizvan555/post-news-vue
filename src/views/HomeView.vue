<template>
  <header class="flex justify-center items-center">
    <div>
      <div>{{ allPosts.getNewDate }}</div>
    </div>
    <div class="container">
      <h1>The New York Times</h1>
    </div>
  </header>
  <main>
    <div>
      <div v-for="post in allPosts.posts.posts" :key="post.id">
        <tagNavigationBar :post="post"></tagNavigationBar>
      </div>
    </div>
  </main>
</template>

<script>
import navigationBar from '@/components/NavigationBar.vue'
import { useCounterStore } from '../stores/counter'

export default {
  components: {
    tagNavigationBar: navigationBar
  },
  setup() {
    const allPosts = useCounterStore()
    allPosts.getPosts()

    return { allPosts }
  }
}
</script>
