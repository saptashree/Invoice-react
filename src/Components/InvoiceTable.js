import React, { useState, useEffect } from "react";
import { Button, Col, Row, Table } from "reactstrap";
import Select from "react-select";
import NumericInput from "react-numeric-input";
import classes from "./invoice.module.css";

// const invoices = [
//   {
//     no: 1,
//     items: "speaker",
//     description: "SRS-XB43/BC IN5",
//     quantity: "",
//     price: 20000,
//   },
//   {
//     no: 2,
//     items: "Headphones",
//     description: "WH1000XM4/BMIN",
//     quantity: "",
//     price: 25000,
//   },
//   {
//     no: 3,
//     items: "TV ",
//     description: "SLS65/MAX",
//     quantity: "",
//     price: 100000,
//   },
// ];
const data = [
  {
    value: 1,
    label: "speaker",
    description: "SRS-XB43/BC IN5",
    price: 20000,
  },
  {
    value: 2,
    label: "Headphones",
    description: "WH1000XM4/BMIN",
    price: 25000,
  },
  {
    value: 3,
    label: " TV",
    description: "SLS65/MAX",
    price: 100000,
  },
];

const InvoiceTable = () => {
  const [noOfRows, setNoOfRows] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [dataToBeDisplayed, setDataToBeDisplayed] = useState([
    {
      value: 0,
      label: "",
      description: "",
      price: 0,
      quantity: "",
      total: 0,
    },
  ]);
  const handle = () => {
    setNoOfRows(noOfRows + 1);
    var tPrice = 0;

    let disisplayedData = dataToBeDisplayed;

    disisplayedData.push({
      value: 0,
      label: "",
      description: "",
      price: 0,
      quantity: "",
      total: 0,
    });

    // invoices.forEach((element, index) => {
    //   if (index <= noOfRows) {
    //     tPrice += element.quantity * element.price;
    //   }
    // });

    // setTotalPrice(tPrice);
    setDataToBeDisplayed(disisplayedData);
  };

  // const handelTotal = (e, index) => {
  //   var getTotal = 0;
  //   getTotal = e.price * e.quantity;
  //   console.log(getTotal);
  // };
  const handleGet = (e, index) => {
    // console.log(dataToBeDisplayed)

    let displayData = [...dataToBeDisplayed];

    displayData[index].value = e.value;
    displayData[index].label = e.label;
    displayData[index].description = e.description;
    displayData[index].price = e.price;

    const total = displayData[index].quantity * e.price;

    displayData[index].total = total;
    // Setting over all total
    let overAllTotal = 0;
    displayData.map((data) => {
      overAllTotal += data.total;
    });
    setTotal(overAllTotal);
    // balance
    let dueAmountLeft = dueAmount;

    console.log("overAllTotal ==> "+overAllTotal);
    console.log("paid ==> "+paid);

    dueAmountLeft = overAllTotal - paid;

    
    setDueAmount(dueAmountLeft)

    setDataToBeDisplayed(displayData);
 
   
    // To update the total
  };
  // const [inputValue, setInputValue] = useState("");
  // const [total, setTotal] = useState("0");
  // const caclulateTotal = () => {
  //   const total = dataToBeDisplayed.map((index, element) => {
  //     return index.quantity * index.price;
  //   }, 0);
  //   setTotal(total);
  //   console.log(caclulateTotal);
  // };
  const [total, setTotal] = useState(0);
  const handleValue = (e, index) => {
    let inputValue = e.target.value;
    let displayData = [...dataToBeDisplayed];

    const total = inputValue * displayData[index].price;

    displayData[index].total = total;
    displayData[index].quantity = inputValue;
    setDataToBeDisplayed(displayData);

    // Setting over all total
    let overAllTotal = 0;
    displayData.map((data) => {
      overAllTotal += data.total;
    });

    setTotal(overAllTotal);

    // balance

    let dueAmountLeft = dueAmount;

    console.log("overAllTotal ==> "+overAllTotal);
    console.log("paid ==> "+paid);

    dueAmountLeft = overAllTotal - paid;

    
    setDueAmount(dueAmountLeft)
    
  };
  //amount paid
  const [paid, setPaid] = useState(0);
  const [dueAmount, setDueAmount] = useState(0);
  const handelPaid = (e) => {
    let displayData = [...dataToBeDisplayed];
    let inputValue = e.target.value;
    let paidAmount = inputValue;
    console.log(paidAmount);
    let dueAmount = 0;

    let overAllTotal = 0;
    displayData.map((data) => {
      overAllTotal += data.total;
    });

    dueAmount = overAllTotal - paidAmount;
    setPaid(paidAmount);
    setDueAmount(dueAmount);
  };

  return (
    <div>
      <Row>
        <Col>
          <Table bordered>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Items</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {dataToBeDisplayed.map((element, index) => {
                console.log(element);
                if (index < noOfRows) {
                  return (
                    <tr>
                      {/* <th scope="row">{index}</th> */}
                      <td>{index + 1}</td>
                      <td>
                        {
                          <Select
                            options={data}
                            onChange={(e) => handleGet(e, index)}
                          />
                        }
                      </td>
                      <td>{element.description} </td>
                      <td>{element.price}</td>
                      <td>
                        {
                          <input
                            min={0}
                            max={50}
                            onKeyUp={(e) => handleValue(e, index)}
                          />
                        }
                        {/* {
                          <input
                            value={inputValue}
                            onChange={(event) =>
                              setInputValue(event.target.value) 
                            }
                            className="add-item-input"
                            placeholder="Add an item..."
                          />
                        }  */}
                      </td>

                      <td>{element.total}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={handle}> Add</button>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <ul style={{ listStyleType: "none" }}>
            <li>
              Total:
              <input value={total} />
            </li>
            <br />
            <li>
              Amount Paid:
              <input onKeyUp={handelPaid} />
            </li>
            <br />
            <li>
              Balance Due:
              <input value={dueAmount} />
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default InvoiceTable;
