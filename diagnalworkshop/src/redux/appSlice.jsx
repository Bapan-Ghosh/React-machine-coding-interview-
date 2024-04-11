import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
     name:'movieList',
     initialState:{
        items:[], // empty array to store the data from the API
        items2:[]
     },
     reducers:{
        cardData: (state, action) => { // reducer fn
            return {    // so that ever time it store a completly new data, not with the existing one
                ...state,
                items: action.payload
            };
        },
        originalData: (state, action) => {
            return {    // so that ever time it store a completly new data, not with the existing one
                ...state,
                items2: action.payload
            };
          },
     }
})

export const { cardData,originalData } = cartSlice.actions;
export default cartSlice.reducer;
