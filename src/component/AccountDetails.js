import axios from 'axios';
import React , { useEffect, useState } from 'react';

const AccountDetails = () => {
  const [account, setAccount] = useState([])
  const[flag,setFlag]=useState(false);
  const cureentBalanceHandler = (event) => {
    const customerId = event.target.customerId.value;
    const accountNumber = event.target.accountNumber.value;
    const params = { customerId, accountNumber };
    event.preventDefault()
      
      axios.get('http://localhost:8080/customer/'+customerId+ "/" + accountNumber).then((response) => {
        setAccount(response.data)
        setFlag(true)
        console.log(response)
    }).catch(error => {
        console.error(error)
    })
    }
  return (
    <div>
      <form onSubmit={cureentBalanceHandler}>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label"> Customer Id</label>
          <div class="col-sm-10">
            <input  type="text"  id="customerId" placeholder=""></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label"> Account Number</label>
          <div class="col-sm-10">
            <input  type="text"  id="accountNumber"></input>
          </div>
        </div>
      
        <button type="submit" class="btn btn-primary btn-sm" >Click Here</button>
        {flag && <p>Your Current Balane is {account.currentBalance}/-</p>}
      </form>
    </div>
  )
}

export default AccountDetails