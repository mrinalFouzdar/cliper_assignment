import { useEffect } from 'react';
import Payment from '../../Container/PayMent/Payment';
import { DispatchHook } from '../../CoustomHook/DispatchHook/DispatchHook';
import { StateHook } from '../../CoustomHook/StateHook/StateHook';
import styled from "./Items.module.css"

function Items() {
  const {singleData,AddCartDispatch} = DispatchHook()
  const {handelNavigate} = StateHook()

  console.log(singleData);
  useEffect(()=>{
    if(singleData.length ===0){
      handelNavigate("/")
    }

  },[])
  return (
    <>
      <div className={styled.container}>
        <div className={styled.Img_div}>
          <img src={singleData.img} alt="" className={styled.mainImg}/>
          <button onClick={()=>AddCartDispatch(singleData)}> <h1>Add to cart</h1></button>
        </div>
        <div className={styled.details_div}>
          <h1>Name : {singleData.name}</h1>
          <h3>₹ {singleData.price}</h3>
         {singleData.quality && <div className={styled.qlty}> 
            <h2> <span>Quality:</span>  {singleData.quality}</h2>
            <h2> <span>Organic:</span>  {singleData.Organic}</h2>
          </div>}
        </div>
          <Payment/>
      </div>
    </>
  )
}

export default Items