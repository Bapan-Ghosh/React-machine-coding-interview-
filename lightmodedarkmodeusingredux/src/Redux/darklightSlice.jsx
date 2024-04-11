import { createSlice } from "@reduxjs/toolkit"

const darklightSlice = createSlice({
    name : "darkLight",
    initialState : {
        islight : false
    },
    reducers :{
        changeDarakLight : (state, action)=>{
            state.islight = !state.islight; 
        }
    }
})

export const {changeDarakLight} = darklightSlice.actions;
export default darklightSlice.reducer;