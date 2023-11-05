<template>
  <div class="flex justify-center items-center gap-2">
    <a href="#">
      {{ nav.name }}
    </a>
    <img src="../assets/icons/caret-down.svg" alt="" />
  </div>
</template>

<script>
import { useNavbarStore } from '../stores/navbar'

export default {
  props: ['nav'],

  setup() {
    const allNavs = useNavbarStore()

    return { allNavs }
  }
}
</script>
