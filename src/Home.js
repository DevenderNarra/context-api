import { faker } from '@faker-js/faker';
import React, { useContext, useState } from 'react'
import SingleProduct from './singleProduct';
import {cartContext} from './Context'
 
faker.seed(20)

const Home = () => {
  const {cart,setCart}=useContext(cartContext)
  console.log(useContext(cartContext))

  const productsArray=[...Array(20)].map(()=>({
    id:faker.string.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.url()

  }))
  const [products]=useState(productsArray)
  
  return (
    <div className='products-container'>
     {products.map((product)=>(
       <SingleProduct product={product} cart={cart} setCart={setCart} key={product.id}/>
      ))}
    </div>
  )
}

export default Home
