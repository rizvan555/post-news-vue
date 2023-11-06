<template>
  <div class="flex flex-col gap-4">
    <div class="w-full h-[10vh] border">
      <img :src="post.urlToImage" alt="image" />
    </div>
    <div class="mt-6">
      <small class="font-bold">{{ post.title }}</small>
    </div>
  </div>
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
