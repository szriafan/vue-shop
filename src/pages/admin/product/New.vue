<template>
  <product-form
    @save-product="addProduct"
    :model="{manufacturer: manufacturers[0]}"
    :manufacturers="manufacturers">
  </product-form>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import ProductForm from '../../../components/product/ProductForm'

export default {
  name: 'NewProduct',
  components: {ProductForm},
  created () {
    this.getAllManufacturers()
  },
  computed: mapState(['manufacturers']),
  methods: mapActions(['getAllManufacturers', 'addProduct'])
}
</script>
