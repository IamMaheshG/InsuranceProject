import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name: 'authSlice',
    initialState: {
       token:'',
       isLoggedIn: false 
    },
    reducers: {
        isLogin(state,action){
            state.token=action.payload;
            state.isLoggedIn=true
        },
        isLogout(state){
            state.isLoggedIn=false
            state.token=null;
        }
    }
})

export const authActions= authSlice.actions;
export default authSlice;