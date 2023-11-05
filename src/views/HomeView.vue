<template>
  <div class="flex flex-col gap-4 px-10">
    <header class="flex justify-between items-center px-10 py-6">
      <div>
        <div>{{ allPosts.getNewDate }}</div>
      </div>
      <div class="container">
        <h1 class="text-4xl name">The New York Times</h1>
      </div>
    </header>

    <section class="flex gap-10 justify-center items-center">
      <div v-for="nav in allNavs.navs" :key="nav.id">
        <tagNavigationBar :nav="nav"></tagNavigationBar>
      </div>
    </section>
    <div class="border border-b-1"></div>

    <main v-for="post in allPosts.posts.posts" :key="post.id">
      <tagMainSection :post="post"></tagMainSection>
    </main>
  </div>
</template>

<script>
import navigationBar from '@/components/NavigationBar.vue'
import mainSection from '@/components/MainSection.vue'
import { useNavbarStore } from '../stores/navbar'
import { useMainStore } from '../stores/mainSection'

export default {
  components: {
    tagNavigationBar: navigationBar,
    tagMainSection: mainSection
  },
  setup() {
    const allPosts = useMainStore()
    allPosts.getPosts()

    const allNavs = useNavbarStore()

    return { allPosts, allNavs }
  }
}
</script>
