<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>


<script>
// 在Scroll里封装better-scroll，在Home.vue里引用Scroll
import BScroll from 'better-scroll'
import ObserveDOM from '@better-scroll/observe-dom'
import ObserveImage from '@better-scroll/observe-image'

BScroll.use(ObserveDOM)
BScroll.use(ObserveImage)

export default {
    name: "Scroll",
    props: {
        probeType: {
            type: Number,
            default: 0
        }
    },
    pullUpLoad: {
        type: Boolean,
        default:false
    },
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        //创建scroll对象
        this.scroll = new BScroll(this.$refs.wrapper, {
            observeDOM: true,
            observeImage: true,
            click: true,
            probeType: this.probeType,
            pullUpLoad: true
            // this.pullUpLoad
        })
        // 有scrollTo这个方法
        // this.scroll.scrollTo(0,0)
        // this.scroll.refresh()

        //监听滚动的位置
        if (this.probeType === 2 || this.probeType === 3) {
            this.scroll.on('scroll', (position) => {
                this.$emit('scroll', position)
            })
        }
        // console.log(this.scroll);
        

        //监听上拉事件
        // if(this.pullUpLoad){
          
            this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
            // console.log('上拉');
            setTimeout(() => {
                this.scroll.finishPullUp()
            }, 2000);
        })
        // }
    },
    methods: {
        scrollTo(x, y, time = 300) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        },
        refresh() {
            // console.log('----');
            this.scroll && this.scroll.refresh()
        },
        getScrollY(){
            return this.scroll ? this.scroll.y : 0
        }  
    }
}
</script>
   
<style scoped>
/* .wrapper {
    height: 100%;
} */
</style>