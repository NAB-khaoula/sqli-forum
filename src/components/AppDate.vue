<template>
  <span :title="exactDate()">
    {{ diffTime(timeStamp) }}
  </span>
</template>

<script>
import dayjs from "dayjs";
import localizedDate from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import { ref } from 'vue'

dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

export default {
  props: {
    timeStamp: { type: Number, required: true, },
  },
  setup(props) {
    const exactDate = ref(() => dayjs.unix(props.timeStamp).format('llll'));
    const diffTime = ref(() => dayjs.unix(props.timeStamp).fromNow());
    return {exactDate, diffTime}
  }
}
</script>

<!-- <script>
import dayjs from "dayjs";
import localizedDate from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

export default {
  props: {
    timeStamp: {
      type: Number,
      required: true,
    },
  },
  methods: {
    exactDate() {
      return dayjs.unix(this.timeStamp).format("llll");
    },
    diffTime() {
      return dayjs.unix(this.timeStamp).fromNow();
    },
  },
};
</script> -->

<style></style>
