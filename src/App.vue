<template>
  <div id="app">
    <h3>improvingjs </h3>
    <div id="inner">
      <app-menu></app-menu>
      <router-view></router-view>
      <div id="content-line">
        <h3>Content line zone</h3>
        <input type="text" placholder="search">
        
      </div>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue';
import Menu from './menu/Menu.vue'
export default {
  name: 'app',
  components: {
    'home': Home,
    'app-menu': Menu
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
  body {
    background-color: #ccc;
    margin: 0;
  }
  h3 {
    text-align: center;
    border-bottom: 1px dashed black;
    margin: 0;
    padding: 8px 0;
  }
  #inner {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
</style>
