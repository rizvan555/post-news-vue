<template>
  <main class="w-full">
    <div class="flex justify-between">
      <div class="grid grid-cols-1 w-[62vw]">
        <div class="flex justify-center gap-4 pb-6">
          <div class="flex flex-col w-[40vw] h-[30vh]" v-if="post.id === 1">
            <p class="text-xl text-bolder mb-6" v-if="post.tags.includes('crime') && post.id === 1">
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

        <div class="grid grid-cols-2 py-3">
          <div class="flex w-[50vw]">
            <div class="border w-[8vw] h-[10vh]">
              <img src="" alt="image" width="50px" height="50px" />
            </div>
            <a
              href="#"
              class="px-4 border-r text-bolder"
              v-if="post.id === 1 && post.tags.includes('crime')"
              >{{ post.title }}</a
            >
          </div>

          <div class="flex w-[50vw]">
            <div class="border w-[8vw] h-[10vh]">
              <img src="" alt="image" width="50px" height="50px" />
            </div>
            <a
              href="#"
              class="px-4 text-bolder"
              v-if="post.id === 1 && post.tags.includes('crime')"
              >{{ post.title }}</a
            >
          </div>
        </div>
        <div class="border-b-2 border-black"></div>
      </div>
      <div class="border w-[30vw]">2</div>
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
