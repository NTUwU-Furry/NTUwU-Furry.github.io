<template>
  <footer id="footer">
    <section>
      <div>
        <p class="list-title">網站地圖</p>
        <ul class="list">
          <RouterLink to="/">首頁</RouterLink>
          <RouterLink to="/about">關於</RouterLink>
          <RouterLink to="/news">公告</RouterLink>
          <RouterLink to="/events">活動</RouterLink>
          <RouterLink to="/merch">周邊</RouterLink>
        </ul>
      </div>
      <div>
        <p class="list-title">社群連結</p>
        <ul class="list">
          <a
            :key="idx"
            v-for="(link, idx) in socialMediaLinks"
            :href="link.href"
            target="_blank"
            title="(另開新視窗)"
            >{{ link.name }}</a
          >
        </ul>
      </div>
      <div>
        <p class="list-title">友社連結</p>
        <ul class="list">
          <a href="" target="_blank" title="(另開新視窗)">成大獸文化社</a>
          <a href="" target="_blank" title="(另開新視窗)">雲科大獸文化社</a>
        </ul>
      </div>
      <div>
        <p class="list-title">快速操作</p>
        <ul class="list">
          <a href="http://3.27.251.63/" target="_blank" title="(另開新視窗)">點數系統</a>
        </ul>
      </div>
    </section>
    <p class="copyright">
      Copyright © 2024 - {{ currentYear() }} NTUwU Furry. All right reserved. 版權所有 © 2024 -
      {{ currentYear() }} 臺大獸文化交流社
    </p>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import socialMediaLinks from '@/socialMedia/index'

const currentYear = () => {
  return new Date().getFullYear()
}
</script>

<style scoped lang="scss">
footer#footer {
  padding: 3rem 10rem;
  width: 100%;
  background: #562f32;
  color: white;
  > section {
    display: grid;
    grid-template-columns: 4fr 6fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 3rem;
    margin-bottom: 5rem;
    > div {
      display: flex;
      flex-direction: column;
      row-gap: 2rem;
      p.list-title {
        font-weight: 700;
        font-size: 1.6rem;
        border-bottom: 5px solid #d4ba78;
        width: max-content;
      }
      ul.list {
        display: flex;
        justify-content: flex-start;
        column-gap: 2rem;
        a {
          font-weight: 500;
          font-size: 1.2rem;
        }
      }
    }
  }
}

@media screen and (max-width: 960px) {
  footer#footer {
    padding: 1rem 2rem;
    > section {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: 1fr;
      gap: 3rem;
      margin-bottom: 5rem;
      > div {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        p.list-title {
          font-weight: 700;
          font-size: 1.6rem;
          border-bottom: 5px solid #d4ba78;
          width: max-content;
        }
        ul.list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, auto));
          justify-content: flex-start;
          column-gap: 2rem;
          row-gap: 1rem;
          a {
          }
        }
      }
    }
    p.copyright {
      font-size: 0.9rem;
    }
  }
}
</style>
