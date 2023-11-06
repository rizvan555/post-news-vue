<template>
  <div class="w-[30vw]">
    <div class="flex flex-col p-3">
      <div class="h-[40vh] border px-2">
        <img src="" alt="image" />
      </div>
      <div class="px-2 py-2">
        <p class="font-bold">{{ post.title }}</p>
        <small>{{ post.body }}</small>
      </div>
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
