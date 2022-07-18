import React from 'react'
import { DispatchHook } from '../../CoustomHook/DispatchHook/DispatchHook'
import styled from "./Cart.module.css"
import { CartItem } from './CartItem/CartItem'
export const Cart = () => {
    const {cart} =DispatchHook()

    if(cart.length===0){
        return <div>
            No Item
        </div>
    }
  return (
    <div>
        <div>
        {
            cart.map((item)=> <CartItem key={item.id} item={item}/>)
        }

        </div>
    </div>
  )
}
