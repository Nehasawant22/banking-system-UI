import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeAccountDetails from './component/EmployeeAccountDetails';
import DeleteCustomer from './component/DeleteCustomer';
import SaveEmployeeDetails from './component/SaveEmployeeDetails';
import CustomerMenu from './component/CustomerMenu';




const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accountNumber, setaccountNumber] = useState('');

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    // <div className="container">
     
    //   <div>
    //     {/* <h6>Enter Account Number to display the customer Account Details</h6> */}
    //     <input type="text" readonly class="form-control-plaintext"  placeholder="Enter your Account Number to Display Account Details" 
    //     value={accountNumber} onChange={e => setaccountNumber(e.target.value)} />
    //   </div>
    //   <button type="button" class="btn btn-primary btn-sm" onClick={toggle}>click here</button>
    //   {isOpen && < EmployeeAccountDetails accountNumber={accountNumber} />}

      <Router>
      <CustomerMenu/>
      <Routes>
        <Route path='/employeedetails' element={<SaveEmployeeDetails />} />
        <Route path='/employeeaccountdetails' element={<EmployeeAccountDetails/>} />
        <Route path='/deletcustomer' element={<DeleteCustomer/>} />
      </Routes>
    </Router>  
  );
}

export default App;