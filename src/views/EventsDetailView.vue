<template>
  <section v-if="eventsItem">
    <h1>{{ eventsItem.title }}</h1>
    <p>{{ eventsItem.date }}</p>
    <p v-html="eventsItem.content"></p>
    <ul>
      <a :key="idx" v-for="(link, idx) in eventsItem.links" :href="link.href" target="_blank">{{
        link?.name
      }}</a>
    </ul>
  </section>
  <section v-else>
    <h1>找不到該活動 😢</h1>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import eventsList from '@/events/index'
import type { EventsItem } from '@/types/events'

const route = useRoute()
const titleQuery = route.query.title as string

const eventsItem = eventsList.find((item: EventsItem) => item.title === titleQuery)
</script>

<style scoped>
section {
  padding: 5rem;
}
</style>
