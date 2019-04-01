<template>
  <div id="app">
   
    <First />
  </div>
</template>

<script>
import First from './components/First.vue'

export default {
  name: 'app',
  components: {
    First
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}

</style>
