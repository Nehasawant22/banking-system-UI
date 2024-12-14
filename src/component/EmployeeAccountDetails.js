import React , { useEffect, useState } from 'react';
import { getCustomers } from '../services/EmployeeService';
import axios from 'axios';
import { StyledComponet } from './navElements';
function EmployeeAccountDetails(){
    const [customers, setCustomer] = useState([])
    
    const handleSubmit = (event) => {
      event.preventDefault()
      const customerId = event.target.customerId.value;
      axios.get('http://localhost:8080/customer/'+customerId).then((response) => {
        setCustomer(response.data)
        console.log(response)
    }).catch(error => {
        console.error(error)
    })
    }


    return(
       <div>
        <StyledComponet>
         <form onSubmit={handleSubmit}>
          <input type="text" id="customerId" readonly class="form-control-plaintext"  placeholder="Enter your Account Number to Display Account Details"/>
          <button type="submit" class="btn btn-primary btn-sm" >click here</button>
        <h2 class='text-center'> Customer Account types and balance</h2>
        <table class="table table-striped">
        <thead>
        <tr>
        <th scope="col">Account Type </th>
        <th scope="col">Current Balance</th>
        </tr>
      </thead>
      <tbody>
        {
        
        customers.map(cust =>
          <tr>
        <td>{cust.accountTypes}</td>
        <td>{cust.currentBalance}</td>
        </tr>
        )
      }
      </tbody>
     </table>
     </form>
     </StyledComponet>
        </div>
    )
}

export default EmployeeAccountDetails;