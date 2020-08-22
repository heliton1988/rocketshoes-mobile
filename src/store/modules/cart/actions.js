export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

// export function removeFromcart(id) {
//   return {};
// }
