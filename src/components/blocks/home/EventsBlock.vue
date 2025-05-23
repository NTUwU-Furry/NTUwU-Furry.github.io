<template>
  <section id="events">
    <div id="title-area">
      <p>近期活動</p>
    </div>
    <section id="events-list">
      <div id="events-container">
        <RouterLink
          v-for="(events, index) in eventsListLatest"
          :key="index"
          class="events-item"
          :to="{ path: '/events/detail', query: { title: events.title } }"
        >
          <div class="text-area">
            <p class="events-title">{{ events.title }}</p>
            <div>
              <p class="events-date">{{ events.date }}</p>
              <p class="events-location">{{ events.location }}</p>
            </div>
          </div>
          <div>
            <p class="coming-soon" v-if="isComingSoon(events.date)">即將到來</p>
            <img :src="events.preview ?? eventDefaultCover" alt="" @error="handleImageError" />
          </div>
        </RouterLink>
      </div>
      <RouterLink to="/events" @mouseenter="isHover = true" @mouseleave="isHover = false">
        <p>查看更多</p>
        <GoLefttIcon v-show="!isHover" class="go-left-icon" />
        <PawRightIcon v-show="isHover" class="go-left-icon" />
      </RouterLink>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { EventsItem } from '@/types/events'

import eventsList from '@/events/index'

import eventDefaultCover from '/events/Event_Default.png'

import GoLefttIcon from '@/assets/icons/icon_Go_Left.svg'
import PawRightIcon from '@/assets/icons/icon_Paw_Right.svg'

const isHover = ref(false)

const eventsListLatest = eventsList.slice(0, 4).map((item: EventsItem) => ({
  title: item.title,
  date: item.date,
  location: item.location,
  preview: item.preview,
}))

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = eventDefaultCover
}

const isComingSoon = (dateStr: string): boolean => {
  const dateMatch = dateStr.match(/\d{4}-\d{2}-\d{2}/)
  if (!dateMatch) return false

  const eventDate = new Date(dateMatch[0])
  const now = new Date()

  eventDate.setHours(0, 0, 0, 0)
  now.setHours(0, 0, 0, 0)

  const diffTime = eventDate.getTime() - now.getTime()
  const diffDays = diffTime / (1000 * 60 * 60 * 24)

  return diffDays >= 0 && diffDays <= 7
}
</script>

<style scoped lang="scss">
section#events {
  display: grid;
  grid-template-columns: 1fr 11fr;
  align-items: start;
  justify-items: start;
  padding: 5rem 10rem;
  background: #904042;
  color: white;
  div#title-area {
    border-left: 0.5rem solid #d4ba78;
    padding-left: 0.5rem;
    p {
      width: min-content;
      font-size: 3rem;
      font-weight: 900;
      line-height: 3.6rem;
    }
  }
  section#events-list {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    width: 100%;
    div#events-container {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      box-sizing: content-box;
      a.events-item {
        display: flex;
        justify-content: space-between;
        position: relative;
        border: 0.6rem solid #d4ba78;
        background: white;
        color: #000;
        display: flex;
        align-items: center;
        transition: all 0.17s ease-in-out;
        div.text-area {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem;
          height: 100%;
          width: 100%;
          p {
            height: 50%;
            font-weight: 500;
            &.events-title {
              font-size: 1.8rem;
              border-bottom: 5px solid #d4ba78;
            }
            &.events-date,
            &.events-location {
              font-size: 1.2rem;
              line-height: 2.2rem;
            }
            &.events-location {
              padding-top: 0.4rem;
            }
          }
        }
        div {
          position: relative;
          width: 100%;
          height: 100%;
          p.coming-soon {
            position: absolute;
            top: 0;
            right: 0;
            margin: 0.6rem;
            padding: 0.2rem 0.4rem;
            background: #904042;
            color: white;
            font-weight: 700;
            font-size: 1.2rem;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 1/1;
          }
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0; /* 定位到底部 */
          left: 0;
          width: 100%;
          height: 0.6rem;
          background-color: #d4ba78;
          transition: height 0.17s ease;
        }

        &:hover {
          cursor: pointer;
          transform: translateY(-5px);
          &::after {
            height: 1rem;
          }
        }

        &:active {
          &::after {
            height: 0.2rem;
          }
        }
      }
    }
    > a {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
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
        background: white;
        transition: width 0.27s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  section#events {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    row-gap: 3rem;
    div#title-area {
      border: none;
      border-bottom: 0.5rem solid #d4ba78;
      padding-bottom: 0.5rem;
      p {
        width: 100%;
      }
    }
    section#events-list {
      align-items: center;
      div#events-container {
        grid-template-rows: auto;
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
        a.events-item {
          display: grid;
          grid-template-columns: 2fr 1fr;
          div.text-area {
            padding: 1rem;
            p {
              padding: 0;
              &.events-title {
                height: 100%;
                margin-top: 0.2rem;
                padding-bottom: 1rem;
                font-size: 1.2rem;
              }
              &.events-date {
                padding-top: 1rem;
                font-size: 1rem;
              }
              &.events-location {
                display: none;
              }
            }
          }
          div {
            height: 100%;
            width: 100%;
            p.coming-soon {
              font-size: 1rem;
            }
            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}
</style>
