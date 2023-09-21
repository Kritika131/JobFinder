import {createSlice} from '@reduxjs/toolkit'

const initialState={
    users:[],
    loggedUser:null,
    apiData:[],
    id:null,
    apiIdData:[],

};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setSignUpDetails:(state,action)=>{
            
            state.users=[...state.users,action.payload];
        },
        setLoginUser:(state,action)=>{
            state.loggedUser=action.payload;
        },
        setAPIData:(state,action)=>{
            state.apiData=[...state.apiData,action.payload];
        },
        setLoggout:(state)=>{
            state.loggedUser= null;
        },
        setJobId:(state,action)=>{
            state.id = action.payload.id;
        },
        setAPIIdData:(state,action)=>{
            state.apiIdData=action.payload;
        },
       
    },
});
export const {setSignUpDetails,setLoginUser,setAPIData,setLoggout,setJobId,setAPIIdData} = userSlice.actions;

export const selectUsers = (state)=>state.user.users;
export const selectApiData = (state) =>state.user.apiData;
export const selectedId = (state) =>state.user.id;
export const selectedApiIdData= (state)=>state.user.apiIdData;

export default userSlice.reducer;