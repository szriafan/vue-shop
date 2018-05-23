<template>
  <manufacturer-form
    @save-manufacturer="addManufacturer"
    :model="{}">
  </manufacturer-form>
</template>

<script>
import {mapActions} from 'vuex'
import ManufacturerForm from '../../../components/manufacturer/ManufacturerForm'
import * as types from '../../../store/mutation-types'

export default {
  name: 'NewManufacturer',
  components: {ManufacturerForm},
  methods: mapActions(['addManufacturer']),
  created(){
    // no need load
    this.$store.commit(types.LOADED)
  },
}
</script>

