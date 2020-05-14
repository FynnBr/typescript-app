<template>
  <div>
    <h1 v-if="isServerDown">Der Webserver ist zur Zeit nicht erreichbar.</h1>
    <h1 v-if="!isServerDown">Willkommen zu xy.</h1>
    <button @click="changeServerstatus()">Change serverstatus</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ServerDown extends Vue {
  isServerDown = false;

  changeServerstatus() {
      this.isServerDown = !this.isServerDown;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
    margin: auto;
}
</style>
