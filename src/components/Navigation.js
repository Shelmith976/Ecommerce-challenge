import React, { useEffect } from 'react'
import '../css/Navigation.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CartIcon from '../images/icon-cart.svg'
import Avatar from '../images/image-avatar.png'
import Close from '../images/icon-close.svg'
import Menu from '../images/icon-menu.svg'
import Thumb1 from '../images/image-product-1-thumbnail.jpg'
import Delete from '../images/icon-delete.svg'
function Navigation({count2, checkout}) {
  const [sidebar, setSidebar]=useState('sidebarnone')
  const [cart, setCart]=useState("cart-none")
  const [total, setTotal]=useState(0)
useEffect(
  ()=>{setTotal(count2*125)
  },[count2]
)
  return (
    <div className="nav">
    <div className="navdesk">
      <div className="logo">sneakers</div>
      <ul>
        <li>
          <Link to="#">Collection</Link>
        </li>
        <li>
          <Link to="#">Men</ Link>
        </li>
        <li className='w'>
          <Link to="#">Women</ Link>
        </li>

        <li>
          <Link to="#">About</ Link>
        </li>
        <li>
          <Link to="#">Contact</ Link>
        </li>

      </ul>
      <div className="icons">
        <img onClick={()=>{cart=="cart-none"?setCart("cart-show"):setCart("cart-none")}} src={CartIcon} alt="" className="cart"></img>
        <img src={Avatar} alt="" className="avatar"></img>
      </div>
    </div>
    <div className="navmob">
      <img src={Menu} onClick={()=>{setSidebar('sidebar')}} id="menu" alt="" className="menu"></img>
      <h2 className="logo">sneakers</h2>
      <div className="icons">
        <img src={CartIcon} alt="" className="cart"></img>
        <img src={Avatar} alt="" className="avatar"></img>
      </div>
      <div className={sidebar} id="sidebar">
        <img src={Close} onClick={()=>{setSidebar('sidebarnone')}} alt="" id="close" className="close"></img>
        <ul>
          <li>
            <Link to="#">Collection</Link>
          </li>
          <li>
            <Link to="#">Men</ Link>
          </li>
          <li className='w'>
            <Link to="#">Women</ Link>
          </li>

          <li>
            <Link to="#">About</ Link>
          </li>
          <li>
            <Link to="#">Contact</ Link>
          </li>
  
        </ul>
  

      </div>
    </div>
    <div className={cart}>
      <div className="cart-head">
        <p>Cart</p>
      </div>
      {
        count2==0?
        <div className='cart-b'>
          <p>Your cart is empty</p>
        </div>
        :
        <div className='cart-b'>
          <div className='body-upper'>
            <img src={Thumb1}  alt="" className='thumbnail'></img>

            <div className="btw">
              <p>Fall Limited Edition Sneakers</p>
              <p><span>$125.00</span><span>*</span><span>{count2}</span><span style={{fontWeight:'bold', marginLeft:'5px'}}>{total}</span></p>
            </div>
            <img onClick={()=>{checkout()}} src={Delete} alt=""className='delete' ></img>            
          </div>
          <div className="chec">
            <button onClick={()=>{checkout()}}>checkout</button>
          </div>
      

        </div>
      }

    </div>
  </div>

  )
}

export default Navigation