import { GET_ALL_PRODUCTS, SINGLE_PRODUCT_DATA } from "../Actions/action.type";

const initialState={
    data:[],
    singleData:[],
    loading:true,
}


export const productsReducers =(state = initialState,{type,payload})=>{
    switch(type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                data:payload,
                loading:false,
            }
        case SINGLE_PRODUCT_DATA:
            return{
                ...state,
                singleData:payload
            }
        default:
            return state;
    }
}