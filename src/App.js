import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeAccountDetails from './component/EmployeeAccountDetails';
import DeleteCustomer from './component/DeleteCustomer';
import SaveEmployeeDetails from './component/SaveEmployeeDetails';
import AccountDetails from './component/AccountDetails';
import CustomerMenu from './component/CustomerMenu';
import CreditAmount from './component/CreditAmount';
import DebitAmount from './component/DebitAmount';
import Footer from './component/Footer';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accountNumber, setaccountNumber] = useState('');

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <Router>
      <CustomerMenu />
      <Routes>
        <Route path='/employeedetails' element={<SaveEmployeeDetails />} />
        <Route path='/employeeaccountdetails' element={<EmployeeAccountDetails />} />
        <Route path='/deletcustomer' element={<DeleteCustomer />} />
        <Route path='/accountdetails' element={<AccountDetails />} />
        <Route path='/creditamount' element={<CreditAmount />} />
        <Route path='/debitamount' element={<DebitAmount />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;