<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>产品名</label>
        <input
          type="text"
          class="form-control"
          placeholder="产品名"
          v-model="form.name"
          v-validate="'required'"
          name="name"
          :class="{'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">产品名不能为空</span>
      </div>
      <div class="form-group">
        <label>价格</label>
        <input
          type="number"
          class="form-control"
          placeholder="价格"
          v-model="form.price"
          v-validate="'required'"
          name="price"
          :class="{'error': errors.has('price') }" />
        <span class="small text-danger" v-show="errors.has('price')">价格不能为空</span>
      </div>

      <div class="form-group">
        <label>库存</label>
        <input
          type="number"
          class="form-control"
          placeholder="库存"
          v-model="form.inventory"
          v-validate="'required'"
          name="inventory"
          :class="{'error': errors.has('inventory') }" />
        <span class="small text-danger" v-show="errors.has('inventory')">库存不能为空</span>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>品牌</label>
        <select
          class="form-control"
          placeholder="品牌"
          v-model="form.manufacturer"
          v-validate="'required'"
          name="manufacturer"
          :class="{'error': errors.has('manufacturer') }">
          <template v-for="manufacturer in manufacturers">
            <option :value="manufacturer">{{manufacturer.name}}</option>
          </template>
        </select>
      </div>
      <div class="form-group">
        <label>图片</label>
        <input
          type="text"
          class="form-control"
          placeholder="图片"
          v-model="form.image"
          v-validate="'required|url'"
          name="image"
          :class="{'error': errors.has('image')}" />
        <span class="small text-danger" v-show="errors.has('image')">图片不能为空且有效</span>
      </div>
      <div class="form-group">
        <label>描述</label>
        <textarea
          type="number"
          class="form-control"
          placeholder="描述"
          rows="5"
          v-model="form.description"
          v-validate="'required'"
          name="description"
          :class="{'error': errors.has('description') }"></textarea>
        <span class="small text-danger" v-show="errors.has('description')">描述不能为空</span>
      </div>
      <button-group :is-editing="isEditing"></button-group>
    </div>
  </form>
</template>

<script>
import ButtonGroup from '../../components/ButtonGroup'
import {mapState, mapActions} from "vuex";

export default {
  name: 'ProductForm',
  components: {ButtonGroup},
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      form: {}
    }
  },
  computed: {
    ...mapState(['manufacturers']),
    isEditing() {
      return this.product !== undefined
    }
  },
  created () {
    this.getAllManufacturers()
    if (this.isEditing) {
      this.form = { ...this.product }
    } else {
      this.form = {}
    }
  },
  methods: {
    ...mapActions(['addProduct', 'updateProduct', 'getAllManufacturers']),
    saveProduct() {
      this.$validator.validateAll().then(isValid => {
        if(isValid) {
          const form = this.form
          this.$emit('save-product', this.isEditing ? this.updateProduct(form) : this.addProduct(form))
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
