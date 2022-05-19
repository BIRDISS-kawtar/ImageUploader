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
        drop_image(event){ // Drag and Drop Zone 
            this.communCode(event.dataTransfer.files[0]);
        },
        upload_image(event){ // Upload with button Zone 
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