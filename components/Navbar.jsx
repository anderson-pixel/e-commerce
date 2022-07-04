import React, {useState, useEffect} from 'react';
import Link from 'react-scroll';
import { AiOutlineShoppingCart, AiFillShop} from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { Cart } from '.';
import { useStateContext} from '../context/StateContext';
import { FaBars } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

import { 
  NavMainCont,
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItCont,
  NavAcronym,
}from './NavElements';


const Navbar = ({ toggle }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [navbar, setNavbar] = useState(false)
    useEffect(() => {
    }, []);

    const changeBackground = () => {
       if(window.scrollY >= 80) {
           setNavbar(true)
       } else {
           setNavbar(false);
       }
    };

    if (typeof window !== "undefined") {
      window.addEventListener('scroll', changeBackground);
    }

  return (
    <div>

    <nav className={navbar ? 'navbar active' : 'navbar'}>
    
    <MobileIcon onClick={toggle}>
      <FaBars style={{cursor: 'pointer', fontSize:'2rem'}}/>
    </MobileIcon>
    
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
    </nav>
      </div>
  )
}

export default Navbar;
