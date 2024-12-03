<template>
  <div id="about">
    <h2>以往活動</h2>
    <section id="event-list">
      <EventBox v-for="event in events" :key="event.id" :event="event" />
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import EventBox from "@/components/block/EventBox.vue";
import axios from "axios";

export default defineComponent({
  name: "HomeView",
  components: {
    EventBox,
  },
  data() {
    return {
      events: null,
    };
  },
  methods: {
    async getLatestEvents() {
      const events = await axios.get(
        "https://www.googleapis.com/calendar/v3/calendars/af5e41829a41e0d4a57af5e2fffc8fda2483d0c4863aad147e4c15bc6996b731@group.calendar.google.com/events?key=AIzaSyC1qeKLryVxGiWj04p7GJzS9rWsX-L8k6I"
      );
      return events.data.items;
    },
  },
  async mounted() {
    this.events = await this.getLatestEvents();
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

div#about {
  padding: 1rem 80px;
  h2 {
    color: $primary-color;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    text-align: center;
  }
  section#event-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    grid-auto-flow: dense;
  }
}

@media screen and (max-width: 720px) {
  div#about {
    padding: 1rem 40px;
    section#event-list {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
  }
}
</style>
