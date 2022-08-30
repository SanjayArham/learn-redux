import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItem: [],
    length: undefined
}

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    dispatchUpdateCart: (state, action) => {
        let products =  action.payload;
        state.cartItem = [];
        products.forEach(element => {
          if(element.inCart === true){
            let newCartItem = { ...element, quantity: 1 };
            state.cartItem.push(newCartItem);
          } 
        });
        console.log(state.cartItem);
        state.length = state.cartItem.length
    },
  },
})

// Action creators are generated for each case reducer function
export const { dispatchUpdateCart } = cartSlice.actions

export default cartSlice.reducer;