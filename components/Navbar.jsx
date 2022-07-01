import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiFillShop} from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
  <div>
<header id="header" className="fixed-top">

<div className="fas fa-bars"></div>

<a href="#" className="logo"><i style={{color: '#000', position: 'absolute', margin:'10px 0px 0px -25px'}} className="fas fa-shopping-bag"></i><h2 style={{color: '#000'}}>Shopping</h2></a>

<div className="left">

  <div className="search-container">
  
  </div>

  <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShoppingCart style={{color: '#000', fontSize:'1.8rem'}}/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      
  {showCart && <Cart />}

</div>

<nav className="navbar">
  <ul>
    <li><a href="#home">home</a></li>
    <li><a href="#product">product</a></li>
    <li><a href="#review">review</a></li>
    <li><a href="#offer">offer</a></li>
    <li><a href="#newsletter">newsletter</a></li>
  </ul>
</nav>

</header>
  </div>
  )
}

export default Navbar