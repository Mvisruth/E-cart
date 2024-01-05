import { createSlice } from "@reduxjs/toolkit";





const wishlistSlice = createSlice({
    name:'whislist',
    initialState:[],//to store more than one vlue
    reducers:{
        //actions
        //function to add item to the state
        addtowishlist :(state,action)=>{
            state.push(action.payload)

        },
        removeFromwishlist :(state,action)=>{
            //filter - return a new arrray satisfying the condition
           return  state.filter(item=>item.id!=action.payload)
        }
    }
    
})
export const {addtowishlist,removeFromwishlist} = wishlistSlice.actions
export default wishlistSlice.reducer