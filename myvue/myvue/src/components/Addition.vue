<template>
  <div>
    <!-- <h3>当前最新的count值为:{{ $store.state.count }}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="bthHandler1">+1</button>
    <button @click="incrByStep">+N</button>
    <button @click="btnHandler3">+1 Async</button>
    <button @click="btnHandler4">+N Async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    bthHandler1() {
      this.$store.commit("increment", 5);
    },
    incrByStep() {
      this.$store.commit("incrByStep", 5);
    },
    btnHandler3() {
      // 专门用于触发 action
      this.$store.dispatch("addAsync");
    },
    btnHandler4() {
      // 专门用于触发 action
      this.$store.dispatch("addByStepAsync",5);
    },
  },
};
</script>

