import { GET_ALL_PRODUCTS, SINGLE_PRODUCT_DATA } from "./action.type";
import axios from "axios"

const getAllProdoucts = (data)=>({
    type:GET_ALL_PRODUCTS,
    payload:data,
})

export const getSingleProduct=(data)=>({
    type:SINGLE_PRODUCT_DATA,
    payload:data,
})

// GET ALL DATA FROM API
export const fetchAllProducts =()=>(dispatch)=>{
    axios.get(`${process.env.REACT_APP_API}`)
    .then((res)=>{
        // console.log(res.data)
        dispatch(getAllProdoucts(res.data))
    })
}

