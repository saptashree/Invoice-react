import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const InvoiceCalender = () => {
    const[selectedDate,setSelectedDate]=useState(null)
    const[selectDate,setSelectDate]=useState(null)

  return (
    <div>
    <ul style={{ listStyleType: "none" }}>
        <li>
          <strong>Invoice # :</strong>1
        </li>
        <li>
          <strong>Invoice Date :</strong>
          <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
        </li>
        <li>
          <strong>Due Date :</strong>
          <DatePicker selected={selectDate} onChange={date => setSelectDate(date)} />
        </li>
      </ul>
        
    </div>
  )
}

export default InvoiceCalender
 