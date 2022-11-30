import { createSlice } from "@reduxjs/toolkit";
const localToken= localStorage.getItem('token')
const authSlice=createSlice({
    name: 'authSlice',
    initialState: {
       token:localToken,
       isLoggedIn: false 
    },
    reducers: {
        isLogin(state,action){
            state.token=action.payload;
            state.isLoggedIn=true;
            localStorage.setItem('token', action.payload)
        },
        isLogout(state){
            state.isLoggedIn=false
            state.token=null;
            localStorage.removeItem('token')
        }
    }
})

export const authActions= authSlice.actions;
export default authSlice;