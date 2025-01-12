<template>
  <section id="home">
    <div class="header">
      <img :src="header_image" alt="" />
    </div>
    <div class="intro">
      <h2>社團簡介</h2>
      <p>
        本社致力於塑造一個尊重、友善、包容的空間，<br />
        旨在讓對獸文化有興趣的個體能夠自由地分享經驗、聚會聯絡，<br />
        並期許以通俗易懂的方式向大眾介紹獸文化
      </p>
    </div>
    <div class="event">
      <h2>近期活動</h2>
      <section class="event-list" v-if="latestEvents.length > 0">
        <EventBox
          v-for="(latestEvent, idx) in latestEvents"
          :key="idx"
          :event="latestEvent"
        />
      </section>
      <p v-else>無</p>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import EventBox from "@/components/block/EventBox.vue";
import axios from "axios";
import header_image from "@/assets/header.jpg";

export default defineComponent({
  name: "HomeView",
  components: {
    EventBox,
  },
  data() {
    return {
      latestEvents: [],
      header_image: header_image,
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

section#home {
  div {
    h2 {
      text-align: center;
      font-size: 1.8rem;
      color: $primary-color;
      margin-bottom: 1rem;
    }
    &.header {
      display: flex;
      justify-content: center;
      max-height: 70vh;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    /* 社團簡介 */
    &.intro {
      padding: $section-padding;
      p {
        font-size: 1.1rem;
        color: $primary-darker-color;
        text-align: center;
        line-height: 2rem;
      }
    }
    &.event {
      padding: $section-padding;
      section.event-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 2rem;
      }
      p {
        text-align: center;
        font-size: 1.2rem;
      }
    }
  }
}

@media screen and (max-width: 720px) {
}
</style>
