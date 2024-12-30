import {Link} from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
     <h1>Context-api</h1>
     <ul className='menu'>
      <Link to="/"><span>Homepage</span></Link>
      <Link to="/cart"><span>Cart</span></Link>
     </ul>
    </div>
  )
}

export default Header
