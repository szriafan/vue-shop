<template>
  <div v-if="code === 1">
    <h4 class="title">
      <div v-if="products.length === 0">
        产品还没上架，请在管理页面
        <router-link :to="{name: 'Admin'}"> 添加</router-link>
      </div>
      <div v-else class="iconfont icon-sale" >
        热卖中...
      </div>
    </h4>
    <div class="container">
      <template v-for="product in products">
        <product-item :product="product"></product-item>
      </template>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import ProductItem from "../components/ProductItem";

export default {
  name: 'Home',
  components: {ProductItem},
  created() {
    this.getAllProducts()
  },
  computed: mapState(['products', 'code']),
  methods: mapActions(['getAllProducts'])
};
</script>

<style lang="less">
  @import '../assets/less/variables';
  .iconfont {
    &.icon-sale {
      font-size: 18px;
      color: @red;
    }
  }
</style>
