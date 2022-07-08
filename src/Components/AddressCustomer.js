import React from "react";

const customAdd = {
  name: "saptashree",
  layout: "Nandini Layout",
  road: "Dr.Rajkumar Road",
  pincode: 560001,
};
const AddressCustomer = () => {
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <strong>Bill to:{customAdd.name}</strong>
        </li>
        <li>{customAdd.layout}</li>
        <li>{customAdd.road}</li>
        <li>Bangalore-{customAdd.pincode}</li>
      </ul>
    </div>
  );
};

export default AddressCustomer;
