import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'
import { updateBooks } from '../features/BooksSlice';

const EditBooks = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBooks({id, title, author}));
    navigete('/bookview', {replace : true});
    setTitle('');
    setAuthor('');
  }
  return (
    <div>
        <h1> Edit Books </h1>
        <form onSubmit={handleSubmit} className='bg-red-200 p-5 w-1/2 mx-auto rounded-lg'>
          <div>
            <label className='w-16 inline-block' htmlFor="title"> Title : </label>
            <input type="text" id='title' name='title' value={title} onChange={(e)=> setTitle(e.target.value)} required className='border rounded bg-white'/>
          </div>

          <div className='my-2'>
            <label className='w-16 inline-block' htmlFor="author"> Author : </label>
            <input type="text" id='author' name='author' value={author} onChange={(e)=> setAuthor(e.target.value)} required className='border rounded bg-white'/>
          </div>

          <button type='submit' className='bg-gray-200 rounded cursor-pointer border hover:bg-green-400 px-3 text-sm'> Update Book </button>
        </form>
    </div>
  )
}

export default EditBooks
