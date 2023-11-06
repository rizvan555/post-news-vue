<template>
  <div class="flex flex-col gap-4 px-10 pb-10">
    <header class="flex justify-between items-center px-10 py-6">
      <div>
        <div>{{ allPosts.getNewDate }}</div>
      </div>
      <div class="container">
        <h1 class="text-4xl text-center my-8 name">The New York Times</h1>
      </div>
    </header>

    <section class="flex gap-10 justify-center items-center">
      <div v-for="nav in allNavs.navs" :key="nav.id">
        <tagNavigationBar :nav="nav"></tagNavigationBar>
      </div>
    </section>
    <div class="border border-b-1"></div>

    <main>
      <div class="flex justify-between w-100%">
        <div class="flex flex-col">
          <div class="" v-for="post in allPosts.posts.posts.slice(0, 1)" :key="post.id">
            <tagMainSection :post="post"></tagMainSection>
          </div>

          <div class="flex gap-2 py-3">
            <div
              class="w-[28vw] px-2 border-r"
              v-for="post in allPosts.posts.posts
                .filter((post) => post.tags.includes('crime'))
                .slice(2, 3)"
              :key="post.id"
            >
              <tagUnderMainSection :post="post"></tagUnderMainSection>
            </div>

            <div
              class="w-[28vw] px-2"
              v-for="post in allPosts.posts.posts
                .filter((post) => post.tags.includes('crime'))
                .slice(4, 5)"
              :key="post.id"
            >
              <tagUnderMainSection :post="post"></tagUnderMainSection>
            </div>
          </div>
          <div class="border-b-2 border-black py-2"></div>
        </div>

        <div class="flex flex-col border-l-2 px-2">
          <div
            class=""
            v-for="post in allPosts.posts.posts
              .filter((post) => post.tags.includes('love'))
              .slice(0, 1)"
            :key="post.id"
          >
            <tagAsideSection :post="post"></tagAsideSection>
          </div>
          <hr />

          <div class="grid grid-cols-2 py-4">
            <div
              class="w-[15vw] px-1"
              v-for="post in allPosts.posts.posts
                .filter((post) => post.tags.includes('love'))
                .slice(2, 3)"
              :key="post.id"
            >
              <tagUnderAsideSection :post="post"></tagUnderAsideSection>
            </div>

            <div
              class="w-[15vw] px-1"
              v-for="post in allPosts.posts.posts
                .filter((post) => post.tags.includes('love'))
                .slice(3, 4)"
              :key="post.id"
            >
              <tagUnderAsideSection :post="post"></tagUnderAsideSection>
            </div>
          </div>
          <div class="border-b border-black"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import navigationBar from '@/components/NavigationBar.vue'
import mainSection from '@/components/MainSection.vue'
import asideSection from '@/components/AsideSection.vue'
import underAsideSection from '@/components/UnderAsideSection.vue'
import underMainSection from '@/components/UnderMainSection.vue'
import { useNavbarStore } from '../stores/navbar'
import { useMainStore } from '../stores/mainSection'

export default {
  components: {
    tagNavigationBar: navigationBar,
    tagMainSection: mainSection,
    tagAsideSection: asideSection,
    tagUnderAsideSection: underAsideSection,
    tagUnderMainSection: underMainSection
  },
  setup() {
    const allPosts = useMainStore()
    allPosts.getPosts()

    const allNavs = useNavbarStore()

    return { allPosts, allNavs }
  }
}
</script>
