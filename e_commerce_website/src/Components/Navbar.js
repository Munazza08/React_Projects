import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { items } from './data';


const Navbar = ({setData,cart}) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }

  return (
    <div>
    <header className='mb-4 p-3' >
      <div className='nav-bar fixed-top '>
      <Link to={'/'} className='brand'> SHOPit!</Link>
      
      <form onSubmit={handleSubmit} className='search-bar'>
        <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type='text' placeholder='Search Products'/>
      </form>

      <Link to={'/cart'} className='cart'> 
      <button type="button" className="btn btn-primary position-relative">
        Cart
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cart.length}
        <span className="visually-hidden">unread messages</span>
        </span>
      </button>
      </Link>
       
      </div>

    </header>
    </div>
  )
}

export default Navbar