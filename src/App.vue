<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarSection from '@/components/sections/NavbarSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
</script>

<template>
  <NavbarSection />
  <RouterView />
  <FooterSection />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&Noto+Sans+TC');

body {
  font-family:
    'Inter',
    'Noto Sans TC',
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}

div#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
