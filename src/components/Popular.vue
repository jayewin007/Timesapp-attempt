<template>
  <div id="app">
    <h1> Most Popular</h1>
    <input v-model="SearchTerm"type="Text">
      <img alt="news" src="../assets/news.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

  </div>
</template>

<script>


export default {
  name: 'Popular',
  components: {
  },
  data: function(){
  },
 
}

const router = new VueRouter({
  routes //short for `routes:routes`
})
</script>


 <style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>