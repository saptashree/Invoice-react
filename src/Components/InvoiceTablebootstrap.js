// import React from "react";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory, { Type } from "react-bootstrap-table2-editor";

// const products = [
//   {
//     id: 1,
//     items: "speaker",
//     description: "SRS-XB43/BC IN5",
//     quantity: "",
//     price: 20000,
//   },
//   {
//     id: 2,
//     items: "Headphones",
//     description: "WH1000XM4/BMIN",
//     quantity: "",
//     price: 25000,
//   },
//   {
//     id: 3,
//     items: "TV ",
//     description: "SLS65/MAX",
//     quantity: "",
//     price: 100000,
//   },
// ];
// const columns = [
//   {
//     dataField: "id",
//     text: "S.NO",
//     editable: false
//   },
//   {
//     dataField: "type",
//     text: "Item",
    
//     editor: {
//         type: Type.SELECT,
//         options: [{
//           value: '1',
//           label: 'Speaker'
//   },
//   {
//     value: '2',
//     label: 'Headphones'
//   },
//   {
//     value: '3',
//     label: 'TV'
//   }
// ]}
// },
         
  
//   {
//     dataField: "description",
//     text: "Description",
//     editable: false
//   },
//   {
//     dataField: "quantity",
//     text: "Quantity",
//   },
//   {
//     dataField: "price",
//     text: "Price",
//     editable: false
//   },
//   {
//     dataField: "total",
//     text: "Total",
//     editable: false
//   },
// ];
// const InvoiceTablebootstrap = () => {
//   return (
//     <div>
//       <BootstrapTable
//         keyField="id"
//         data={products}
//         columns={columns}
//         cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
//       />
//     </div>
//   );
// };

// export default InvoiceTablebootstrap;
