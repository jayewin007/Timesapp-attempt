<template>
  <div id="app">
    <img alt="news" src="./assets/news.png">
  

   <router-link to="/Home">Home</router-link>
    <router-link to="/Popular">Popular</router-link>
    <router-link to="/HelloWorld">article search</router-link>


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
