<template>
  <div class="sub-carousel-frame">
    <!-- 上方耳朵滾動區 -->
    <div class="carousel-container" ref="earCarousel">
      <img v-for="(src, idx) in earImages" :key="`ear-${idx}`" :src="src" />
    </div>

    <!-- 中間 slot 區 -->
    <div class="middle-slot">
      <img id="logo" :src="Logo" alt="" />
      <div id="about-text">
        <p id="description">
          本社致力於塑造一個尊重、友善、包容的空間，旨在讓對獸文化有興趣的個體能夠自由地分享經驗、聚會聯絡，並期許以通俗易懂的方式向大眾介紹獸文化。
        </p>
        <RouterLink to="/about" @mouseenter="isHover = true" @mouseleave="isHover = false">
          <p>了解我們</p>
          <GoLefttIcon v-show="!isHover" class="go-left-icon" />
          <PawRightIcon v-show="isHover" class="go-left-icon" />
        </RouterLink>
      </div>
    </div>

    <!-- 下方尾巴滾動區 -->
    <div class="carousel-container" ref="tailCarousel">
      <img v-for="(src, idx) in tailImages" :key="`tail-${idx}`" :src="src" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import Logo from '@/assets/logo.png'

import GoLefttIcon from '@/assets/icons/icon_Go_Left.svg'
import PawRightIcon from '@/assets/icons/icon_Paw_Right.svg'

import Ear_1 from '@/assets/subcarousel/Main_Carousel_Ear_1.png'
import Ear_2 from '@/assets/subcarousel/Main_Carousel_Ear_2.png'
import Ear_3 from '@/assets/subcarousel/Main_Carousel_Ear_3.png'
import Ear_4 from '@/assets/subcarousel/Main_Carousel_Ear_4.png'
import Tail_1 from '@/assets/subcarousel/Main_Carousel_Tail_1.png'
import Tail_2 from '@/assets/subcarousel/Main_Carousel_Tail_2.png'
import Tail_3 from '@/assets/subcarousel/Main_Carousel_Tail_3.png'
import Tail_4 from '@/assets/subcarousel/Main_Carousel_Tail_4.png'

const isHover = ref(false)
const earCarousel = ref<HTMLDivElement | null>(null)
const tailCarousel = ref<HTMLDivElement | null>(null)

const baseEarImages = [Ear_1, Ear_2, Ear_3, Ear_4]
const baseTailImages = [Tail_1, Tail_2, Tail_3, Tail_4]

const earImages = ref<string[]>([])
const tailImages = ref<string[]>([])

onMounted(() => {
  const fillImages = (baseImages: string[], container: HTMLDivElement) => {
    const imgWidth = container.clientHeight // 因為 aspect-ratio: 1/1
    const gaps = 16 // 1rem = 16px
    const count = Math.ceil(container.clientWidth / (imgWidth + gaps)) + 4 // 多幾個避免卡住
    return Array(count).fill(baseImages).flat()
  }

  if (earCarousel.value) {
    earImages.value = fillImages(baseEarImages, earCarousel.value)
  }
  if (tailCarousel.value) {
    tailImages.value = fillImages(baseTailImages, tailCarousel.value)
  }

  // 開始滾動
  window.setInterval(() => {
    const el = earCarousel.value!
    el.scrollLeft += 1
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
      el.scrollLeft = 0
    }
  }, 20)

  window.setInterval(() => {
    const el = tailCarousel.value!
    el.scrollLeft -= 1
    if (el.scrollLeft <= 0) {
      el.scrollLeft = el.scrollWidth - el.clientWidth
    }
  }, 20)
})
</script>

<style scoped lang="scss">
.sub-carousel-frame {
  display: flex;
  flex-direction: column;
}

.carousel-container {
  display: flex;
  gap: 1rem;
  width: 100vw;
  max-width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 10vh;
  scroll-behavior: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    aspect-ratio: 2/1;
    height: 100%;
    object-fit: contain;
  }
}

.middle-slot {
  margin: 1rem 0;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  img#logo {
    aspect-ratio: 1/1;
    width: 10vw;
  }
  div#about-text {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p#description {
      font-size: 1.3rem;
      font-weight: 500;
      max-width: 24rem;
    }
    a {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #904042;
      font-weight: 700;
      font-size: 1.4rem;
      width: max-content;
      .go-left-icon {
        height: 100%;
        display: flex;
        align-items: center;
        width: 1.5rem;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -0.4rem;
        left: 0;
        height: 0.3rem;
        width: 0;
        background: #904042;
        transition: width 0.27s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .middle-slot {
    margin: 8rem 0;
    flex-direction: column;
    img#logo {
      aspect-ratio: 1/1;
      width: 40vw;
    }
    div#about-text {
      align-items: center;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
}
</style>
