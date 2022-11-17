<template>
  <div id="app">
    <!-- 让Home不要随意销毁掉(为了保存原来的状态做铺垫) -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
   <main-tab-bar v-show="this.$route.path.indexOf('detail')==-1"/>
  </div>
</template>

<script>
import MainTabBar from '../src/components/content/MainTabBar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  } 
}
</script>

<style>
@import "./assets/css/base.css";
#app{
  width: 100%;
  height: 100%;
}

</style>
