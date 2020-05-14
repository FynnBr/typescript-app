<template>
  <div>
      <span v-html="htmlInput"></span> <!-- Bold wird wegen font nicht angezeigt, man sieht's aber in den dev tools -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Vue5Html extends Vue {
  htmlInput = "<b>VielenDank</b>, für Ihren Einkauf bei <i>Abalo</i>";
}
</script>

<style scoped lang="scss">
</style>