import React, {useRef} from 'react'
import logo from './logo.png'
import burger from './burger.png'
import frenchfries from './frenchfries.png'
import momos from './momos.png'
import noodles from './noodles.png'

export default function () {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();
  const searchHandler = () =>{
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  }
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  }
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    searchRef.current.classList.remove("active");
  }
  const cart = [
    {
      img: burger,
    },
    {
      img: frenchfries,
    },
    {
      img: momos,
    },
    {
      img: noodles,
    },
  ];
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
            <img src={logo} width={100} height={100} />
        </a>
        <nav className="navbar active" ref={navbarRef}>
            <a href="#home">home</a>
            <a href="#abou">about</a>
            <a href="#menu">menu</a>
            <a href="#products">products</a>
            <a href="#contact">contact</a>
            <a href="#blogs">blogs</a>
        </nav>
        <div className="icons">
        <i className="fa fa-search" style={{fontSize:"30px"}} onClick={searchHandler}></i>
        <i className="fa fa-shopping-cart" style={{fontSize:"30px"}} onClick={cartHandler}></i>
        <i className="fa fa-bars" id="menu-btn" style={{fontSize:"30px"}} onClick={navbarHandler}></i>
        </div>
        <div className="search-form "  ref={searchRef}>
          <input type="search" placeholder="search here..." id="search-box"/>
          <label htmlFor="search-box" className="fa fa-search"></label>
        </div>
        <div className="cart-items-container " ref={cartRef}>
          {cart.map((item, index) =>(
            <div className="cart-item" key={index}>
              <span className="fa fa-times"></span>
              <img src={item.img} height={70} width={100}/>
              <div className="content">
                <h3> cart item 01 </h3>
                <div className="price"> $15.99</div>
                </div>
              </div>
          ))}
          <a className="btn" href="#" > checkout now</a>
        </div>
      </header>
    </div>
  )
}
