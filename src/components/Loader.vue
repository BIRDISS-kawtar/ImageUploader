<template>
    <div class="w-[28%] h-[16%] top-[42%] left-[36%] 
                absolute shadow-[_0px_4px_12px_rgba(0,0,0,0.1)] 
                rounded-[12px]">
        <!-----------------------Title----------------------->
        <h1 class="text-[#4F4F4F] my-[5%]">Uploading...</h1>
        <!-------------------------Progress Bar----------------------->
        <div class="w-[80%] h-[10%] mx-[10%] bg-[#F2F2F2] rounded-full">
            <div id="progressValue" class="bg-[#2F80ED] h-2.5 rounded-full"
                v-bind:style="{ width: progressValue+'%' }"></div>
        </div>
    </div>
</template>
<script>
export default{
    name : "loader",
    data(){
        return{
            progressCounter : 0,
            progressValue : 0,
            setInterval_ID : null,
        };
    },
    mounted(){
        this.incrementProgress();
    },
    methods :{
        incrementProgress(){
            this.setInterval_ID = setInterval(() => {
                                                if(this.progressCounter < 10){
                                                    this.progressCounter += 1;
                                                    this.progressValue = this.progressCounter*10;
                                                    console.log("progress value is ",this.progressValue,"%");
                                                }else if(this.progressCounter == 10){
                                                    clearInterval(this.setInterval_ID);
                                                    //this.$router.push("/uploaded");
                                                }
                                            },
                                1000);
        }
    }
}
</script>

