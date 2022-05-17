<script>
import DragAndDrop from './components/DragAndDrop.vue';
import Loader from './components/Loader.vue';
import AfterUpload from './components/AfterUpload.vue';
export default{
  name : "home",
  components :{
    DragAndDrop,
    Loader,
    AfterUpload,
  }
}
</script>

<template>
  <DragAndDrop/>
  <!-- <Loader/> -->
  <AfterUpload/>
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
