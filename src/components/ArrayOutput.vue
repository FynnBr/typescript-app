<template>
  <div class="table">
    <table>
        <tr>
            <th>Name</th>
            <th>Preis</th>
        </tr>
        <tr v-for="article in articles" :key="article.name">
            <td>
                {{article.name}}
            </td>
            <td>
                {{article.price}}
            </td>
        </tr>
    </table>
    <button @click="addArticle()">Add Article</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ArrayOutput extends Vue {
  articles = [
      {name: "Reifen", price: 8290},
      {name: "Antenne drehbar. Leicht geknickt.", price: 1400},
      {name: "Opel Kadett C 1992 - wie neu", price: 150000},
  ]

  addArticle() {
      const radio = {
          name: "Radio - UKW",
          price: 45
      }
      this.articles.push(radio);
  }
}
</script>

<style scoped lang="scss">
.table {
    table {
        margin: auto;
    }
}
</style>