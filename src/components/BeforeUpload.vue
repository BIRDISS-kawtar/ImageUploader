<template>
    <div class="upload_image">
        <h1>Upload your image</h1>
        <h3>File should be Jpeg,Png,..</h3>
        <div class="drag_drop_zone"
            @dragenter.prevent="dragenter_handle"
            @dragleave.prevent="dragleave_handle"
            @dragover.prevent
            @drop.prevent="drop_image($event)">
            <p>Drag and Drop your image here</p>
        </div>
        <input type="file" accept="image/*" @change="upload_image($event)">
    </div>   
</template>
<script>
import { watch } from '@vue/runtime-core';
export default{
    name : "beforeUpload",
    data(){
        return{
            
        };
    },
    methods :{
        dragenter_handle(){
            this.drag_drop_state = "Drag Enter Event";
            console.log("state = ",this.drag_drop_state);
        }, 
        dragleave_handle(){
            this.drag_drop_state = "Drag Leave Event";
            console.log("state = ",this.drag_drop_state);
        },
        drop_image(event){

            if (event.dataTransfer && event.dataTransfer.files) {// Check if Image is dropped 
                
                if(event.dataTransfer.files[0].type.match(/image\//)){ // Accept only one image

                    this.$store.commit('setImageURL', URL.createObjectURL(event.dataTransfer.files[0]));
                    this.$router.push("/loading");
                }
                
            }
        },
        upload_image(event){

            if (event.target.files) {// Check if Image is uploaded 
                this.$store.commit('setImageURL', URL.createObjectURL(event.target.files[0]));
                this.$router.push("/loading");

            }
        }
    },
    watch: {
        image_url: {
            handler(newValue) {
                console.log(`The new value of image url = ${newValue}`)
            },
            immediate: true
        }
    }
}
</script>
<style scoped>
.upload_image{
    justify-content: center;
    margin-left: 35% ;
    margin-top: 5% ;
    width: 402px;
    height: 469px;
    border-radius: 12px;
    border: black solid;
}
.drag_drop_zone{
    width: 338px;
    height: 218.9px;
    border-radius: 12px;
    border: darkblue dashed;
}
</style>