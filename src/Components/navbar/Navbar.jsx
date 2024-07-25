import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import { useFood } from '../../Context/food-context';
import {AiOutlineShoppingCart} from 'react-icons/ai';

 const Navbar = () => {
const navigate=useNavigate();
const {cartItem}=useFood();
  return (
    <div>
      <p className='absolute' onClick={()=>navigate('/')}><img src="/Images/logo.jpeg" alt="logo" width='50px ' /></p>
    <nav className='bg-white-900  py-3 shadow-lg shadow-cyan-500  flex justify-end gap-20 text-light font-sm px-3 '    >
 
       <NavLink className='text-black no-underline  '  to='/'> Home</NavLink>
       <NavLink className='text-black no-underline'  to='/menu'>Menu</NavLink>
   
       <NavLink className='text-black no-underline' to='/contact'>Contact us</NavLink>

       <NavLink className='text-black no-underline' to='/addcart'>Cart <p className='absolute h-5 w-5 bg-orange-500 flex justify-center items-center'  style={{marginTop:'-2rem',marginLeft:'1.5rem',borderRadius:'10px',color:'white'}}>{cartItem.length}</p>  </NavLink>
       
    </nav>
      </div>
  )
}
export{Navbar}
