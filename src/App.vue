<template>
  <NavbarSection />
  <router-view />
  <FooterSection />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarSection from "@/components/section/NavbarSection.vue";
import FooterSection from "./components/section/FooterSection.vue";

export default defineComponent({
  name: "App",
  components: {
    NavbarSection,
    FooterSection,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
  font-family: "Inter", "Noto Sans TC";
}

body {
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  display: none;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style: none;
}

input,
textarea,
button {
  border: none;
  outline: none;
}
</style>
