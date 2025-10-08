import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../features/BooksSlice';
import { Link } from 'react-router';

const bookView = () => {

  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  }
  
  return (
    <div className='p-4'>
        <h1 className='text-center text-2xl font-bold text-fuchsia-600 mb-2'> List of Books </h1>
        <table className='border sm:w-2/3 mx-auto text-center bg-red-200'>
          <thead>
            <tr className='[&>th]:border [&>th]:p-2'>
              {/* <th> ID </th> */}
              <th> Title </th>
              <th> Author </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {books && books.map((book) => {
              const {id, title, author} = book;
              return <tr key={id} className='[&>td]:border [&>td]:p-2'>
                {/* <td> {id} </td> */}
                <td> {title} </td>
                <td> {author} </td>
                <td>
                  <Link to='/editbooks' state={{id,title,author}}> <button className='bg-green-600 border text-gray-100 font-bold w-15 m-1 py-1 text-sm rounded-lg cursor-pointer'> Edit </button> </Link>                  
                  <button onClick={()=> {handleDelete(id)}} className='bg-red-500 border text-gray-100 font-bold w-15 m-1 py-1 text-sm rounded-lg cursor-pointer'> Delete </button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
    </div>
  )
}

export default bookView
