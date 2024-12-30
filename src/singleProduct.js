import React from 'react'

const SingleProduct = ({product,cart,setCart}) => {

  return (
    <li className='product-card' key={product.id}>
      <img src={product.image} alt={product.name} height="100px" width="150px"/>
      <p>{product.name}</p>
      <p>{product.price}</p>
      {cart.includes(product)?(<button onClick={()=>setCart(cart.filter(c=>c.id !== product.id))}>Delete from cart</button>):(<button onClick={()=>setCart([...cart,product])}>Add to cart</button>)}
    </li>
  )
}

export default SingleProduct
