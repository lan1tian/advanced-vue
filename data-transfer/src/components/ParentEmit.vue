<template>
  <div>
    <h1>我是父组件,子组件传递给我的数据是:{{data}}</h1>
    <child-emit @getData="getData"></child-emit>
  </div>
</template>
<script>
import ChildEmit from "./ChildEmit.vue";

export default {
  components: { ChildEmit },
  name: "app",

  created() {},

  data() {
    return {
      data: "",
    };
  },

  methods: {
    getData(data) {
      this.data = data;
    },
  },
};
</script>
