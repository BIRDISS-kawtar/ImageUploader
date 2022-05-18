<template>
    <div class="after_upload">
        <h1>Uploaded Successfully!</h1>
        <img v-bind:src="image_url"/>
        <button style="background-color : grey;" @click="copyToClipboard">Copy to the Clipboard</button>      
    </div>
</template>
<script>
export default{
    name : "afterUpload",
    data(){
        return{
            image_url : this.$store.getters.getImageURL,
        };
    },
    methods:{
        copyToClipboard(){
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
            
        }
    }
}
</script>
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