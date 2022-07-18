import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from "./navbar.module.css"
import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { StateHook } from '../../CoustomHook/StateHook/StateHook'
import { DispatchHook } from '../../CoustomHook/DispatchHook/DispatchHook'
function Navbar() {
  // call coustom Hook
  const {state,setState,handelNavigate} = StateHook(false)
  const {cartItem} = DispatchHook()

  useEffect(()=>{
    // for scroll the web page
    window.onscroll = () => {
      setState(window.pageYOffset === 0 ? false : true);
    };
    return () => (window.onscroll = null);
  },[])
  return (
      <div className={`${styled.navbar} ${state && styled.scrolled}`}>
        <div className={styled.container}>

          {/* Left side navbar */}
          <div className={styled.left}>
            <img src="https://i.pinimg.com/550x/88/ea/d2/88ead228f2e346f4525babbfb5540336.jpg" alt="" className={styled.imgLogo} onClick={()=>handelNavigate("/")}/>
              <NavLink to="/"             state={{ state: "My List" }}
            style={({ isActive }) => ({
              color: isActive ? "gray" : "wheat",
              textDecoration: isActive ? "underline" : "none",
            })} className={styled.text}>Home</NavLink>
              <NavLink to="/veg"             state={{ state: "My List" }}
            style={({ isActive }) => ({
              color: isActive ? "gray" : "wheat",
              textDecoration: isActive ? "underline" : "none",
            })} className={styled.text}>Veg</NavLink>
          </div>


            {/* Right side navbar */}
          <div className={styled.right}>
                <div className={styled.profile}>
                <span className={styled.text}>Profile</span>
                <BsFillPersonFill className={styled.logo}/>
                </div>
                <NavLink to="/addToCart" className={styled.link}>

                <AiOutlineShoppingCart className={styled.logo} />
                {
                  cartItem.cart.length >0 &&<div className={styled.cart_div}>
                  {cartItem.cart.length}
                </div>
                }
                </NavLink>

          </div>

        </div>
      </div>
  )
}

export default Navbar