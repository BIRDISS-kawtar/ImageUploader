<script>
import { watch } from '@vue/runtime-core';
export default{
    name : "dragDrop",
    data(){
        return{
            drag_drop_state : "Nothing",
            image_url : "/image.svg",
        }
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
        drop_handle(event){

            if (event.dataTransfer && event.dataTransfer.files) {// Check if Images are dropped 
                
                if(event.dataTransfer.files[0].type.match(/image\//)){ // Accept only one image

                    this.image_url = URL.createObjectURL(event.dataTransfer.files[0]);
                    console.log("Result is = ",URL.createObjectURL(event.dataTransfer.files[0]));
                }
                
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
<template>
    <p>Drag & Drop your image here</p>
    <div class="drag_drop_zone"
        @dragenter.prevent="dragenter_handle"
        @dragleave.prevent="dragleave_handle"
        @dragover.prevent
        @drop.prevent="drop_handle($event)">
        <img v-bind:src="image_url"/>
    </div>
</template>
<style scoped>
.drag_drop_zone{
    width: 500px;
    height: 400px;
    border: darkblue dashed;
}
</style>