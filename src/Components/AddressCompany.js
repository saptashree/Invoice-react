import React from 'react'

const dataAdd = {
    name: "Sony Software",
    layout: "Vijaya Bank Layout",
    road: "Bannerugatta Road, ",
    pincode: 560078,
  };
const AddressCompany = (props) => {
  return (
    <div>
         <ul style={{listStyleType:"none"}}>
         <li><strong>{dataAdd.name}</strong></li>
         <li>{dataAdd.layout}</li>
         <li>{dataAdd.road}</li>
         <li>Bangalore -{dataAdd.pincode}</li>
       </ul>
    </div>
  )
}

export default AddressCompany
