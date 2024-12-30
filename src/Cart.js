import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from './singleProduct'
import {cartContext} from './Context'

const Cart = () => {
  const {cart,setCart}=useContext(cartContext)
  const [total,setTotal]=useState()
  useEffect(()=>{
   setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0));
  },[cart])

  return (
    <div className='cart-container'>
      <h2>My Cart</h2>
      <span>Total Price:{total}</span>
      {cart.map((product)=>(
        <SingleProduct product={product} cart={cart} setCart={setCart} key={product.id}/>
      ))}
    </div>
  )
}

export default Cart
