
import './App.css';
import CartIcon from './images/icon-cart.svg'

import Navigation from './components/Navigation';
import Product1 from './images/image-product-1.jpg'
import Product2 from './images/image-product-2.jpg'
import Product3 from './images/image-product-3.jpg'
import Product4 from './images/image-product-4.jpg'

import Thumb1 from "./images/image-product-1-thumbnail.jpg"
import Thumb2 from "./images/image-product-2-thumbnail.jpg"
import Thumb3 from "./images/image-product-3-thumbnail.jpg"
import Thumb4 from "./images/image-product-4-thumbnail.jpg"

import Next from './images/icon-next.svg'
import Previous from './images/icon-previous.svg'
import { useEffect, useState } from 'react';


function App() { 
  const [count1, setCount1]=useState(0)
  const [count2, setCount2]=useState(0)
const [overlay, setOverlay]=useState("over-none")
const[Product,setProduct]=useState(Product1)
const [i, seti]=useState(0)
const Products=[Product1, Product2, Product3, Product4]
function next(){
if(i<3){
  seti(i+1)
setProduct(Products[i])
}
else{
  seti(0)
  setProduct(Products[i])
}

  
}
function prev(){
  if(i>0){
    
  seti(i-1)
  setProduct(Products[i])
  }
  else{
    seti(3)
    setProduct(Products[i])
  }

  
}

  function addCart(){
    setCount2(count2+count1)

  }
        

  function increment(){
          setCount1(count1+1)
  }
  function decrement(){
    if(count1>0){
      setCount1(count1-1)

    }
  }
  function checkout(){
setCount1(0)
setCount2(0)
  }

  return (
    <div className="App">
      <Navigation checkout={checkout} count2={count2} />
    <div className="contentcontainer">    
    <div className="content">
      <div className="left">
        <img  onClick={()=>{setOverlay("over-show")}} src={Product} alt="" className="product"></img>
        <div className="arrows"><img src={Previous} alt="" className="prev"></img><img src={Next} alt="" className="next"></img></div>
        <ul className="thumbnails">
        <li>
            <img onClick={()=>{setProduct(Product1)}}src={Thumb1} alt=""></img>
          </li>

          <li>
            <img onClick={()=>{setProduct(Product2)}} src={Thumb2} alt=""></img>
          </li>
          <li>
            <img  onClick={()=>{setProduct(Product3)}}src={Thumb3} alt=""></img>
          </li>
          <li>
            <img onClick={()=>{setProduct(Product4)}} src={Thumb4} alt=""></img>
          </li>

        </ul>

      </div>
      <div className="right">
        <p className="intro">Sneaker company</p>
        <h1 className="title">Fall Limitted Edition Sneaker</h1>
        <p className="text">  These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
        <div className="price">
          <p className="p-price"><span className="price1">$125.00</span><span className="disc">50%</span></p>
          <p className="striked" ><s>$250.00</s></p>
        </div>
        <div className="cartdiv">
        <p className='pone'><span onClick={()=>{decrement()}} className="">-</span><span>{count1}</span><span onClick={()=>{increment()}} className="">+</span></p>
        <button  className="button1"onClick={()=>{addCart()}} style={{backgroundColor:"orange"}}><img src={CartIcon} alt=""></img><span>Add to Cart</span></button>

      </div>

      </div>

    </div>

  </div>

   <div className={overlay}>
     <div className="cont">
     <div id='close'>
       <p onClick={()=>{setOverlay("over-none")}}>X</p>
       </div>
        <img className="product-image"src={Product} alt="" ></img>
        <div className='prev-next'>
         <img onClick={()=>{next()}}className='previous' src={Previous} alt=""></img>
         <img onClick={()=>{prev()}} className="next"src={Next} alt="" ></img>
         </div>      
           <ul id='overlay-thumbs' className="thumbnails">
          <li>
            <img onClick={()=>{setProduct(Product1)}}src={Thumb1} alt=""></img>
          </li>

          <li>
            <img onClick={()=>{setProduct(Product2)}} src={Thumb2} alt=""></img>
          </li>
          <li>
            <img  onClick={()=>{setProduct(Product3)}}src={Thumb3} alt=""></img>
          </li>
          <li>
            <img onClick={()=>{setProduct(Product4)}} src={Thumb4} alt=""></img>
          </li>

        </ul>

         
     </div>


   </div>
      
    </div>
  );
}

export default App;
