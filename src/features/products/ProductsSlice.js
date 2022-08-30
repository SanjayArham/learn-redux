import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
    products: [
        {
            id: 1,
            title: "Redmi Note 8",
            image: 'https://www.gizmochina.com/wp-content/uploads/2019/09/Xiaomi-Redmi-Note-8-1-500x500.jpg',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            vendor: "Xiomi",
            salesPrice: 12499,
            costPrice: 10000,
            comparePrice: 13499,
            inCart: false,
            url: '/redmi-note-8'
        },
        {
            id: 2,
            title: "Redmi Note 9",
            image: 'https://www.gizmochina.com/wp-content/uploads/2019/09/Xiaomi-Redmi-Note-8-1-500x500.jpg',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            vendor: "Xiomi",
            salesPrice: 15000,
            costPrice: 12000,
            comparePrice: 16000,
            inCart: false,
            url: '/redmi-note-9'
        },
        {
            id: 3,
            title: "Realme 6 Pro",
            image: 'https://www.gizmochina.com/wp-content/uploads/2019/09/Xiaomi-Redmi-Note-8-1-500x500.jpg',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            vendor: "Realme",
            salesPrice: 18000,
            costPrice: 14000,
            comparePrice: 20000,
            inCart: false,
            url: '/realme-6-pro'
        },
        {
            id: 4,
            title: "Samsung Note 10",
            image: 'https://www.gizmochina.com/wp-content/uploads/2019/09/Xiaomi-Redmi-Note-8-1-500x500.jpg',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            vendor: "Samsung",
            salesPrice: 36000,
            costPrice: 28000,
            comparePrice: 40000,
            inCart: false,
            url: '/samsung-note-10'
        },
        {
            id: 5,
            title: "iPhone 13 Pro Max",
            image: 'https://www.gizmochina.com/wp-content/uploads/2019/09/Xiaomi-Redmi-Note-8-1-500x500.jpg',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            vendor: "Samsung",
            salesPrice: 156000,
            costPrice: 125000,
            comparePrice: null,
            inCart: false,
            url: '/iphone-13-pro-max'
        }
    ]
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    dispatchCreateProduct: (state, action) => {
        let createProductData = action.payload;
        
        let createUuId = uuid();
        let unique_id = createUuId.slice(0,8)

        let newProduct = {
            id: unique_id,
            title: createProductData.title,
            image: createProductData.image,
            description: createProductData.description,
            vendor: createProductData.vendor,
            salesPrice: createProductData.salesPrice,
            costPrice: createProductData.costPrice,
            comparePrice: createProductData.comparePrice,
            inCart: createProductData.inCart,
            url: '/' + createProductData.url
        }

        state.products.push(newProduct);

        console.log(newProduct.id);
    },
    dispatchAddToCart: (state, action) => {
        let addToCartId = action.payload;
        let addToCartIndex = state.products.map(function(x) {return x.id; }).indexOf(addToCartId);
        state.products[addToCartIndex].inCart = true;
    },
    dispatchRemoveFromCart: (state, action) => {
        let removeFromCartId = action.payload;
        let removeFromCartIndex = state.products.map(function(x) {return x.id; }).indexOf(removeFromCartId);
        state.products[removeFromCartIndex].inCart = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { dispatchCreateProduct, dispatchAddToCart, dispatchRemoveFromCart } = productsSlice.actions

export default productsSlice.reducer;