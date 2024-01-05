import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //action
        //function to add to cart
        addToCart :(state,action)=>{
            state.push(action.payload)
        },
        //function to remove item from cart
        removeFromCart : (state, action)=>{
       return state.filter(item =>item.id != action.payload)
    },
    //function to emoty in the cart
    emptyCart:(state)=>{
        return state =[]
    }
}

})
export const {addToCart, removeFromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer