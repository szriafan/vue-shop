<template>
  <product-detail :product="model"></product-detail>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import ProductDetail from "../components/product/ProductDetail";

export default {
  name: 'Detail',
  components: {ProductDetail},
  created () {
    // reset quantity state
    this.$store.commit('willUpdateCartItem', 1)
    if (!this.model.name) {
      this.productById(this.$route.params['id'])
    }
  },
  state: ['cart'],
  computed: {
    ...mapGetters(['productById']),
    model() {
      return {
        ...this.productById(this.$route.params['id'])
      }
    }
  }
}
</script>
