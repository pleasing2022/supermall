<template>
    <div class="tab-control">
          <!-- 第三行：如果index等于currentIndex,则动态绑定的active类显示出来 点击谁，currentIndex就变成几，所以点谁，谁就会显示这个类-->
       <div v-for="(item,index) in titles" 
            class="tab-control-item"           
            :class="{active:index === currentIndex}" 
            @click="itemClick(index)">

       <!-- 遍历出来的item为显示的title -->
        <span>{{item}}</span>
       </div>
    </div>
</template>
   
<script>
export default {
    name: "TabControl",
    props:{
        titles:{
            type: Array,
            // 当默认值是对象或数组时，默认值必须写成函数
            default(){
                return []
            }
        }

    },
    data(){
        return {
            currentIndex: 0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;
            //子组件往外面传，$emit自定义事件
            this.$emit('tabClick',index)
        }
    }
}
</script>
   
<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    background-color: #fff;
}

.tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
}

.tab-control-item span{
padding: 5px;
}

.active span{
    color: rgb(224, 111, 130);
    border-bottom: 3px solid rgb(224, 111, 130);
}
</style>