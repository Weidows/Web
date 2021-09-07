<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-09-07 19:51:15
 * @LastEditors: Weidows
 * @LastEditTime: 2021-09-07 20:06:34
 * @FilePath: \Web\Vue\1.vue-router\src\App.vue
 * @Description:
 * @!: *********************************************************************
-->
<template>
  <div id="app">
    <h1>Weidows</h1>

    <router-link to="/main">首页</router-link>
    <router-link to="/content">内容页</router-link>
    <router-link to="/test">Test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
