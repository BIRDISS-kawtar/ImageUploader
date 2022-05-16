<script>
import DragAndDrop from './components/DragAndDrop.vue'
export default{
  name : "home",
  components :{
    DragAndDrop
  }
}
</script>

<template>
  <h1>Upload your image</h1>
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
