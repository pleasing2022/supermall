<template>
    <div class="goods">
        <!-- 不需要插槽，可以使用单个 -->
        <!-- 绑定item数据为goodsItem在GoodsListItem里使用 -->
        <!-- 遍历goods创建了30个GoodsListItem组件，一个GoodsListItem组件对应一个GoodsItem数据 -->
        <goods-list-item v-for="item in goods" :goods-item="item" />
        <!-- {{goods}} -->
    </div>
</template>
   
<script>
import GoodsListItem from './GoodsListItem.vue';

export default {
    name: "GoodsList",
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
   
<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>