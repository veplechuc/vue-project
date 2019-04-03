<template>
  <div class="hello">
    This is simple
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input
          type="text"
          placeholder="Enter your skill"
          v-model="skill"
          v-validate="'min:5'"
          name="skill"
        >
        <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill')}}</p>
      </form>

      <ul>
        <li v-for="(data, index) in skills" :key="index">{{data.skill}}</li>
      </ul>
    </div>
    <!-- class binding -->
    <!-- <div v-bind:class="{class_name_alert: var_in_data, 'another_class': !another_var}"></div> -->

    <!-- object binding -->
    <div v-bind:class="objectBind"></div>
     <p>These are the skills that you possess.</p>
  </div>
</template>

<script>
export default {
  name: "First",
  data() {
    return {
      skill: "",
      skills: [{ skill: "Python" }, { skill: "MEAN" }, { skill: "VUE.js" }],
      // class binding use below
      // var_in_data: true,
      // another_var: true

      // object binding
      objectBind: {
        class_name_alert: true
      }

      
    };
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({ skill: this.skill });
          this.skill = "";
        } else {
          console.log("Not Valid");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.holder {
  background: #fff;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}
p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}
.container {
  box-shadow: 0px 0px 40px lightgray;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
.alert-in-enter-active {
  animation: bounce-in 0.5s;
}
.alert-in-leave-active {
  animation: bounce-in 0.5s reverse;
}
</style>
