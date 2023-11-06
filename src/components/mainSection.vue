<template>
  <main class="w-full">
    <div class="flex justify-between">
      <div class="grid grid-cols-1 w-[60vw]">
        <div class="flex justify-center gap-4 pb-6">
          <div class="flex flex-col w-[40vw] h-[30vh]" v-if="post.id === 1">
            <p class="text-xl font-bold mb-6" v-if="post.tags.includes('crime') && post.id === 1">
              {{ post.title }}
            </p>
            <small v-if="post.tags.includes('crime') && post.id === 1">
              {{ post.body.slice(0, 300) + (post.body.length > 300 ? '...' : '') }}
            </small>
          </div>
          <div class="border w-[60vw] h-[40vh]">
            <img src="" alt="image" width="200px" height="200px" />
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
