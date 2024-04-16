import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";

// Creating the Redux store
const store = configureStore({

    // Configuring reducers for the store
    reducer : {
        todo: todoReducer, // Using the todoReducer from the todoSlice
    }

});

// Exporting the configured Redux store as the default export
export default store;