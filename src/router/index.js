import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/login"
  },
  {
    name: "登录",
    path: "/login",
    component: ()=>import("@/views/Login.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
