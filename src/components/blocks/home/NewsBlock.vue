<template>
  <section id="news">
    <div id="title-area">
      <p>最新消息</p>
    </div>
    <section id="news-list">
      <div id="news-container">
        <RouterLink
          v-for="(news, index) in newsListLatest"
          :key="index"
          class="news-item"
          :to="{ path: '/news/detail', query: { title: news.title } }"
        >
          <p class="news-date">{{ news.date }}</p>
          <p class="news-title">{{ news.title }}</p>
        </RouterLink>
      </div>
      <RouterLink to="/news" @mouseenter="isHover = true" @mouseleave="isHover = false">
        <p>查看更多</p>
        <GoLefttIcon v-show="!isHover" class="go-left-icon" />
        <PawRightIcon v-show="isHover" class="go-left-icon" />
      </RouterLink>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NewsItem } from '@/types/news'

import newsList from '@/news/index'

import GoLefttIcon from '@/assets/icons/icon_Go_Left.svg'
import PawRightIcon from '@/assets/icons/icon_Paw_Right.svg'

const isHover = ref(false)

const newsListLatest = newsList.slice(0, 4).map((item: NewsItem) => ({
  title: item.title,
  date: item.date,
}))
</script>

<style scoped lang="scss">
section#news {
  display: grid;
  grid-template-columns: 1fr 11fr;
  align-items: start;
  justify-items: start;
  padding: 5rem 10rem;
  div#title-area {
    border-left: 0.5rem solid #904042;
    padding-left: 0.5rem;
    p {
      width: min-content;
      font-size: 3rem;
      font-weight: 900;
      line-height: 3.6rem;
    }
  }
  section#news-list {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    width: 100%;
    div#news-container {
      a.news-item {
        border-top: 4px solid #904042;
        display: flex;
        align-items: center;
        p {
          font-size: 1.2rem;
          font-weight: 500;
          padding: 1.6rem 1.4rem;
        }

        &:last-child {
          border-bottom: 4px solid #904042;
        }

        &:hover {
          cursor: pointer;
          background: #904042;
          color: white;
        }
      }
    }
    > a {
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
  section#news {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    row-gap: 3rem;
    div#title-area {
      border: none;
      border-bottom: 0.5rem solid #904042;
      padding-bottom: 0.5rem;
      p {
        width: 100%;
      }
    }
    section#news-list {
      align-items: center;
      div#news-container {
        width: 100%;
        a.news-item {
          padding: 1rem;
          flex-direction: column;
          align-items: flex-start;
          p {
            padding: 0;
            &.news-date {
              font-size: 0.8rem;
            }
            &.news-title {
              margin-top: 0.2rem;
              font-size: 1.1rem;
            }
          }
        }
      }
    }
  }
}
</style>
