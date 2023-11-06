<template>
  <div class="flex gap-2">
    <div class="w-[40vw] h-[10vh] border">
      <img :src="post.urlToImage && post.urlToImage" alt="image" />
    </div>
    <small class="">
      <a href="#" class="font-bold">{{ post.title }}</a>
    </small>
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
