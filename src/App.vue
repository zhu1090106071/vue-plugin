<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/nav'
  export default {
    name: 'App',
    data () {
      return {
        msg: ''
      }
    },
    components : {
      Nav
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
  width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>
