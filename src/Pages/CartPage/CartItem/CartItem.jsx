import React from 'react'
import { StateHook } from '../../../CoustomHook/StateHook/StateHook'
import { AiFillDelete } from 'react-icons/ai';
import styled from "./cartItem.module.css"
import { DispatchHook } from '../../../CoustomHook/DispatchHook/DispatchHook';
export const CartItem = ({item}) => {
  // Cart Item page (every sing cart item)
    const {state,setState} =StateHook(item.qty)

    const {RemoveItem,AddJustQty} = DispatchHook()
  const handleCahnge=(e)=>{
    setState(e.target.value)
    AddJustQty(item.id,e.target.value)
  }
  return (
    <div className={styled.cartItem}>
        <img src={item.img} alt="" />
        <div className={styled.cartItem_details}>
          <p className={styled.name}>Name: <span>{item.name}</span></p>
          <p className={styled.price}>₹ {item.price}</p>
        </div>
        <div className={styled.cartItem_actions}>
          <div className={styled.carItem_qty}>
            <label htmlFor="qty" className={styled.qty_label}>Qty</label>
            <input type="number" min="1" className={styled.qty} value={state} onChange={handleCahnge}/>
          </div>
          <button className={styled.actions_deleteBtn} onClick={()=> RemoveItem(item.id)}> 
          <AiFillDelete className={styled.icon} />
          </button>
        </div>
    </div>
  )
}
