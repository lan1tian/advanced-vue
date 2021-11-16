<template>
  <h1>我是子组件</h1>
</template>
<script>
export default {
  name: "child",
  mounted() {
    this.$emit("getData","苹果");
  },
};
</script>
