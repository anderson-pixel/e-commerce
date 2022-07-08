import React, {useState, useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Link from 'next/link';
import { AiOutlineShoppingCart, AiFillShop} from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { Cart } from '.';
import { useStateContext} from '../context/StateContext';
import { FaBars } from 'react-icons/fa'; 
import { motion } from 'framer-motion';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
   container: {
    background: "linear-gradient(315deg, #fff 0%, #fff 74%)",
  },
  wrapper: {
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: "40px",
  },
  hamburber: {
    width: "30px",
    height: "3px",
    background: "#000",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgb(255, 101, 47,.2)",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(-10px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(10px)",
    },
  },
  activeHamburger: {
    width: "30px",
    height: "3px",
    borderRadius: "5px",
    transform: "translateX(-50px)",
    background: "transparent",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(45deg) translate(35px, -35px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(-45deg) translate(35px, 35px)",
    },
  },
  sidenav: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(150deg, #b1bfd8 0%, #01bf71 74%)",
    transform: "translateX(100%)",
    transition: "all 0.5s ease-in-out",
  },
  activeSidenav: {
    position: "fixed",
    width: "100%",
    zIndex: '10000',
    height: "100%",
    borderRadius: "15px",
    background: "linear-gradient(150deg, #30aa77  0%, #51cd99 94%)",
    transform: "translateX(50%)",
    transition: "all 0.5s ease-in-out",
  },
  ul: {
    listStyleType: "none",
    "& li": {
      padding: "60px 280px",
    },
  },
  a: {
    margin: "20px 20px",
    color: "#fff",

    "&hover":{
      fontSize: "25px"
    }
  },
}));

const data = [
  { name: "Home", Link: "/" },
  { name: "Products", Link: "/product" },
  {
    name: "Category",
    Link: "/category",
  },
  {
    name: "Lorem",
    Link: "/lorem",
  },
];


const Navbar = ({ toggle }) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  const [sidebar, setSidebar] = useState(false)
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
    <>

<div>
    <nav className={navbar ? 'navbar active' : 'navbar'}>

    <div className={classes.main}>
      <div className={classes.container}>
        <div style={{cursor: 'pointer'}} onClick={() => setActive(!active)} className={classes.wrapper}>
          <div>
            <div
              className={active ? classes.activeHamburger : classes.hamburber}
            />
          </div>
        </div>
      </div>
      <div className={active ? classes.activeSidenav : classes.sidenav}>
        <ul className={classes.ul}>
          {data.map((item, i) => (
            <li key={i}>
              <a href={item.Link} className={classes.a}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

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

    </>
  )
}

export default Navbar;
