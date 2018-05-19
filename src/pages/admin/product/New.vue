<template>
  <product-form
    @save-product="addProduct"
    :model="model"
    :manufacturers="manufacturers">
  </product-form>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import * as types from '../../../store/mutation-types'
import ProductForm from '../../../components/product/ProductForm'

export default {
  name: 'NewProduct',
  components: {ProductForm},
  data () {
    return {
      model: {
        manufacturer: {}
      }
    }
  },
  created () {
    this.getAllManufacturers();
  },
  mounted(){
    this.model.manufacturer = this.manufacturers[0]
  },
  computed: mapState(['manufacturers']),
  methods: mapActions(['getAllManufacturers', 'addProduct'])
}
</script>
