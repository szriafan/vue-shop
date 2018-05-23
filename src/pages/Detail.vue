<template>
  <div>
    <product-detail :product="model"></product-detail>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import ProductDetail from '../components/product/ProductDetail'

export default {
  name: 'Detail',
  components: {ProductDetail},
  created() {
    // reset count state to 1
    this.willUpdateCartItem(1)
    if (!this.model.name) {
      this.getProductById(this.$route.params['id'])
    }
  },
  computed: {
    ...mapGetters(['productById']),
    model() {
      return {
        ...this.productById(this.$route.params['id'])
      }
    }
  },

  methods: {
    ...mapActions(['getProductById']),
    ...mapMutations(['willUpdateCartItem'])
  }

}
</script>
