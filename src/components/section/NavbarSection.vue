<template>
  <nav id="navbar">
    <section id="main-navbar">
      <!-- Logo -->
      <router-link to="/">
        <img :src="logo" alt="" />
      </router-link>
      <!-- Page -->
      <ul id="menu">
        <router-link to="/">{{ $t("navbar.home") }}</router-link>
        <router-link to="/about">{{ $t("navbar.about") }}</router-link>
        <router-link to="/product">{{ $t("navbar.product") }}</router-link>
        <!-- Auth -->
        <template v-if="getLoginInfo">
          <router-link to="/dashboard">{{
            $t("navbar.dashboard")
          }}</router-link>
          <router-link to="/logout">{{ $t("navbar.logout") }}</router-link>
        </template>
        <router-link v-else to="/login">{{ $t("navbar.login") }}</router-link>
      </ul>
      <i class="fa fa-bars menu-button" @click="handleMenu"></i>
    </section>
    <section id="sub-navbar">
      <!-- Font size -->
      <section class="font-size">
        <div>字級：</div>
        <ul>
          <li v-for="(font, index) in fontSizes" :key="index">
            <input
              type="radio"
              v-model="fontSize"
              :id="'font-size-' + index"
              :value="font.label"
            />
            <label :for="'font-size-' + index">
              {{ $t("navbar.fontSize." + font.label) }}
            </label>
          </li>
        </ul>
      </section>
      <!-- High Button -->
    </section>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import VueCookies from "vue-cookies";
import logo from "@/assets/logo.svg";

const Cookie: any = VueCookies;

export default defineComponent({
  name: "NavbarSection",
  data() {
    return {
      logo: logo as string,
      fontSize: "medium",
      fontSizes: [
        { label: "small", size: "75%" },
        { label: "medium", size: "100%" },
        { label: "big", size: "125%" },
      ],
    };
  },
  computed: {
    getLoginInfo() {
      return this.$store.getters["user"];
    },
  },
  methods: {
    applyFontSize(size: string) {
      document.documentElement.style.fontSize =
        this.fontSizes.find((font) => font.label === size)?.size || "100%";
    },
    handleMenu() {
      document.querySelector("#menu")?.classList.toggle("open");
    },
  },
  mounted() {
    const savedFontSize = Cookie.get("fontSize") || "medium";
    this.fontSize = savedFontSize;
    this.applyFontSize(savedFontSize);
  },
  watch: {
    fontSize(newFontSize) {
      Cookie.set("fontSize", newFontSize, "7d");
      this.applyFontSize(newFontSize);
    },
  },
});
</script>

<style lang="scss" scoped>
$primary-darker-color: #0d0d0d;
$primary-dark-color: #733439;
$primary-color: #825500;
$primary-light-color: #f0efd8;
$primary-lighter-color: #f2f2f2;
$white: #ffffff;
$black: #000000;

$navbar-padding: 1rem 80px;

nav#navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  section#main-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $navbar-padding;
    background: $white;
    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      column-gap: 1.6rem;
      font-size: 1.1rem;
      font-weight: 500;
      a {
        color: $primary-darker-color;
        &:hover {
          color: $primary-dark-color;
        }
        &.router-link-active {
          color: $primary-color;
        }
      }
    }
    i.menu-button {
      display: none;
    }
  }
  section#sub-navbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: $navbar-padding;
    background: $primary-light-color;
    section.font-size {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        column-gap: 1rem;
        align-items: center;
        input[type="radio"] {
          display: none;
          &:checked + label {
            color: $white;
            background: $primary-color;
          }
        }
        label {
          display: flex;
          justify-content: center;
          align-items: center;
          aspect-ratio: 1/1;
          color: $primary-color;
          background: $white;
          border-radius: 100%;
          width: 25px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.17s ease-in-out;
          &:hover {
            color: $white;
            background: $primary-color;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 720px) {
  $navbar-padding: 1rem 40px;
  nav#navbar {
    section#main-navbar {
      justify-content: center;
      ul {
        z-index: 10;
        position: absolute;
        flex-direction: column;
        justify-content: flex-start;
        row-gap: 1.6rem;
        background: $white;
        box-shadow: 0 0 4px $primary-color;
        width: 100%;
        padding: 1rem 0;
        bottom: 0;
        transform: translateX(-120%) translateY(100%);
        transition: all 0.27s ease-in-out;
        &.open {
          transform: translateX(0) translateY(100%);
        }
      }
      i.menu-button {
        display: block;
        cursor: pointer;
        $d: 2rem;
        position: absolute;
        top: $d;
        right: $d;
        &:hover {
          color: $primary-color;
        }
      }
    }
    section#sub-navbar {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: $navbar-padding;
      background: $primary-light-color;
      section.font-size {
        display: flex;
        align-items: center;
        ul {
          display: flex;
          column-gap: 1rem;
          align-items: center;
          input[type="radio"] {
            display: none;
            &:checked + label {
              color: $white;
              background: $primary-color;
            }
          }
          label {
            display: flex;
            justify-content: center;
            align-items: center;
            aspect-ratio: 1/1;
            color: $primary-color;
            background: $white;
            border-radius: 100%;
            width: 25px;
            font-size: 0.8rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.17s ease-in-out;
            &:hover {
              color: $white;
              background: $primary-color;
            }
          }
        }
      }
    }
  }
}
</style>
