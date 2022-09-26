import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItem: [],
    length: undefined,
    subTotal: 0,
    tax: 18,
    taxPrice: 0,
    finalPrice: 0
}

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    dispatchAddCart: (state, action) => {
        let newProducts =  action.payload;
        console.log(newProducts)
        let newCartItem = { ...newProducts, quantity: 1, linePrice: newProducts.salesPrice };
        newCartItem.linePrice = newCartItem.salesPrice * newCartItem.quantity
        state.cartItem.push(newCartItem);
        state.length = state.cartItem.length

        var subTotal = 0
        for(let cartItemsKey in state.cartItem){
          subTotal += state.cartItem[cartItemsKey].linePrice;
        }
        state.subTotal = subTotal;

        state.taxPrice = state.subTotal * state.tax / 100;
        state.finalPrice = state.subTotal + state.taxPrice;
    },
    dispatchRemoveCart: (state, action) => {
      let currId = action.payload;
      let currIndex = state.cartItem.map(function(x) {return x.id; }).indexOf(currId);
      state.cartItem.splice(currIndex, 1);
      state.length = state.cartItem.length

      var subTotal = 0
      for(let cartItemsKey in state.cartItem){
        subTotal += state.cartItem[cartItemsKey].linePrice;
      }
      state.subTotal = subTotal

      state.taxPrice = state.subTotal * state.tax / 100;
      state.finalPrice = state.subTotal + state.taxPrice;
    },
    dispatchIncreaseQty: (state, action) => {
      let currId = action.payload;
      let currIndex = state.cartItem.map(function(x) {return x.id; }).indexOf(currId);
      if(state.cartItem[currIndex].quantity >= 10){
        state.cartItem[currIndex].quantity = 10
        state.cartItem[currIndex].linePrice = state.cartItem[currIndex].salesPrice * state.cartItem[currIndex].quantity;
      }else{
        state.cartItem[currIndex].quantity =  state.cartItem[currIndex].quantity + 1;
        state.cartItem[currIndex].linePrice = state.cartItem[currIndex].salesPrice * state.cartItem[currIndex].quantity;
      }

      
      var subTotal = 0
      for(let cartItemsKey in state.cartItem){
        subTotal += state.cartItem[cartItemsKey].linePrice;
      }
      state.subTotal = subTotal

      state.taxPrice = state.subTotal * state.tax / 100;
      state.finalPrice = state.subTotal + state.taxPrice;
    },
    dispatchDecreaseQty: (state, action) => {
      let currId = action.payload;
      let currIndex = state.cartItem.map(function(x) {return x.id; }).indexOf(currId);
      if(state.cartItem[currIndex].quantity <= 1){
        state.cartItem[currIndex].quantity = 1
        state.cartItem[currIndex].linePrice = state.cartItem[currIndex].salesPrice * state.cartItem[currIndex].quantity;
      }else{
        state.cartItem[currIndex].quantity = state.cartItem[currIndex].quantity - 1;
        state.cartItem[currIndex].linePrice = state.cartItem[currIndex].salesPrice * state.cartItem[currIndex].quantity;
      }

      
      var subTotal = 0
      for(let cartItemsKey in state.cartItem){
        subTotal += state.cartItem[cartItemsKey].linePrice;
      }
      state.subTotal = subTotal

      state.taxPrice = state.subTotal * state.tax / 100;
      state.finalPrice = state.subTotal + state.taxPrice;
    },
  },
})

// Action creators are generated for each case reducer function
export const { dispatchAddCart, dispatchRemoveCart, dispatchIncreaseQty, dispatchDecreaseQty } = cartSlice.actions

export default cartSlice.reducer;