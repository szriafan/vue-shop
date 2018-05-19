<template>
  <div>
    <div class="title">
      <h4>
        <div class="iconfont icon-sale" v-if="products.length > 0">
          热卖中...
        </div>
        <div v-else>
          产品还没上架，请在管理页面
          <router-link :to="{name: 'Admin'}"> 添加</router-link>
        </div>
      </h4>
    </div>
    <product-list :products="products"></product-list>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import ProductList from '../components/product/ProductList'

export default {
  name: 'Home',
  components: {ProductList},
  created() {
    this.getAllProducts()
  },
  computed: mapState(['products']),
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
