<template>
  <section id="page404">
    <img :src="pine_cry_img" alt="" />
    <div class="header">
      <h2>QwQ 找不到頁面給你看</h2>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import pine_cry_img from "@/assets/松果哭哭.png";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      latestEvents: [],
      pine_cry_img: pine_cry_img,
    };
  },
  methods: {
    async getLatestEvents() {
      let events = await axios.get(
        "https://www.googleapis.com/calendar/v3/calendars/af5e41829a41e0d4a57af5e2fffc8fda2483d0c4863aad147e4c15bc6996b731@group.calendar.google.com/events?key=AIzaSyAc7m0zPd3eNhYj8k4_5opx6iCj5O9-Q_c"
      );
      const now = new Date();
      this.latestEvents = events.data.items
        .filter((event) => new Date(event.start.dateTime) > now)
        .sort((a, b) => new Date(a.start.dateTime) - new Date(b.start.dateTime))
        .slice(0, 3);
    },
  },
  mounted() {
    this.getLatestEvents();
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

$section-padding: 2rem 80px 1rem;

section#page404 {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 1rem;
  div.header {
    display: flex;
    justify-content: center;
    max-height: 70vh;
    h2 {
      text-align: center;
      font-size: 1.8rem;
      color: $primary-color;
      margin-bottom: 1rem;
    }
  }
  img {
    width: 16vw;
    object-fit: cover;
  }
}

@media screen and (max-width: 720px) {
  section#page404 {
    img {
      width: 75vw;
    }
  }
}
</style>
