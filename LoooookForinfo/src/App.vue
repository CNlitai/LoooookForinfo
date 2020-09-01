<template>
  <div id="app">
    <div class="left">
      <div class="left_top">看点资讯</div>
      <div class="left_bottom">
        <div><router-link to="/">首页</router-link></div>
        <div><router-link to="/user">用户管理</router-link></div>
        <div><router-link to="/article">文章管理</router-link></div>
        <div><router-link to="/category">栏目管理</router-link></div>

      </div>
    </div>
    <div class="right">
      <router-view/>
    </div>
  </div>
</template>

<style>
* {
  padding: 0px;
  margin: 0px;
}
html,body,#app {
  width: 100%;
  height: 100%;
}
.left {
  width: 140px;
  height: 100%;
  background-color:antiquewhite;
  float:  left;
}
.left_top {
  height: 50px;
  background-color: #f94;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
}
.left_bottom>div {
  height: 30px;
  background-color: azure;
  line-height: 30px;
  text-align: center;
  margin-bottom: 3px;
}
.right {
  height: 100%;
  width: calc(100% - 140px);
  background-color: aquamarine;
  float: left;
}
</style>
