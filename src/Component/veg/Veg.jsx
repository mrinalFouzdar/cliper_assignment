import React from 'react'
import { StateHook } from '../../CoustomHook/StateHook/StateHook'

function Veg() {

    const {state,setState}=StateHook({
        name:"",
        age:""
    })
  return (
    <div>
        hey
    </div>
  )
}

export default Veg