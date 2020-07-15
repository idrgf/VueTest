<template>
  <div id="app">
    <header-top></header-top>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  name: 'App',
  components: {
    'header-top': Header

  }
}
</script>

<style>
/*
Utilisation de uigradients
*/
body{
  background: #44A08D;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #093637, #44A08D);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #093637, #44A08D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
img{
  margin-top: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vh{
  min-height: 51vh;
}
</style>
