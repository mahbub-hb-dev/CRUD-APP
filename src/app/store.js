import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/BooksSlice";

const store = configureStore({
    reducer : {
        booksReducer : booksReducer,
    }
})

export default store;