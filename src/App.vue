<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">vue1</router-link> |
      <router-link to="/vue2">vue2</router-link> |
      <router-link to="/vue3">vue3</router-link> |
      <router-link to="/vue4">vue4</router-link> |
      <router-link to="/vue5">vue5</router-link> |
      <router-link to="/vue6">vue6</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
