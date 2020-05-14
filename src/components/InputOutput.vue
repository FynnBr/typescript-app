<template>
  <div>
    <input v-model="msg" placeholder="start typing...">
    <p>Ausgabe: {{msg}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ArrayOutput extends Vue {
    msg = "";
}
</script>

<style scoped lang="scss">
div {
    margin: auto;
}
</style>