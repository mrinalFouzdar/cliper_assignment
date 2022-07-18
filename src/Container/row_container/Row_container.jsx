import React from 'react'
import Row from '../Row/Row'
 
const category=["vegetable","Hydroponics Systems","Aquaponics Systems"]
function Rowcontainer() {
  return (
    <div style={{position:"static"}}>
        {
            category && category.map((item,i)=> <div key={i}>
                <Row row_category ={item}/>
            </div>)
        }
    </div>
  )
}

export default Rowcontainer