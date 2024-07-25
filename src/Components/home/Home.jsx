import React from 'react'
import {useNavigate} from 'react-router-dom';
 const Home = () => {
  const navigate=useNavigate();
  return (
    <div style={{display:'flex'}} >
        <img src="/Images/food.jpeg" alt="food" width='50%'   />
        <div>
          <p style={{fontSize:'1.4rem',position:'absolute',marginTop:'10rem',marginLeft:'9rem',fontWeight:'500'}}>Welcome to our YumYumCourier App!</p>
<button style={{width:'8rem',height:'3rem',transform:'translate(200%, 500%)',color:'black' ,border:'1px solid black'  }} onClick={()=>navigate('/menu')}  >Go To Menu</button>
<p style={{position:'absolute',marginTop:'20rem',marginLeft:'2rem'}}> Are you tired of endlessly scrolling through menus and reviews to find the perfect meal? Look no further. Our app offers a seamless and personalized experience that will make your taste buds sing. Our extensive selection of restaurants and cuisines will satisfy even the most discerning foodie. Plus, our user-friendly interface makes ordering and delivery a breeze. Join the thousands of satisfied customers who have already discovered the joy of our food app.
where culinary delights await your every craving! Discover a world of delectable flavors, tantalizing aromas, and exquisite dishes, all at your fingertips. Whether you're a food enthusiast, a curious explorer of gastronomy, or simply seeking convenience, our app is your ultimate culinary companion. Indulge in a seamless browsing experience as you explore a vast array of cuisines from renowned restaurants and hidden gems. With our user-friendly interface, intuitive search features, and personalized recommendations, finding your perfect meal has never been easier. 
<img src="/Images/image-2.jpeg" alt="food"  width='50%' style={{marginLeft:'7rem'}} />







</p>
</div>
    </div>
  )
}
export {Home};