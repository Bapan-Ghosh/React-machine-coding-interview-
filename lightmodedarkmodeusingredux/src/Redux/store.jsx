import { configureStore } from "@reduxjs/toolkit";
import darklightSlice from "./darklightSlice";

const store = configureStore ({
    reducer :{
        darkLight : darklightSlice
    }
})

export default store;