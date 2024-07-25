import React from 'react'
import { useParams } from 'react-router-dom';
import {useFood} from '../../Context/food-context';
import {AiFillStar} from 'react-icons/ai';
 const ExpandFood = () => {
    const {food} =useFood()
    const {ID} =useParams();

    const expandedFood=food.find(item=>item.id===Number(ID));
  return (
    <div className='mt-5 flex flex-col justify-center items-center'>
    


<img src={expandedFood.image} alt="food" width='20%' />
       <p>{expandedFood.description}</p>
       <p>Delivery Time: {expandedFood.delivery_time}minute</p>
       <span className='flex text-orange-500'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
        
        </div>
  )
}

export {ExpandFood};