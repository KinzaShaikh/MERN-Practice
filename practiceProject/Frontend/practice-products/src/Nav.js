import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'
export default function Nav() {
    
  return (
    <div className='container'>

    <ul className='list'>
        <li className='item'>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className='item'>
            <NavLink to={'/addProduct'}>Add Product</NavLink>
        </li>
        <li className='item'>
            <NavLink to={'/displayProducts'}>Display Products</NavLink>
        </li>
    </ul>
    </div>
    
  )
}
