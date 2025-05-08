<template>
  <section id="news">
    <div id="title-area">
      <p>所有公告</p>
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
    </section>
  </section>
</template>

<script setup lang="ts">
import newsList from '@/news/index'
import type { NewsItem } from '@/types/news'

const newsListLatest = newsList.map((item: NewsItem) => ({
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
  padding: 3rem 10rem;
  width: 100%;
  position: relative;
  div#title-area {
    position: sticky;
    top: 7rem;
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
      position: relative;
      top: 0;
      background: white;
      border: none;
      border-bottom: 0.5rem solid #904042;
      padding-bottom: 0.5rem;
      p {
        width: 100%;
      }
    }
    section#news-list {
      div#news-container {
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
