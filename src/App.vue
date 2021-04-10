<!--A component ALWAYS has to have a template-->
<template>
<!--<div id="app"> this refers to App.vue-->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ message }}</p>
  </div>
</template>

<!--script is optional-->
<script>
//App.vue is run by default
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello World of Vue!'
    }
  }
}
</script>

<!--style is optional-->
<!--preprocessor of styles chosen is stylus. and here we are refering to #app-->
<style  lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
