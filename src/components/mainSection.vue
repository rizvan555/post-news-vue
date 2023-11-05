<template>
  <main>
    <div class="grid grid-cols-2 mx-auto">
      <div class="grid grid-cols-1">
        <div class="flex justify-center items-center gap-4">
          <div class="flex flex-col w-[40vw] h-[30vh]">
            <p class="text-xl text-bolder">
              {{ post.title }}
            </p>
            <small>
              {{ post.body.slice(0, 250) + (post.body.length > 250 ? '...' : '') }}
            </small>
          </div>
          <div class="border w-[50vw] h-[30vh]">
            <img src="" alt="image" width="200px" height="200px" />
          </div>
        </div>
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
