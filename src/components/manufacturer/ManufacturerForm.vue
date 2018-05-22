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
      <div class="form-group pull-right">
        <button type="button" class="button icon grey" @click="goBack">
          <i class="iconfont icon-back"></i> 取消
        </button>
        <button type="submit" class="button icon" v-if="isEditing">
          <i class="iconfont icon-edit"></i> 修改
        </button>
        <button type="submit" class="button icon" v-else>
          <i class="iconfont icon-add"></i> 添加
        </button>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  name: 'ManufacturerForm',
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
    },
    goBack() {
      history.back()
    }
  }
}
</script>
