<template>
    <div class="upload_image">
        <h1>Upload your image</h1>
        <h3>File should be Jpeg,Png,..</h3>
        <div class="drag_drop_zone"
            @dragenter.prevent
            @dragleave.prevent
            @dragover.prevent
            @drop.prevent="drop_image($event)">
            <p>Drag and Drop your image here</p>
            <img src="../assets/images/image.svg"/>
        </div>
        <p>Or</p>
        <div style="border : black solid;width : 200px;height : 60px;">
            Choose a file
            <input type="file" accept="image/*" @change="upload_image($event)"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0;cursor : pointer;"/>
        </div>
    </div> 
    <p>created by <a href="https://github.com/BIRDISS-kawtar">BIRDISS-kawtar</a> - devChallenges.io</p>  
</template>
<script>
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
export default{
    name : "beforeUpload",
    data(){
        return{
            storage: getStorage(),// Root storage
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
            this.communCode(event.dataTransfer.files[0]);
        },
        upload_image(event){
            this.communCode(event.target.files[0]);
        },
        communCode(imageFile){
            
            if (imageFile) {// Check if Image is uploaded 
                if(imageFile.type.match(/image\//)){ // Accept only one image
                    this.$store.commit('setImageURL', URL.createObjectURL(imageFile));
                    const storageRef= ref(this.storage, `images/${imageFile.name}`);
                    uploadBytes(storageRef, imageFile)
                    .then((snapshot) => {// Upload image to firebase storage

                        getDownloadURL(snapshot.ref)
                        .then((url) => {
                            this.$store.commit('setStorageURL',url);// image URL is Firebase 
                        });
                    });
                    this.$router.push("/loading");
                }

            }
        }
    },
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