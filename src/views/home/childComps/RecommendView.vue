<template>
    <div class="recommend">
        <div v-for="item,i in recommends" :key="i" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
   
<script>
export default {
   
    props: {
        recommends: {
            type: Array,
            defalut:[]
        }
    },
    created(){
        // console.log(this)
    }
}
</script>
   
<style scoped>
    .recommend {
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 18px;
        border-bottom: 10px solid #eee;
    }

    .recommend-item {
        flex: 1;
    }
    /**
      设置的宽度是70px 显示的四个图就是280px
      如果屏幕宽度小于70px × 图片数量 也会撑开屏幕 所以直接设置成百分比就行了
      高度默认 不设置 html会把图片自动按比例缩放
    */

    .recommend-item img {
        width: 100%;
        margin-bottom: 10px;
    }
    
</style>