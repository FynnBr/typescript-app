<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msgUC }}</h1>
    <h1>{{ msgLC }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  msgUC = this.msg.toUpperCase();
  msgLC = this.msg.toLowerCase();
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
