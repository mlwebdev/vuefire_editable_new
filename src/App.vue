<template>
  <div id="app">
    <crud/>
  </div>
</template>

<script>
import crud from './components/crud'

export default {
  name: 'app',
  components: {
    crud
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
