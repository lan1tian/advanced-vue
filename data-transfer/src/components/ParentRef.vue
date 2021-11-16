<template>
  <div>
    <h1>我是父组件</h1>
    <child-ref ref="childRef"></child-ref>
  </div>
</template>
<script>
import ChildRef from "./ChildRef.vue";

export default {
  components: { ChildRef },
  name: "app",

  created() {},

  data() {
    return {};
  },

  methods: {},

  mounted() {
    this.$refs.childRef.setMessage("橘子");
    console.log(this.$refs.childRef.message);
  },
};
</script>
