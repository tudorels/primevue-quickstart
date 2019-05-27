<template>
  <div class="main">
      <InputText type="text" v-model="text" />
      <Button type="button" @click="greet" label="Submit" />
      <h3>{{message}}</h3>
      <Toast />
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: null,
            text: null
        }
    },
    methods: {
        greet() {
            this.$toast.add({severity: 'info', summary: 'Hello'  + this.text});
            this.message = 'Hello ' + this.text;
        }
    }
}
</script>

<style scoped>
.main {
    padding-top: 10em;
    text-align: center;
}

input {
    margin-right: 1em;
}
</style>