<!--A component ALWAYS has to have a template-->
<template>
<!--<div id="app"> this refers to App.vue-->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ $store.state.counter }}</p>
    <counter></counter>
  </div>
</template>

<!--script is optional-->
<script>
//@: in order to enter the src folder
import Counter from '@/components/Counter';
//App.vue is run by default
export default {
  name: 'App',
  components: {
    Counter
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
