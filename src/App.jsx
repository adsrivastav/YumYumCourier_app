import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Menu} from './Components/menu/Menu';
import {Home} from './Components/home/Home';

// import {Cart} from './Components/cart/Cart';
import {Navbar} from './Components/navbar/Navbar';
import {Footer} from './Components/footer/Footer';
import {Contact} from './Components/contact/Contact';
import {AddCart} from './Components/addCart/AddCart';
import {ExpandFood} from './Components/expandFood/ExpandFood';



 const App = () => {
  return (
    <div style={{maxWidth:'100%',overflowX:'hidden'}}>
<Navbar/>
   
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/menu' element={<Menu/>}/>
  {/* <Route path='/cart' element={<Cart/>}/> */}
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/addcart' element={<AddCart/>}/>
  <Route path='/expandfood/:ID' element={<ExpandFood/>}/>

</Routes>
<Footer/>

    </div>
  )
}
export{App};