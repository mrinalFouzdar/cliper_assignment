import React from 'react'
import { DispatchHook } from '../../CoustomHook/DispatchHook/DispatchHook'
import styled from "./payment.module.css"
function Payment() {
  const {singleData} = DispatchHook()
    const {price}=singleData
    const handleDiscount=(price)=>{
        let amount = (price*30)/100
        console.log(amount );
        return Math.round(amount)
    }
  return (
    <div id={styled.payment}>
        <p>PAYMENT DETAILS</p> 
        <p>MRP Total: <span> {price}</span></p> 
        <p>DISCOUNT:  <span>{handleDiscount(price)}</span></p> 
        <p>Total Amount: <span> {price - handleDiscount(price)}</span></p>
        <button> PROCEED TO PAY </button>
    </div>
  )
}

export default Payment