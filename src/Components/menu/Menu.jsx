import {useFood} from '../../Context/food-context';
import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const Menu = () => {

  const navigate=useNavigate();
  const [search,setSearch]=useState('')
  const [radioFilter,setRadioFilter]=useState('')
  const [checkFilter,setCheckFilter]=useState([])
  const{food,isLoading,error,setFood,addToCart,cartItem}=useFood();

  //Saerch Input Filter//
const searchFood=(e)=>{
setSearch(e.target.value)

}
const searchFilterData=food.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))

//Loading Gif
if(isLoading) return <p className='flex justify-center'><img src="/Images/loader.gif" alt="loading" /></p>



//Radio Filter//
const radioFilterData=()=>{
if(radioFilter==='high-to-low'){

  return searchFilterData.sort((a,b)=>b.price-a.price);


  }
  if(radioFilter==='low-to-high'){
    return searchFilterData.sort((a,b)=>a.price-b.price)
   
  }
  return searchFilterData ;
}
const update=radioFilterData();


//checkbox filter
const checkboxFilter=(e)=>{
const value=e.target.value;
const isChecked=e.target.checked;
if(isChecked){
  setCheckFilter([...checkFilter,value])
}else{
  setCheckFilter(checkFilter.filter(item=>item!==value))
}
}

const updateCheckboxFood=checkFilter.length>0?update.filter(item=>checkFilter.some((ele)=>item[ele])):update;



  return (
    <div>
      <nav className='bg-yellow-500 py-1 '  >

    <p className='flex justify-center' > <input type="text"  placeHolder='search food' onChange={searchFood} className='h-9 w-96' />    </p>

<div className='flex justify-center gap-10'>
  <p>Filters:</p>
    <p> <input type="checkbox" value='is_vegetarian' onChange={checkboxFilter} />veg
     <input type="checkbox" value='is_spicy'  onChange={checkboxFilter}/>Spicy  </p>

     <p><input type="radio" name='price'  value='high-to-low' onChange={(e)=>setRadioFilter(e.target.value)}/>price(hight to-low)
<input type="radio" name='price' value='low-to-high' onChange={(e)=>setRadioFilter(e.target.value)}/>price(low-to-high)</p>
</div>
        </nav>


<div className='flex gap-20 flex-wrap mt-6 ml-9 '>
      {
        updateCheckboxFood?.map(({id,name,price,image, is_vegetarian,is_spicy, delivery_time})=>{
          return(

            <div key={id} >
    <Card style={{ width: '15rem' }}  >
      <Link to={`/expandfood/${id}`}><Card.Img variant="top" src={image}  /></Link>
      <Card.Body >
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Price: {price}<br/>
         {is_vegetarian?'veg':'spicy'}<br/>

        </Card.Text>
        {cartItem.find(item=>item.id===id)?<button className='bg-yellow-500 px-4 py-1' onClick={()=>navigate('/addcart')}>go to cart</button>:<button className='bg-yellow-500 px-4 py-1' onClick={()=>addToCart(id)}>add</button>}
      </Card.Body>
    </Card>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
export {Menu};