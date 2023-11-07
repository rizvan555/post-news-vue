<template>
  <a :href="post.url" class="flex justify-center items-center gap-3">
    <div class="w-[20vw] py-2">
      <small class="text-slate-500 font-bold">{{ post.author }}</small>
      <h4 class="mt-2">{{ post.title }}</h4>
      <small class="text-[10px]">{{ post.publishedAt }}</small>
    </div>
    <div class="w-[10vw] h-[10vh]">
      <img :src="post.urlToImage" alt="image" />
    </div>
  </a>
  <hr />
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
