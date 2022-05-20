<template>
    <div class="w-[28%] h-[70%] top-[12%] left-[36%] 
                absolute shadow-[_0px_4px_12px_rgba(0,0,0,0.1)] 
                rounded-[12px]">
        <!-----------------------Titles------------------->
        <img class="w-8 h-8 ml-[46%] mt-[10%]" src="../assets/images/check_mark.png"/>
        <h1 class="mt-[3%]">Uploaded Successfully!</h1>
        <!-------------------Uploaded Image------------------------->
        <img class="w-[90%] h-[40%] ml-[5%] mt-[7%] rounded-[12px]" v-bind:src="image_url"/>
        <!------------------Copy To Clipboard---------------------->
        <button class="w-[40%] h-[6%] mt-[7%] bg-[#2F80ED] rounded-[8px]" @click="copyToClipboard">
            Copy to the Clipboard
        </button>   
        <p class="my-[4%]">Or</p>
        <!------------------Copy Storage Link----------------------> 
        <div class="w-[90%] h-[7%] ml-[5%] rounded-[8px]
                    bg-[#F6F8FB] border-solid
                    border-[#E0E0E0] border-[1px]">
            <input class="w-[64%] h-[95%] ml-[-0.1%]" type="text" id="storageURL" disabled />
            <button class="w-[32%] h-[95%] ml-[3%] mt-[0.2%] rounded-[8px] bg-[#2F80ED]" @click="copyWithLink">Copy Link</button>
        </div>
    </div>
</template>
<script>
export default{
    name : "afterUpload",
    data(){
        return{
            image_url : this.$store.getters.getImageURL,
            storage_url : this.$store.getters.getStorageURL,
        };
    },
    mounted(){
        document.getElementById("storageURL").setAttribute("value",this.storage_url);
    },
    methods:{
        copyToClipboard(){
            // Convert image to blob to be used later
            const image_to_copy = new Image();
            const canvas = document.createElement("canvas"); // Create a canvas to be used for drawing the image the image later
            const canvas_ctx = canvas.getContext("2d");// Get contexte of canvas ( 2d or 3d in OpenGL)
            image_to_copy.crossOrigin = ""; // To use the image like it's loaded in the current origin
            image_to_copy.src = this.image_url;
            const blob = new Promise(resolve => {
                image_to_copy.onload = function () {
                    console.log("Now loading the image!");
                    canvas.width = this.naturalWidth;
                    canvas.height = this.naturalHeight;
                    canvas_ctx.drawImage(this, 0, 0);
                    canvas.toBlob((blob) => {
                        resolve(blob)
                    }, "image/png", 0.75); // Callback,Type and Quality
                };
            });// NB : all types of images are converted to png behind the scenes
            navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]); // Using Clipboard API  
        },
        copyWithLink(){

            console.log("------------Copy Link ------------");
            const content = document.getElementById("storageURL").getAttribute("value");
            const blob = new Blob([content], { type: "text/plain" });
            navigator.clipboard.write([new ClipboardItem({ "text/plain": blob })]);
            console.log("------------Copy Link END------------");    
        }
    }
}
</script>
