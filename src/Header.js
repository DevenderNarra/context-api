import {Link} from 'react-router-dom'
import React, { useContext } from 'react'
import { cartContext } from './Context'

const Header = () => {
  const {cart}=useContext(cartContext)
  return (
    <div className='header'>
     <h1>Context-api</h1>
     <ul className='menu'>
      <Link to="/"><span>Homepage</span></Link>
      <Link to="/cart"><span>Cart:{cart.length}</span></Link>
     </ul>
    </div>
  )
}

export default Header
