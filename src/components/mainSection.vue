<template>
  <main class="w-full">
    <div class="flex justify-between">
      <div class="grid grid-cols-1 w-[60vw]">
        <div class="flex justify-center gap-4 pb-6 mb-8">
          <div class="flex flex-col w-[40vw] h-[30vh]">
            <p class="text-xl font-bold mb-6">
              {{ post.title }}
            </p>
            <small>
              {{ post.content.slice(0, 300) + (post.content.length > 300 ? '...' : '') }}
            </small>
          </div>
          <div class="border w-[60vw] h-[30vh]">
            <img :src="post.urlToImage && post.urlToImage" alt="image" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  </main>
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
