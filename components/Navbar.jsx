import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiFillShop} from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href='/'>
        <a style={{position: 'absolute',margin:'0px 40px',marginLeft: '50px'}}><AiFillShop style={{fontSize: '27px', position: 'relative', top: '7px', right: '10px', color:'#01bf71'}}></AiFillShop>Navbar</a>
        </Link>
      </p>
      <button type="button" className="cart-icon" id='cart-ic'>
        <Link href="/login"><BsFillPersonFill/></Link>
      </button>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar