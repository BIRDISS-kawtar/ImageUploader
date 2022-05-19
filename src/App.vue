<template>
  <RouterView />
</template>
<script>
import BeforeUpload from "./components/BeforeUpload.vue";
import Loader from "./components/Loader.vue";
import AfterUpload from "./components/AfterUpload.vue"
export default{
  name : "app",
  components:{
    BeforeUpload,
    Loader,
    AfterUpload,
  },
  mounted(){
    document.getElementsByTagName("html")[0].style.background = "#FAFAFB";
  }
}
</script>
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
