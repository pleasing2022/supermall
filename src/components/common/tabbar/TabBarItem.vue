<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    //父传子，在子组件加props,这里放子组件接收的值
    props: {
        path: String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data() {
        return {
            // isActive: true
        }
    },
    computed:{
        isActive(){
            //当前item里有4个path，判断路由活跃的path是否包含当前路由，如果包含，对应的也就变红，如果不包含就是-1
            return this.$route.path.indexOf(this.path) !== -1
            // return this.$route.path == this.path
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemClick() {
            //catch解决连续点击报错情况
            this.$router.replace(this.path).catch(err => {
                // console.log(this.path)
                // if (this.path != this.path) {
                //     console.log(err)
                // }
            })
        }
    }
}

</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}

.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}

.active {
    color: red;
}
</style>