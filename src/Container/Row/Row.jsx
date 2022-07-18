import React from 'react'
import { Link } from 'react-router-dom';
import { DispatchHook } from '../../CoustomHook/DispatchHook/DispatchHook'
import styled from "./Row.module.css"
function Row({row_category}) {
    const {data,dispatchSingle}=DispatchHook()

    // Filter Data
    const products = data[row_category]
    // console.log(products);
  return (
    <div className={styled.row}>
        <h1>{row_category.toUpperCase()}</h1>
        <div className={`${styled.row_container}`}>
            {
                products && products.map((item)=>{
                    return(
                        <div key={item.id} className={styled.itme_maindiv} >
                            <Link key={item.id} to={`/product/${item.id}`} className={styled.style_link} onClick={()=>dispatchSingle(item)}>
                                <div className={styled.item_div}>
                                <img src={item.img} alt="" className={styled.image}/>
                                {/* Details */}
                                <div className={styled.dtls}>
                                <span>{item.name}</span>
                                 <span>Price: {item.price}{row_category==="vegetable" && "/kg"}</span> 

                                </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
   
            }
        </div>
    </div>
  )
}

export default Row