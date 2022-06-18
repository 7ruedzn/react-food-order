import React, { useContext, useState } from 'react'
import cartContext from '../../context/CartContext';
import FoodItem from '../FoodItem/FoodItem'


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const foodContext = useContext(cartContext);

  if(foodContext.length > 0){
    return (
      <ul>
        <li>{foodContext[0].name}</li>
        <li>{foodContext[0].description}</li>
        {
          // foodContext.map((food : object) => <FoodItem key={food.id} id={food.} />)
        }
      </ul>
    )
  }
  

  return (
    <ul>
      <li>Your cart is empty!</li>
    </ul>
  )
}

export default Cart