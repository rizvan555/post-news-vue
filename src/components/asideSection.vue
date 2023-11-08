<template>
  <div class="w-[33vw]">
    <div class="flex flex-col px-3">
      <div class="h-full w-full border">
        <img :src="post.urlToImage && post.urlToImage" alt="image" />
      </div>
      <a :href="post.url" class="flex flex-col px-2 py-2">
        <p class="font-bold">{{ post.title }}</p>
        <small>{{ post.description }}</small>
      </a>
    </div>
  </div>
</template>

<script>
import { useMainStore } from '../stores/mainSection'

export default {
  props: ['post'],

  setup() {
    const allPosts = useMainStore()
    return { allPosts }
  }
}
</script>
