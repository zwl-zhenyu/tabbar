<template>
  <div id="app">
    <router-view></router-view>
    <!-- 2、使用TabBar -->
    <tab-bar>
      <tab-bar-item path="/home" activeColor="green">
        <template v-slot:item-icon>
          <img src="./assets/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="./assets/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="./assets/tabbar/shopcart.svg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/tabbar/shopcart_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="./assets/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// 1、引入TabBar
import TabBar from './components/tarbar/TabBar.vue'
import TabBarItem from './components/tarbar/TabBarItem.vue'
export default {
  name: 'App',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      isActive: true
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="scss">
@import './assets/css/base.css';
</style>
