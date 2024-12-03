<template>
  <div id="eventbox">
    <h3>{{ event.summary }}</h3>
    <p class="description">{{ event.description }}</p>
    <p>活動日期: {{ formatDate(event.start.dateTime) }}</p>
    <p>
      {{ calculateDuration(event.start.dateTime, event.end.dateTime) }} 小時
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventBox",
  props: {
    event: {
      type: Object,
      required: true,
      validator(value: any) {
        return (
          value &&
          typeof value.summary === "string" &&
          typeof value.description === "string" &&
          value.start?.dateTime &&
          value.end?.dateTime
        );
      },
    },
  },
  methods: {
    formatDate(datetime: string) {
      const date = new Date(datetime);
      return `${date.getFullYear()}年 ${
        date.getMonth() + 1
      }月 ${date.getDate()}日 ${date.getHours()}時 ${date.getMinutes()}分`;
    },
    calculateDuration(startDateTime: string, endDateTime: string) {
      const start = new Date(startDateTime);
      const end = new Date(endDateTime);
      const durationMs = end.getTime() - start.getTime(); // 毫秒差
      return (durationMs / (1000 * 60 * 60)).toFixed(2); // 轉為小時並保留兩位小數
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

div#eventbox {
  padding: 1rem 2rem;
  border: 1px solid $primary-dark-color;
  border-radius: 4px;
  background-color: $primary-lighter-color;
  color: $primary-darker-color;

  p.description {
    font-size: 0.9rem;
    color: #666;
  }
}
</style>
