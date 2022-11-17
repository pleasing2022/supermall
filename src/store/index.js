import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//需要在main.js里进行导入并挂载

export default new Vuex.Store({
  state: {
    //状态属性信息等
    //counter:1000
    /*students:[
        {id:110,age:18},
        {id:111,age:19},
        {id:112,age:21},
        {id:113,age:22}
      ]*/
  },
  getters: {
    //计算属性
    /*
      more20stu(state){
        return state.students.filter(s => s.age > 20)
      }
    */
   //此时想展示这个数据就在template里面{{$store.getters.more20stu}}
   //二---------------------------------------------
     /*
      more20stu(state,getters){
        return getters.more20stu.length       此处返回是2  也就是说可以在getters里调用getters
      }
     */
  //三--------------------------------------------------
    /*
      moreAgestu(){
        return function (age) {
          return state.students.filter(s => s.age > age)
        }
      }
    //此时想展示这个数据就在template里面{{$store.getters.more20stu(这个括号里面可以传参数，即要筛选的年龄)}}
    */
  },
  mutations: {
    //方法(方法里默认传入state参数)，根据情况可以自己加传另外的参数(方法里自己写类似上方age)
    /* increment(state){
       state.counter++
       }  
    */
    //然后在对应的组件里引入，在组件的方法里this.$store.commit('increment')
  },
  actions: {
    //一些异步操作
  },
  modules: {
  }
})
