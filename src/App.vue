<template>
  <div id="app">
    <!-- <h1>{{title}}</h1>
    <h4>by {{author}}</h4> -->
    <!-- <button v-on:click="click">click me</button> -->
    <!-- <p>you clicked me {{count}}</p> -->

    <Content v-bind:developer="developer" v-bind:year="year"></Content>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      title: "My book store vue app",
      developer: "Tan Dat",
      year: 2019,
      count: 0
    }
  },
  methods: {
    click: function() {
      this.count++;
    }
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
}

h1, h2 {
  font-weight: normal;
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
