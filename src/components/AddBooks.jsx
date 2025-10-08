import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from '../features/BooksSlice';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

const AddBooks = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {id:uuidv4(), title, author};
    dispatch(addBooks(book));
    navigate('/bookview', {replace : true});
    setTitle('');
    setAuthor('');
  }

  return (
    <div className='p-4'>
        <h1 className='text-2xl text-center font-bold mb-3'> Add All Books </h1>

        <form onSubmit={handleSubmit} className='bg-red-200 px-5 py-16 sm:w-2/3 sm:mx-auto rounded-lg'>
          <div>
            <label className='w-[75px] inline-block font-bold' htmlFor="title"> Title : </label>
            <input type="text" id='title' name='title' value={title} onChange={(e)=> setTitle(e.target.value)} required className='p-1 rounded bg-white max-sm:w-full sm:w-[70%]'/>
          </div>

          <div className='my-5'>
            <label className='w-[75px] inline-block font-bold' htmlFor="author"> Author : </label>
            <input type="text" id='author' name='author' value={author} onChange={(e)=> setAuthor(e.target.value)} required className='p-1 rounded bg-white max-sm:w-full sm:w-[70%]'/>
          </div>

          <button type='submit' className='bg-gray-200 font-bold sm:ml-[75px] rounded-xl py-1 cursor-pointer border border-amber-800 hover:bg-amber-400 w-full sm:w-[70%] text-sm'> Add Book </button>
        </form>
    </div>
  )
}

export default AddBooks
