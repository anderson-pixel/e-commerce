import React from 'react'

function SideBar() {
  return (
    <div class="side-bar">

<div id="close-side-bar" className="fas fa-times"></div>

<div class="user">
    <img src="images/user-img.png" alt=""/>
    <h3>shaikh anas</h3>
    <a href="#">log out</a>
</div>

<nav class="navbar">
    <a href="home.html"> <i className="fas fa-angle-right"></i> home </a>
    <a href="about.html"> <i className="fas fa-angle-right"></i> about </a>
    <a href="products.html"> <i className="fas fa-angle-right"></i> products </a>
    <a href="contact.html"> <i className="fas fa-angle-right"></i> contact </a>
    <a href="login.html"> <i className="fas fa-angle-right"></i> login </a>
    <a href="register.html"> <i className="fas fa-angle-right"></i> register </a>
    <a href="cart.html"> <i className="fas fa-angle-right"></i> cart </a>
</nav>
</div>

  )
}

export default SideBar