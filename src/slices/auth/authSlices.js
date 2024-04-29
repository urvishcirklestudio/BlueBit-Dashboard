import {  createSlice } from "@reduxjs/toolkit";
const getlocaldata = (localData,defaultsval) => {
    let themevalue = localStorage.getItem(localData);
    return themevalue ? JSON.parse(themevalue):defaultsval; 
};
const initialState = {
    auth:getlocaldata('Authentication',false),
    RegisterUser:getlocaldata('RegisterUser',[])
}
const setLocalSetting=(name,val)=>{  
    window.localStorage.setItem(name,JSON.stringify(val));
}
const authSlices= createSlice({
    name:'auth',
    initialState,
    reducers:{
        handleAuth:(state,action)=>{
            state.auth = action.payload
            setLocalSetting('Authentication',action.payload);
        },
        getNewUser:(state,action)=>{
            state.RegisterUser = (action.payload)
            setLocalSetting('RegisterUser',state.RegisterUser);
        },
        SetNewPassword:(state,action)=>{
            state.RegisterUser.Password= (action.payload)
            setLocalSetting('RegisterUser',state.RegisterUser);
        }
    },
})

export const {getNewUser,handleAuth,SetNewPassword} =authSlices.actions;
export default authSlices.reducer;