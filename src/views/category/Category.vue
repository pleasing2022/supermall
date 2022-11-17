<template>
    <div class="wrapper" ref="aaaa">
        <!-- 无论是否设置click:false，button都可以被点击 -->
        <button @click="btnClick">按钮</button>
        <!-- 必须设置click:true，div才能被监听 -->
        <div @click="divClick">呵呵</div>
        <ul class="content">
            
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
            <li>1</li>
            <li>11</li>
            <li>111</li>
            <li>1111</li>
            <li>11111</li>
            <li>111111</li>
            <li>1111111</li>
            <li>11111111</li>
        </ul>
    </div>
</template>
   
<script>
import BScroll from 'better-scroll'

export default {
    name: "Category",
    data() {
        return {
            scroll: null
        }
    },
    //不能用created，因为组件创建完之后才调用created，.wrapper会undefined
    mounted() {
        //实现了在移动端的顺滑滚动和弹簧效果(用鼠标点击拖拽可以拖到wrapper区域框内)
        // probe:侦测
        // 0，1都是不侦测实时位置
        // 2：在手指滚动的过程中侦测，手指离开后的惯性滚动中不侦测
        // 3：只要是滚动，都侦测
        this.scroll = new BScroll(document.querySelector('.wrapper'), {
            probeType: 3,
            //让wrapper区域框内的按钮可以点击
            click: true,
            //上拉加载更多
            pullUpLoad: true
        })

        this.scroll.on('scroll', (position) => {
            console.log(position);
        })

        this.scroll.on('pullingUp', () => {
            // console.log(上拉加载更多);
        })
    },
    methods:{
        btnClick(){
            console.log('btnClick');
        },
        divClick(){
            console.log('divClick');
        }
    }
}
</script>
   
<style scoped>
.wrapper {
    height: 150px;
    background-color: pink;
    /* overflow: hidden;
    overflow-y: scroll; */
}
</style>