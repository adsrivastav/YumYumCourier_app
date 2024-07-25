import {fakeFetch} from '../Components/FoodData';
import  {createContext,useContext,useState} from 'react';
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const foodContext=createContext();

const FoodProvider=({children})=>{
    const[food,setFood]=useState([]);
    const[cartItem,setCartItem]=useState([]);
  

const fetchFood = () => fakeFetch('https://example.com/api/menu').then((res) => setFood(res.data.menu));
const { data, isLoading, error } = useQuery({
  queryKey: ["food"],
  queryFn: fetchFood
});

const addToCart=(id)=>{
const addCartItem=food.find(item=>item.id===id);
setCartItem([...cartItem,addCartItem]);
toast.success("add successfully!", {
    position: "bottom-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  })
};

const removeItem=(id)=>{
    const deletedItem=cartItem.filter((item)=>item.id !==id);
    setCartItem(deletedItem);
    toast.success("remove successfully!", {
        position: "top-left",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
}
   
    
    return(
        <foodContext.Provider value={{isLoading, error,food,setFood,addToCart,cartItem,removeItem}} >
{children}
<ToastContainer/>
</foodContext.Provider>
    )
};

const useFood=()=>useContext(foodContext);
export{useFood,FoodProvider}