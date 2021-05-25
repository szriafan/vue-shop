import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Detail from '../pages/Detail'
import Admin from '../pages/admin'
import ProductList from '../pages/admin/ProductList'
import ProductForm from '../pages/admin/ProductForm'
import ManufacturerList from '../pages/admin/ManufacturerList'
import ManufacturerForm from '../pages/admin/ManufacturerForm'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      redirect: '/admin/manufacturers',
      children: [
        {
          path: 'products',
          name: 'AdminProducts',
          component: ProductList
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
          component: ManufacturerList
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
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
});
