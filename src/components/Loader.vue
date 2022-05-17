<script>
export default{
    name : "loader",
    data(){
        return{
            progress_counter : 0,
            progress_value : 0,
            setInterval_ID : null,
        };
    },
    created(){
        this.incrementProgress();
    },
    methods :{
        incrementProgress(){
            this.setInterval_ID = setInterval(() => {
                                                if(this.progress_counter < 10){
                                                    this.progress_counter += 1;
                                                    this.progress_value = this.progress_counter*10;
                                                    console.log("progress value is ",this.progress_value,"%");
                                                }else if(this.progress_counter == 10){
                                                    clearInterval(this.setInterval_ID)
                                                }
                                            },
                                1000);
        }
    }
}
</script>
<template>
    <div class="loader">
        <h1>Uploading...</h1>
        <progress max="100" v-bind:value="progress_value"></progress>
    </div>
</template>
<style scoped>
.loader{
    width: 400.36px;
    height: 134.57px;
    border-radius: 12px;
    border: black solid;
    justify-content: center;
    margin-left: 35% ;
    margin-top: 5% ;
}
</style>
