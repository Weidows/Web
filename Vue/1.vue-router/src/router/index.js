/*
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-09-07 20:03:19
 * @LastEditors: Weidows
 * @LastEditTime: 2021-09-07 20:21:21
 * @FilePath: \Web\Vue\1.vue-router\src\router\index.js
 * @Description:
 * @!: *********************************************************************
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Content from "../components/Content";
import Main from "../components/Main";
import Test from "../components/Test";

//安装路由
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
  routes: [
    {
      //路由路径
      path: "/content",
      name: "content",
      //跳转的组件
      component: Content,
    },
    {
      //路由路径
      path: "/main",
      name: "main",
      //跳转的组件
      component: Main,
    },
    {
      //路由路径
      path: "/test",
      name: "test",
      //跳转的组件
      component: Test,
    },
  ],
});
