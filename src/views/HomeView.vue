<script setup lang="ts">
import HeaderBlock from '../components/blocks/home/HeaderBlock.vue'
import AboutBlock from '../components/blocks/home/AboutBlock.vue'
import NewsBlock from '../components/blocks/home/NewsBlock.vue'
import EventsBlock from '../components/blocks/home/EventsBlock.vue'
</script>

<template>
  <main>
    <!-- 輪播 -->
    <HeaderBlock />
    <!-- 介紹區 -->
    <AboutBlock />
    <!-- 最新消息 -->
    <NewsBlock />
    <!-- 近期活動 -->
    <EventsBlock />
  </main>
</template>
