<template>
  <div class="hello">
   <button>
    <h3>NY times</h3>
    <ul>
      <li><a href="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=rU3W7B1vk0fOCceF9jI48cVbyjkaG7ff" target="_blank" rel="noopener">Article Search</a></li>
      </ul>
      <button>
      <h3></h3>
      </button>
      <ul>
      <li><a href="https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?&api-key=rU3W7B1vk0fOCceF9jI48cVbyjkaG7ff" target="_blank" rel="noopener">Most Popular</a></li>
    </ul>
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
