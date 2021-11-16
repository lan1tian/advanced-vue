<template>
  <h1>我是子组件,父组件传给我的数据是：{{ message1 }},{{message2}}</h1>
</template>
<script>
export default {
  name: "child",

  props: ["message1","message2"],

  created() {},

  computed: {},

  data() {
    return {};
  },

  methods: {},
};
</script>
