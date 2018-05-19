<template>
  <div class="container product-details">
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details-image">
      <img
        class="img-responsive" :src="product.image" alt="">
    </div>
    <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info">
      <div class="product-details-description">
        <small>{{product.manufacturer && product.manufacturer.name}}</small>
        <h4>{{product.name}}</h4>
        <h5>{{inventoryInfo}}</h5>
        <hr/>
        <div>
          {{product.description}}
        </div>
      </div>
      <hr/>
      <div class="product-details-price-cart">
        <div>{{product.price | currency }}</div>
        <cart-control :product="product" :added="added" :preparing="true"></cart-control>
        <button class="button" :disabled="added + count > product.inventory"
          @click="addCartItems(product)">加入购物车
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex'

import CartControl from "../cart/CartControl";

export default {
  name: 'ProductDetail',
  components: {CartControl},
  props: ['product'],
  computed: {
    ...mapGetters(['addedQuantity']),
    ...mapState(['count']),
    added() {
      return this.addedQuantity(this.$route.params['id'])
    },
    inventoryInfo() {
      const inventory = this.product.inventory
      if(inventory > 0) {
        return inventory + '件可售'
      }
      return '缺货'
    }
  },
  methods: mapMutations(['addCartItems'])
}
</script>
