import axios from 'axios';
import React , { useEffect, useState } from 'react';
import { StyledComponet } from './navElements';

const DebitAmount = () => {
   
  const [balance, setBalance] = useState('')
  const[flag,setFlag]=useState(false);
  const cureentBalanceHandler = (event) => {
    event.preventDefault()
    const creditAmount = event.target.creditAmount.value;
    const accountNumber = event.target.accountNumber.value;
      axios.put('http://localhost:8080/customer/debit/'+ accountNumber+ "/"+ creditAmount ).then((response) => {
        setBalance(response.data)
        setFlag(true)
        console.log(response)
    }).catch(error => {
        console.error(error)
    })
   
   event.target.reset();
    }
  return (
    <div>
      <StyledComponet>
      <form onSubmit={cureentBalanceHandler}>
        
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label"> Account Number</label>
          <div class="col-sm-10">
            <input  type="text"  id="accountNumber"></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Debit Amount</label>
          <div class="col-sm-10">
            <input  type="text"  id="creditAmount" placeholder=""></input>
          </div>
        </div>
      
        <button type="submit" class="btn btn-primary btn-sm" >Click Here</button>
        {balance == -1 && alert("please Enter Valid Account Number")}
        {balance >= 0 && flag && <p>Your updated Balane is {balance}/-</p>}
       
      </form>
      </StyledComponet>
    </div>
  )
}

    export default DebitAmount;
    