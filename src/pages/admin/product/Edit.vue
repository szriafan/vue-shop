<template>
  <product-form
    @save-product="updateProduct"
    :model="model"
    :manufacturers="manufacturers"
    :isEditing="true">
  </product-form>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import ProductForm from '../../../components/product/ProductForm'

export default {
  name: 'Edit',
  components: {ProductForm},
  created() {
    if (!this.model.name) {
      this.getProductById(this.$route.params['id'])
    }
    if (this.manufacturers.length === 0) {
      this.getAllManufacturers()
    }
  },

  computed: {
    ...mapState(['manufacturers']),
    ...mapGetters(['productById']),
    model() {
      return {
        ...this.productById(this.$route.params['id'])
      }
    }
  },
  methods: mapActions(['getProductById', 'updateProduct', 'getAllManufacturers'])
}
</script>
