import { useState } from "react"
import { useNavigate } from "react-router-dom";


export const StateHook=(initial)=>{
    const [state,setState] =useState(initial);
    const nevigate = useNavigate();
    const handelNavigate =(data)=>{
        nevigate(data)
    }
    
    return{state,setState,handelNavigate}
}