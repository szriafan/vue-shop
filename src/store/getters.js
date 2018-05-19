export const productGetters = {
  /**
   * locally find Product by ID
   * @param state
   * @param getters
   * @returns {Function}
   */
  productById: (state, getters) => id => {
    if (state.products.length > 1) {
      return state.products.find(p => p._id === id)
    } else {
      return state.product
    }
  }
}
export const manufacturerGetters = {
  /**
   * locally find manufacturer by ID
   * @param state
   * @param getters
   * @returns {Function}
   */
  manufacturerById: (state, getters) => id => {
    if (state.manufacturers.length > 0) {
      return state.manufacturers.find(p => p._id === id)
    } else {
      return state.manufacturer
    }
  }
}

export const cartGetters = {
  /**
   * get Cart Items Count
   * @param state
   * @returns {number}
   */
  cartItemsCount: (state, getter) => {
    let total = 0;
    state.cart.forEach(p => {
      total += parseInt(p.quantity);
    });
    return total;
  },
  /**
   * get sum price
   * @param state
   * @returns {*}
   */
  cartPriceSum: state =>
    state.cart.items.reduce((total, item) =>
      total + item.price * parseInt(item.quantity),
      0
    ),

  /**
   * get item quantity put in the car
   * @param state
   * @param getters
   * @returns {Function}
   */
  addedQuantity: (state, getters) => id => {
    const item = state.cart.find(p => p._id === id)
    if (item) {
      return item.quantity
    } else {
      return 0
    }
  }
}
