<template>
  <section v-if="newsItem">
    <h1>{{ newsItem.title }}</h1>
    <p>{{ newsItem.date }}</p>
    <p>{{ newsItem.content }}</p>
  </section>
  <section v-else>
    <h1>找不到該消息 😢</h1>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import newsList from '@/news/index'
import type { NewsItem } from '@/types/news'

const route = useRoute()
const titleQuery = route.query.title as string

const newsItem = newsList.find((item: NewsItem) => item.title === titleQuery)
</script>

<style scoped>
section {
  padding: 5rem;
}
</style>
