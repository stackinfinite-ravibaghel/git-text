// import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// interface Product {
//   id:number;
//   name:string;
//   description :string;
//   price : number;
//   discount : number;
//   image: string;
//   quantity: number;
// }

// interface CartState {
//   products: Product [];
// }

// const initialState : CartState = {
//   products : [],
// }

// const cartSlice = createSlice ({
//   name:'cart',
//   initialState,
//   reducers: {
//     addToCart(state,action :PayloadAction<Product>){
//       const product = state.products.find(p => p.id === action.payload.id);
//       if(product) {
//         product.quantity += action.payload.quantity;
//       }else{
//         state.products.push({ ...action.payload, quantity : 1});
//       }
//     },
//     updateQuantity(state, action : payloadAction < {id:number , quantity : number }>){
//       const product = state.products.find(p => === action.payload.id);
//       if (product) {
//         product.quantity = action.payload.quantity;
//       }
//     },
//     removeFromCart(state, action: payloadAction<number>){
//       state.products = state.products.filter(p => p.id !== action.payload);
//     },
//   },
// });

// export const { addToCart} = cartSlice.actions;
// export default cartSlice.reducer;
