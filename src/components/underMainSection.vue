<template>
  <div class="flex gap-2">
    <div class="w-[100px] h-[60px] border">
      <img src="" alt="image" />
    </div>
    <div class="">
      <p class="font-bold">{{ post.title }}</p>
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
