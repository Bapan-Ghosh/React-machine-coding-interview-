import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./appSlice";

// creating the redux global store
const store = configureStore({
      reducer : {
        movieList : listReducer
      }
}) 

export default store;