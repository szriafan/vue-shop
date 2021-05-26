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
      total + parseFloat(item.price) * parseInt(item.quantity),
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
      return parseInt(item.quantity)
    } else {
      return 0
    }
  }
}
