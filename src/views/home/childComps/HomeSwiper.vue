<template>
    <div>
        <swiper>
            <swiper-item v-for="item in banners">
                <a :href="item.link">
                    <img :src="item.image" alt="" @load="imageLoad">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>
   
<script>
// import {Swiper,SwiperItem} from '../../../components/common/swiper'
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'

export default {
    name: "HomeSwiper",
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            isLoad: false
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
        imageLoad() {
            //为了不让它发出多次事件，用isLoad变量进行状态的记录
            if (!this.isLoad) {
                this.$emit('swiperImageLoad')
                this.isLoad = true
            }
        }
    }
}
</script>
   
<style scoped>

</style>