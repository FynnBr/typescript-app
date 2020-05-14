<template>
  <div>
      <p>{{num}}</p>
      <button @click="increment()">Increment</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Vue5Html extends Vue {
  num = 1;

  increment() {
      this.num++;
  }
}
</script>

<style scoped lang="scss">
</style>