import {  createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    loader:false,
    
}
const loaderSlices= createSlice({
    name:'loader',
    initialState,
    reducers:{
        handleLoader:(state,action)=>{
            state.loader = action.payload
        }
    },
})

export const {handleLoader} =loaderSlices.actions;
export default loaderSlices.reducer;