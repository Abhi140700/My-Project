import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from './constants'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <div className=' d-flex justify-content-between align-items-center positon-sticky'>
      <Link to='/' className='d-flex align-items-center ms-3'>
        <img src={logo} alt="logo" style={{height : 45}}/>
      </Link>
      <SearchBar/>
    </div>
  )
}

export default NavBar
