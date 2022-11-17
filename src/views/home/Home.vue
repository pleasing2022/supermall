<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control  :titles="['流行', '新款', '精选']" @tabClick="tabClick" 
                           ref="tabControl1"
                           class="tab-control" v-show="isTabFixed" />
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
            <recommend-view :recommends="recommends" />
            <feature-view />
            <tab-control  :titles="['流行', '新款', '精选']" @tabClick="tabClick" 
                           ref="tabControl2"/>
            <goods-list :goods="showGoods" />
        </scroll>

        <back-top @click.native="backClick" v-show="isShowBackTop" />
    </div>
</template>
   
<script>
import HomeSwiper from "../home/childComps/HomeSwiper.vue"
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'

import { getHomeMultidata, getHomeGoods } from "../../network/home"
import { debounce } from "@/common/utils"



export default {
    name: "Home",
    components: {
        HomeSwiper,
        RecommendView,
        FeatureView,
        NavBar,
        TabControl,
        GoodsList,
        Scroll,
        BackTop,
    },
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                'pop': { page: 0, list: [] },
                'new': { page: 0, list: [] },
                'sell': { page: 0, list: [] }
            },
            currentType: 'pop',
            isShowBackTop: false,
            tabOffsetTop:0,
            isTabFixed:false,
            saveY:0
        }
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list
        }
    },
    destroyed(){
        console.log('destroyed');
    },
    activated(){
        //x轴不用滚，y轴滚到this.saveY，所用时间为0
        this.$refs.scroll.scrollTo(0,this.saveY,0)
        this.$refs.scroll.refresh()
    },
    deactivated(){
        this.saveY = this.$refs.scroll.getScrollY()
    },
    created() {
        //请求多个数据
        this.getHomeMultidata()

        //请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    mounted() {
        //图片加载完成的事件监听
        const refresh = debounce(this.$refs.scroll.refresh, 100)
        //监听GoodsListItem中图片加载完成
        //回调函数括号里面可以接收传过来的参数
        this.$bus.$on('itemImageLoad', () => {
            // 非父子组件之间的通信，选择了“事件总线”
            //闭包，对refresh有个引用，所以上面的refresh不会被销毁
            refresh()
        })

        //获取tabControl的offsetTop
        //this.$refs.tabControl这个拿到的是一个组件，组件没有(offsetTop)属性
        //所有的组件都有一个属性$el:用于获取组件中的元素
        //如果在mounted中获取tabControl的offsetTop，值是不正确的，因为没有将图片计算在内
        // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop

    //    setTimeout(() =>{
    //     console.log(this.$refs.tabControl.$el.offsetTop);
    //    },6000)
    },
    methods: {
        //事件监听相关的方法
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
        },
        backClick() {
            // this.$refs.scroll拿到的是scroll组件，再.scroll是scroll这个属性再.scrollTo是这个方法
            // this.$refs.scroll.scroll.scrollTo(0,0,500)
            this.$refs.scroll.scrollTo(0, 0)
        },
        contentScroll(position) {
            //判断BackTop是否显示
            this.isShowBackTop = (-position.y) > 1000

            //决定tabControl是否吸顶(是否有position:fixed这个属性)
            this.isTabFixed = (-position.y) > this.tabOffsetTop
        },
        loadMore() {
            this.getHomeGoods(this.currentType)
            this.$refs.scroll.finishPullUp()
        },
        swiperImageLoad(){
            //监听HomeSwiper中img的加载完成，然后在此获取正确的值
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
            // console.log(this.$refs.tabControl.$el.offsetTop);
        },

        //网络请求相关的方法
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
        },
        getHomeGoods(type) {
            const page = this.goods[type].page + 1
            getHomeGoods(type, page).then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1
                // this.$refs.scroll.finishPullUp()
            })
        }
    }
}
</script>
   
<style scoped>
#home {
    /* padding-bottom: 49px; */
    z-index: 100;
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
}

.home-nav {
    width: 100%;
    background-color: #f46;
    color: aliceblue;
    /* position: fixed;
    left: 0;
    top: 0;
    z-index: 100; */
}

/* .tab-control {
     position: sticky; 
    top: 44px;
    z-index: 9;
} */ 
.tab-control {
    position: relative;
    z-index: 9;
}
/* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
} */
.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}

.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
}
</style>