<template>
  <div class="hello">
   This is simple 
   <div v-bind:class="{class_name_alert: var_in_data, 'another_class': !another_var}"></div>
  </div>
</template>

<script>
export default {
  name: 'First',
  data(){
    return {
      var_in_data: true,
      another_var: true

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .class_name_alert{
    background-color: aqua;
    width: 100%;
    height: 20rem
  }
  .another_class{
    background-color: blueviolet;
    width: 100%;
    height: 50rem;
  }
</style>
