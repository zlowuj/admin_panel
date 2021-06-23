<template>
  <div id="app">
    <List v-if="!this.$store.getters.ifRegister" class="container" />
    <Register v-else />
  </div>
</template>

<script>
import List from "./components/List.vue";
import Register from "./components/Register.vue";

export default {
  name: "App",
  components: {
    Register,
    List,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>