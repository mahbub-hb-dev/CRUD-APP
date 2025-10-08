import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialBooks = {
    books : [
        {id : uuidv4(), title : "Loving Bangladesh", author : "Mahbub Hasan"},
        {id : uuidv4(), title : "Bangladesh", author : "M.H. Belal"}
    ]
}

export const booksSlice = createSlice({
    name : 'books',
    initialState : initialBooks,
    reducers : {
        ShowBooks : (state) => state,
        addBooks : (state, action) => {
            state.books.push(action.payload);
        },
        updateBooks : (state, action) => {
            const {id, title, author} = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id);
            if(isBookExist){
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        },
        deleteBook : (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        }
    }
})

export const { ShowBooks, addBooks, deleteBook, updateBooks } = booksSlice.actions;
export default booksSlice.reducer;