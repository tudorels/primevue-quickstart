<template>
  <div id="app">
    <div class="app-container">
      <!-- <img alt="Vue logo" src="./assets/primevue-logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your PrimeVue App"/>
      <form @submit.prevent="greet">
        <Button type="submit" label="Submit"/>
        <h3>{{message}}</h3>
      </form> -->
      <Calendar
              id="c1"
              v-model="date1"
              dateFormat="dd.mm.yy"
              :manualInput="true"
              :showIcon="false"
            />
            <Button label="showVModel" @click="showVModel"/>
            <h3>{{message}}</h3>
    </div>

    <Toast/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
    data() {
        return {
            message: null,
            text: null,
            date1: null,
        }
    },
    methods: {
        showVModel() {
            // this.$toast.add({severity: 'info', summary: 'Hello '  + this.text});
            this.message = this.date1;
            console.log(this.date1);
        }
    },
    components: {
      //HelloWorld
    }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.app-container {
  text-align: center;
}

body #app .p-button {
  margin-left: .2em;
}

form {
  margin-top: 2em;
}
</style>