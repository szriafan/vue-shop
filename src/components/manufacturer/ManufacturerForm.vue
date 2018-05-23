<template>
  <form @submit.prevent="saveManufacturer">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>品牌名</label>
        <input
          type="text"
          class="form-control"
          placeholder="品牌名"
          v-model="model.name"
          v-validate="'required'"
          name="name"
          :class="{'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">品牌名不能为空</span>
      </div>
      <button-group :is-editing="isEditing"></button-group>
    </div>
  </form>
</template>

<script>

import ButtonGroup from '../common/ButtonGroup'

export default {
  name: 'ManufacturerForm',
  components: {ButtonGroup},
  props: {
    model: {
      type: Object,
      default: function(){}
    },
    isEditing: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    saveManufacturer () {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.$emit('save-manufacturer', this.model);
        } else {
          this.$toast.error('请确保表单填写正确');
        }
      })
    }
  }
}
</script>
