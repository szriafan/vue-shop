<template>
  <manufacturer-form
    @save-manufacturer="updateManufacturer"
    :model="model"
    :isEditing="true">
  </manufacturer-form>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ManufacturerForm from '../../../components/manufacturer/ManufacturerForm'

export default {
  name: 'Edit',
  components: {ManufacturerForm},

  created() {
    if (!this.model.name) {
      this.getManufacturerById(this.$route.params['id'])
    }
  },

  computed: {
    ...mapGetters(['manufacturerById']),
    model() {
      return {
        ...this.manufacturerById(this.$route.params['id'])
      }
    }
  },
  methods: mapActions(['updateManufacturer', 'getManufacturerById'])
}
</script>
