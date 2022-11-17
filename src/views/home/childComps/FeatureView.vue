<template>
   <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
        <img src="@/assets/img/home/recommend_bg.jpg" alt="">
    </a>
   </div>
</template>
   
<script>
export default {
    name: "FeatureView"
}
</script>
   
<style scoped>

/**
  这个地方原先也有一点点问题
  a标签是行内元素 没有宽度，所以给a标签的子元素img标签设置宽度100%是不生效的
  给a设置display:block;就成了块元素 默认宽度100% 再给img设置宽度就生效了
*/
    .feature {
        width: 100%;
    }
    .feature a {
        display: block;
    }
    .feature img{
        width: 100%;
    }
</style>