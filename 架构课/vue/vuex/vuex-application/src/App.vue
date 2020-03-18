<template>
  <div id="app">
    state.age: {{$store.state.age}} / 
    getters.myAge: {{$store.getters.myAge}}
    <!-- <button @click="syncChange">同步更改</button>
    <button @click="asyncChange">异步更改</button>
    {{$store.getters.myAge}} -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{
    syncChange(){
      this.$store.commit('syncChange',10);

    },
    asyncChange(){
      this.$store.dispatch('asyncChange',5) 
    } 
  }
}
</script>

<style>

</style>
