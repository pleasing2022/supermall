<template>
<div>
    <div class="home">
        {{msg}}
    </div>
</div>
</template>


<script>
export default {
    name: "Home",
    data(){
        return {
            msg: "hello vue"
        }
    }
}
</script>


<style>
.home {
    border: 1px solid red;
    width: 200px;
    height: 200px;
    background-color: #bfa;
}
</style>