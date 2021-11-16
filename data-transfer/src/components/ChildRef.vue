<template>
  <h1>我是子组件,我接收到的数据为:{{message}}</h1>
</template>
<script>
export default {
  name: "child",

  created() {},

  computed: {},

  data() {
    return {
      message: "",
    };
  },

  methods: {
    setMessage(msg) {
      this.message = msg;
    },
  },
};
</script>
