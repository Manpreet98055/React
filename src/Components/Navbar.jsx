import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <header>
        <div className="nav-bar">
        <Link to={'/'} className="brand">E-Cart</Link>
        <div className="search-bar"></div>
        <input type='text' placeholder='Search Products'></input>
        <Link to={'/'} className="cart">cart</Link>
        </div>
        <div className="nav-bar-wrapper">
        <div className="items">Filter by - {"->"}</div>
        <div className="items">No Filter</div>
        <div className="items">Mobiles</div>
        <div className="items">Laptop</div>
        <div className="items">Tablets</div>
        <div className="items">{">="}29999</div>
        <div className="items">{">="}49999</div>
        <div className="items">{">="}69999</div>
        <div className="items">{">="}99999</div>
        </div>
    </header>
    </>
  )
}

export default Navbar