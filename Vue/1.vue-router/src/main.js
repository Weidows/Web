/*
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-09-07 19:51:15
 * @LastEditors: Weidows
 * @LastEditTime: 2021-09-07 19:52:04
 * @FilePath: \Web\Vue\1.vue-router\src\main.js
 * @Description:
 * @!: *********************************************************************
 */
import Vue from "vue";
import App from "./App";
import router from "./router"; //自动扫描里面的路由配置

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  //配置路由
  router,
  components: { App },
  template: "<App/>",
});
