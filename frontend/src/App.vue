<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <router-link to="/hops">Go to Hops</router-link>
  </div>
  <div>
    <router-link to="/fermentables">Go to Fermentables</router-link>
  </div>

  <router-view></router-view>
</template>

<script setup>
import Hops from './pages/Hops.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
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
