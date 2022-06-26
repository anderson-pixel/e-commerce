import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping} from 'react-icons/ai'
import { BsFillPersonFill} from 'react-icons/bs'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <header class="header">

<a href="home.html" class="logo"> <i class="fas fa-store"></i> shopie </a>

<form action="" class="search-form">
    <input type="search" id="search-box" placeholder="search here..."></input>
    <label for="search-box" class="fas fa-search"></label>
</form>

<div class="icons">
    <div id="menu-btn" class="fas fa-bars"></div>
    <div id="search-btn" class="fas fa-search"></div>
    <a href="login.html" class="fas fa-user"></a>
    <a href="#" class="fas fa-heart"></a>
    <a href="cart.html" class="fas fa-shopping-cart"></a>
</div>

</header>
  )
}

export default Navbar