import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFood } from '../../Context/food-context';
import {Cart} from '../../Components/cart/Cart';
import {CheckOut} from '../../Components/checkout/CheckOut';;
 const AddCart = () => {
    const {cartItem} =useFood()
    const navigate=useNavigate();
  return (
    <div>
        {
cartItem.length>0?<Cart/>:<p className='flex justify-center flex-col items-center'><img src="/Images/emptycart.gif" alt="cart" width='300px'/><p className='w-32 h-10 border-2 flex justify-center mr-20' onClick={()=>navigate('/menu')} ><button >Go to Menu List</button></p></p>
        }
        {
            cartItem.length>0?<CheckOut/>:null
        }
    </div>
  )
}
export {AddCart}