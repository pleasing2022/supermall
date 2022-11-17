<template>
    <div id="detail">
        <detail-nav-bar />
        <detail-swiper :top-images="topImages" />
        <detail-base-info :goods="goods" />
    </div>
</template>
   
<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'

import { getDetail, Goods, Shop} from '@/network/detail'

export default {
    name: "Detail",
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo 
    },
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop:{}
        }
    },
    created() {
        //保存传入的iid
        this.iid = this.$route.params.iid

        //根据iid请求详情数据
        getDetail(this.iid).then(res => {
            //获取顶部的轮播图片数据
            console.log(res);;
            const data = res.result;
            this.topImages = res.result.itemInfo.topImages

            //获取商品信息
            //括号里面参数应该是res.result，在上面定义data等于res.result
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

            //创建店铺信息对象
            this.shop = new Shop(data.shopInfo)
        })
    }
}
</script>
   
<style scoped>
#detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
}
</style>