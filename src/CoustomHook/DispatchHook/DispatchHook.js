import { useDispatch, useSelector } from "react-redux"
import {  getSingleProduct } from "../../Redux/Actions/actions"
import { addToCart, adjustItemQty, removeFromCart } from "../../Redux/Actions/cart.action"


export const DispatchHook=()=>{
    // console.log(data)
    const  dispatch = useDispatch()
    // Get single Product 
    const dispatchSingle=(data)=>{
        dispatch(getSingleProduct(data))
    }

    // Add item into the cart
    const AddCartDispatch =(data)=>{
        // console.log(data)
        dispatch(addToCart(data))
    }
    // Remove Item from cart
    const RemoveItem=(id)=>{
        dispatch(removeFromCart(id))
    }

    // Addjust qty in cart
    const AddJustQty=(id,qty)=>{
        dispatch(adjustItemQty(id,qty))
    }
    const {all_data,cartItem}=useSelector(state => state)
    const {data,loading,singleData}=all_data
    const {cart} = cartItem
    // console.log(cart)
    // console.log(singleData)

    return {data,loading,dispatchSingle,singleData,AddCartDispatch,cart,RemoveItem,AddJustQty,cartItem}
}