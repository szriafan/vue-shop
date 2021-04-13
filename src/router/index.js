import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Detail from '../pages/Detail'
import Index from '../pages/admin/Index'
import Products from '../pages/admin/product/List'
import ProductForm from '../pages/admin/product/Form'
import Manufacturers from '../pages/admin/manufacturer/List'
import ManufacturerForm from '../pages/admin/manufacturer/Form'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      redirect: Manufacturers,
      children: [
        {
          path: 'products',
          name: 'AdminProducts',
          component: Products
        },
        {
          path: 'products/new',
          name: 'NewProduct',
          component: ProductForm
        },
        {
          path: 'products/edit',
          name: 'EditProduct',
          component: ProductForm,
          props: true
        },
        {
          path: 'manufacturers',
          name: 'Manufacturers',
          component: Manufacturers
        },
        {
          path: 'manufacturers/new',
          name: 'NewManufacturer',
          component: ManufacturerForm,
        },
        {
          path: 'manufacturers/edit',
          name: 'EditManufacturer',
          component: ManufacturerForm,
          props: true
        }
      ]
    },
    {
      path: '/products/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
});
