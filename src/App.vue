<template>
  <div class="p-fluid p-grid">
    <span class="p-float-label p-input-icon-right">
      <i
        class="pi pi-info-circle p-m-2"
        v-tooltip="'For tracking ideas, plans, and adventures.'"
      />
    </span>
    <div class="p-col">
      <img id="logo" alt="Queue logo" src="./assets/logo.png" />
    </div>
  </div>
  <HelloWorld />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
</style>
