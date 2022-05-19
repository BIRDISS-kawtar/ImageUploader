<template>
    <div class="w-[28%] h-[65%] left-[36%] top-[15%] 
                absolute shadow-[_0px_4px_12px_rgba(0,0,0,0.1)] 
                rounded-[12px]">
        <!----------------------Titles------------------------>        
        <h1 class="text-[#4F4F4F] mt-[8%]">Upload your image</h1>
        <p class="mt-[2%]">File should be Jpeg,Png,..</p>
        <!-----------------Drag and Drop Zone------------------>  
        <div class="w-[84%] h-[47%] mt-[8%] mx-[7%]
                    border-dashed border-[#97BEF4] border-[1px]
                    rounded-[12px] bg-[#F6F8FB]"
            @dragenter.prevent
            @dragleave.prevent
            @dragover.prevent
            @drop.prevent="drop_image($event)">
                <img class="mx-[33%] mt-[10%] mb-[10%]" src="../assets/images/image.svg"/>
                <p>Drag and Drop your image here</p>
        </div>
        <p class="my-[4%]">Or</p>
        <!-----------------Upload with Butthon Zone--------------> 
        <div class="w-[25%] h-[7%] bg-[#2F80ED] rounded-[8px] mx-[37.5%] z-2 absolute cursor-pointer">
            <label class="w-[100%] h-[100%]">Choose a file</label>
        </div>
        <div class="w-[25%] h-[7%] mx-[37.5%] z-1 absolute cursor-pointer">
            <input class="w-[100%] h-[100%] opacity-0 cursor-pointer" type="file" accept="image/*" @change="upload_image($event)"/>
        </div>
    </div> 
    <p class="left-[40%] top-[95%] absolute">
        created by <a href="https://github.com/BIRDISS-kawtar">BIRDISS-kawtar</a> - devChallenges.io
    </p>  
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