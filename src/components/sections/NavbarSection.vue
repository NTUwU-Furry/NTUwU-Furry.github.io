<template>
  <nav id="navbar" :class="{ open: isOpen }">
    <RouterLink id="logo-area" to="/">
      <img id="logo" :src="logo" alt="" />
      <p>臺大獸文化交流社</p>
    </RouterLink>
    <label id="pages-button" @click="toggleMenu">
      <MenuIcon v-if="!isOpen" class="icon" />
      <CloseIcon v-else class="icon close-icon" />
    </label>
    <ul id="pages" :class="{ line: lineAnimated }" @transitionend="handleTransitionEnd">
      <RouterLink to="/" id="home">臺大獸文化交流社</RouterLink>
      <RouterLink to="/about" id="about">關於</RouterLink>
      <RouterLink to="/news" id="news">公告</RouterLink>
      <RouterLink to="/events" id="events">活動</RouterLink>
      <RouterLink to="/merch" id="merch">周邊</RouterLink>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import logo from '@/assets/images/logo_small.png'
import MenuIcon from '@/assets/icons/icon_Menu.svg'
import CloseIcon from '@/assets/icons/icon_Close.svg'
import { ref } from 'vue'

const isOpen = ref(false)
const lineAnimated = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    lineAnimated.value = false
  }
}
const handleTransitionEnd = (e: TransitionEvent) => {
  if (e.propertyName === 'height' && isOpen.value) {
    lineAnimated.value = true
  }
}
</script>

<style lang="scss" scoped>
nav#navbar {
  z-index: 999;
  position: sticky;
  padding: 1rem 10rem;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;

  #logo-area {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    img#logo {
      height: 2rem;
      aspect-ratio: 1/1;
    }

    p {
      font-size: 1.75rem;
      font-weight: 700;
      color: #904042;
    }
  }

  &.open ul#pages::after {
    width: 100%;
  }
  &.open ul#pages {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    transition-delay: 0.2s;
  }

  ul#pages {
    display: flex;
    justify-content: space-between;
    column-gap: 1.5rem;
    font-size: 1.5rem;
    font-weight: 700;

    ::after {
      content: '';
      position: absolute;
      bottom: -100%;
      left: 0;
      height: 0.2rem;
      width: 0;
      background: #904042;
      transition: width 0.3s ease-in-out;
    }

    a {
      position: relative;
      display: inline-block;

      &#home {
        display: none;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.3rem;
        width: 100%;
        height: 0.3rem;
        background-color: #904042;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.24s ease;
      }

      &:hover::after,
      &.router-link-exact-active::after {
        transform: scaleX(1);
      }
    }
  }
}

@media screen and (max-width: 960px) {
  nav#navbar {
    padding: 1rem 2rem;
    width: 100vw;

    #logo-area p {
      display: none;
    }

    label#pages-button {
      display: block;
      width: 1.4rem;
      aspect-ratio: 1/1;
      cursor: pointer;

      .close-icon,
      &:hover {
        color: #904042;
      }
    }

    ul#pages {
      padding: 0 1rem;
      flex-direction: column;
      position: absolute;
      overflow: hidden;
      height: 0;
      transition: height 0.35s ease-in-out;
      background: #fff;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0.2rem;
        width: 0;
        background: #904042;
        transition: width 0.5s ease;
      }

      a {
        padding: 0.5rem 1rem;
        text-align: right;
        transition:
          opacity 0.24s ease 0.6s,
          color 0.24s ease 0s;

        &#home {
          display: block;
        }

        &::after {
          bottom: 0;
        }

        &:hover,
        &.router-link-exact-active {
          color: #904042;
        }

        &:hover::after,
        &.router-link-exact-active::after {
          transform: scaleX(0);
        }
      }
    }

    &.open ul#pages {
      height: 17rem;
      padding-bottom: 1rem;
      transition-delay: 0s;

      &::after {
        width: 100%;
      }

      a {
        opacity: 1;
      }
    }
    &.open ul#pages.line::after {
      width: 100%;
    }

    &.open ul#pages.line a {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
