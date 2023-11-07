<template>
  <a :href="post.url" class="flex gap-2">
    <div class="w-[40vw] h-[10vh] border">
      <img :src="post.urlToImage && post.urlToImage" alt="image" />
    </div>
    <div class="flex flex-col">
      <small>
        <p class="font-bold">{{ post.title }}</p>
      </small>
      <small class="text-[10px]">{{ post.publishedAt }}</small>
    </div>
  </a>
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
