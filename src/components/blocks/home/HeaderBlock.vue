<template>
  <div class="frame">
    <div class="carousel-container" ref="carousel">
      <div class="columns">
        <div class="column">
          <img :src="Main_Carousel_1" />
        </div>
        <div class="column-group">
          <img :src="Main_Carousel_2" />
          <img :src="Main_Carousel_3" />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <img :src="Main_Carousel_4" />
        </div>
        <div class="column-group">
          <img :src="Main_Carousel_5" />
          <img :src="Main_Carousel_6" />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <img :src="Main_Carousel_7" />
        </div>
        <div class="column-group">
          <img :src="Main_Carousel_8" />
          <img :src="Main_Carousel_9" />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <img :src="Main_Carousel_1" />
        </div>
        <div class="column-group">
          <img :src="Main_Carousel_2" />
          <img :src="Main_Carousel_3" />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <img :src="Main_Carousel_4" />
        </div>
        <div class="column-group">
          <img :src="Main_Carousel_5" />
          <img :src="Main_Carousel_6" />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <img :src="Main_Carousel_7" />
        </div>
        <div class="column-group">
          <img :src="Main_Carousel_8" />
          <img :src="Main_Carousel_9" />
        </div>
      </div>
    </div>
    <h1 id="title">臺大獸文化交流社</h1>
  </div>
</template>

<script setup lang="ts">
import Main_Carousel_1 from '@/assets/carousel/Main_Carousel_1.jpg'
import Main_Carousel_2 from '@/assets/carousel/Main_Carousel_2.jpg'
import Main_Carousel_3 from '@/assets/carousel/Main_Carousel_3.jpg'
import Main_Carousel_4 from '@/assets/carousel/Main_Carousel_4.jpg'
import Main_Carousel_5 from '@/assets/carousel/Main_Carousel_5.jpg'
import Main_Carousel_6 from '@/assets/carousel/Main_Carousel_6.jpg'
import Main_Carousel_7 from '@/assets/carousel/Main_Carousel_7.jpg'
import Main_Carousel_8 from '@/assets/carousel/Main_Carousel_8.jpg'
import Main_Carousel_9 from '@/assets/carousel/Main_Carousel_9.png'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const carousel = ref<HTMLDivElement | null>(null)
let scrollTimer: number

onMounted(() => {
  const el = carousel.value
  if (!el) return

  scrollTimer = window.setInterval(() => {
    el.scrollLeft -= 1
    if (el.scrollLeft <= 0) {
      el.scrollLeft = el.scrollWidth - el.clientWidth
    }
  }, 7.5) // 調整數字可控制速度
})

onBeforeUnmount(() => {
  clearInterval(scrollTimer)
})
</script>

<style scoped lang="scss">
img {
  aspect-ratio: 4/3;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

div.frame {
  position: relative;
}

// 調整輪播條
div.carousel-container {
  display: flex;
  gap: 0.5rem;
  width: 100vw;
  height: 50vh;
  overflow-y: hidden;
  overflow-x: auto;
  max-width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }
}

// 調整每個 column 的排列方式
div.columns {
  width: 33vw;
  min-width: 620px;
  height: 100%;
  display: flex;
  gap: 0.5rem;
  div.column {
    display: grid;
    img {
      height: 100%;
    }
  }
  div.column-group {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 0.5rem;
  }
}

h1#title {
  background: white;
  padding: 0 0.4rem;
  font-weight: 900;
  font-size: 3.5rem;
  position: absolute;
  color: #904042;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

@media screen and (max-width: 760px) {
  h1#title {
    font-size: 11vw;
    width: 90%;
    white-space: nowrap;
  }
}
</style>
