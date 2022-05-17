<script>
export default{
    name : "afterUpload",
    data(){
        return{
            image_url : "",
        };
    },
    created(){
        this.image_url = this.$store.getters.getImageURL;
    }
}
</script>
<template>
    <div class="after_upload">
        <h1>Uploaded Successfully!</h1>
        <img v-bind:src="image_url"/>
    </div>
</template>
<style scoped>
.after_upload{
    width: 400.36px;
    height: 454.96px;
    border-radius: 12px;
    border: black solid;
    justify-content: center;
    margin-left: 35% ;
    margin-top: 5% ;
}
.after_upload img{ 
    width: 338px;
    height: 224.4px;
    border-radius: 12px;
}
</style>