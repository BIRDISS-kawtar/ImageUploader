<script>
import DragAndDrop from './components/DragAndDrop.vue';
export default{
  name : "home",
  components :{
    DragAndDrop,
  }
}
</script>

<template>
  <DragAndDrop/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
