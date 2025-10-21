import { NavLink, Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <nav className='bg-green-500 p-3'>
        <ul className='flex [&>li]:mx-3 justify-center'>
          <li className='hover:underline'> <NavLink to="/bookview" className={({isActive})=> isActive ? "text-yellow-300 font-bold" : ""}> View Books </NavLink> </li>
          <li className='hover:underline'> <NavLink to="/addbooks" className={({isActive})=> isActive ? "text-yellow-300 font-bold" : ""}> Add Book </NavLink> </li>
          {/* <li className='hover:underline'> <NavLink to="/editbooks"> Edit Books </NavLink> </li> */}
        </ul> 
      </nav>
      <Outlet />
    </>
  )
}

export default App
