<template>
  <div>
    <h1>我是父组件</h1>
    <child v-bind:message1="message1" v-bind:message2="message2"></child>
  </div>
</template>
<script>
import Child from "./Child.vue";

export default {
  components: { Child },
  name: "app",

  created() {},

  data() {
    return {
      message1: "苹果",
      message2: "橘子",
    };
  },

  methods: {},
};
</script>
