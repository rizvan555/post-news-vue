<template>
  <div class="flex flex-col gap-4 px-10 pb-10">
    <header class="flex justify-center items-center px-10 py-6">
      <div class="">
        <h6 class="w-[15vw] font-bold text-[12px] ml-[-30vw]">
          {{ allPosts.getNewDate }}
          <small class="font-medium">Today's Paper</small>
        </h6>
      </div>
      <div class="">
        <h1 class="text-4xl my-8 name">The New York Times</h1>
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
        <div class="flex flex-col w-[60vw] px-2">
          <Carousel :autoplay="3000" :wrap-around="true" slideWidth="100vw">
            <Slide v-for="post in allPosts.posts.articles.slice(3, 13)" :key="post.id">
              <tagMainSection :post="post"></tagMainSection>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>

          <div class="flex gap-2 py-3">
            <div
              class="w-[28vw] px-2 border-r"
              v-for="post in allPosts.posts.articles
                .filter((post) => post.author === 'wsj')
                .slice(0, 1)"
              :key="post.id"
            >
              <tagUnderMainSection :post="post"></tagUnderMainSection>
            </div>

            <div
              class="w-[28vw] px-2"
              v-for="post in allPosts.posts.articles
                .filter((post) => post.author === 'wsj')
                .slice(2, 3)"
              :key="post.id"
            >
              <tagUnderMainSection :post="post"></tagUnderMainSection>
            </div>
          </div>
          <div class="border-b-2 border-black py-2"></div>

          <div class="mt-2">
            <div v-for="post in allPosts.posts.articles.slice(20, 30)" :key="post.id">
              <tagMainSection :post="post"></tagMainSection>
            </div>
          </div>
        </div>

        <div class="flex flex-col border-l-2 px-2">
          <div
            class=""
            v-for="post in allPosts.posts.articles
              .filter((post) => post.author === 'Nick Kostov')
              .slice(0, 1)"
            :key="post.id"
          >
            <tagAsideSection :post="post"></tagAsideSection>
          </div>
          <hr />

          <div class="grid grid-cols-2 py-4 gap-4">
            <div
              v-for="post in allPosts.posts.articles
                .filter((post) => post.author === 'Alexandra Bruell')
                .slice(0, 1)"
              :key="post.id"
            >
              <tagUnderAsideSection :post="post"></tagUnderAsideSection>
            </div>

            <div
              v-for="post in allPosts.posts.articles
                .filter((post) => post.author === 'Ken Thomas')
                .slice(0, 1)"
              :key="post.id"
            >
              <tagUnderAsideSection :post="post"></tagUnderAsideSection>
            </div>
          </div>
          <div class="border-b border-black"></div>

          <div class="" v-for="post in allPosts.posts.articles.slice(1, 10)" :key="post.id">
            <tagAuthorAsideSection :post="post"></tagAuthorAsideSection>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useNavbarStore } from '../stores/navbar'
import { useMainStore } from '../stores/mainSection'
import navigationBar from '@/components/NavigationBar.vue'
import mainSection from '@/components/MainSection.vue'
import asideSection from '@/components/AsideSection.vue'
import underAsideSection from '@/components/UnderAsideSection.vue'
import underMainSection from '@/components/UnderMainSection.vue'
import AuthorAsideSection from '../components/authorAsideSection.vue'

import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'AutoplayButton',
  components: {
    tagNavigationBar: navigationBar,
    tagMainSection: mainSection,
    tagAsideSection: asideSection,
    tagUnderAsideSection: underAsideSection,
    tagUnderMainSection: underMainSection,
    tagAuthorAsideSection: AuthorAsideSection,
    Carousel,
    Slide,
    Pagination
  },
  setup() {
    const allPosts = useMainStore()
    allPosts.getPosts()

    const allNavs = useNavbarStore()

    return { allPosts, allNavs }
  }
}
</script>
