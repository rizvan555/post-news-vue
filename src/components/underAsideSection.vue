<template>
  <a :href="post.url" class="flex flex-col gap-4">
    <div class="w-full h-[10vh] border">
      <img :src="post.urlToImage" alt="image" />
    </div>
    <div class="mt-6">
      <p class="font-bold leading-1">{{ post.title }}</p>
    </div>
    <small class="text-[10px]">{{ post.publishedAt }}</small>
  </a>
</template>

<script>
import { useUnderAsideStore } from '../stores/underAsideSection'

export default {
  props: ['post'],

  setup() {
    const allPosts = useUnderAsideStore()
    return { allPosts }
  }
}
</script>
