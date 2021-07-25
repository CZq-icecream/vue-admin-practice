<template>
  <div id="app">
    <Dashboard/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style>
</style>
