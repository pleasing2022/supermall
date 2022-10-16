<template>
<div>
    <ComponentA />
    <form>
        <input type="text" v-model="user.username" placeholder="用户名"><br>
        <input type="text" v-model="user.password" placeholder="密码"><br>
        <button @click.prevent="handleLogin">登录</button><br>
    </form>
</div>
</template>


<script>
import ComponentA from '../components/Home.vue'
export default {
    name: "Login",
    data() {
        return  {
            user: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        handleLogin() {
            if(this.user.username && this.user.password) {
                console.log("登录xxxx");
            }
        }
    },
    components:{
        ComponentA
    }
}
</script>

<style>
    
</style>