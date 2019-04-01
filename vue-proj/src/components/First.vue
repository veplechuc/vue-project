<template>
  <div class="hello">
   This is simple 
   <!-- class binding -->
   <!-- <div v-bind:class="{class_name_alert: var_in_data, 'another_class': !another_var}"></div> -->

   <!-- object binding -->
   <div v-bind:class="objectBind"></div>
  </div>
</template>

<script>
export default {
  name: 'First',
  data(){
    return {
      // class binding use below
      // var_in_data: true,
      // another_var: true

      // object binding
      objectBind: {
        class_name_alert: true,
      }

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
