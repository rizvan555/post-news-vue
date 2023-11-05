<template>
  <div>
    <p>{{ post.tags }}</p>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter'

export default {
  props: ['post'],
  setup() {
    const allPosts = useCounterStore()

    return { allPosts }
  }
}
</script>
