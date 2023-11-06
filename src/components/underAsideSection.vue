<template>
  <div class="w-full h-[60px] border">
    <img src="" alt="image" />
  </div>
  <div class="">
    <small class="font-bold">{{ post.title }}</small>
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
