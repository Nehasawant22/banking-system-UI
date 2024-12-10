import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DeleteCustomer() {
  const [posts, setCustomer] = useState([])
  const deleteHandler = (event) => {
    const customerId = event.target.customerId.value;
    const accountNumber = event.target.accountNumber.value;
    const params = { customerId, accountNumber };
    axios
      .delete("http://localhost:8080/customer/" + customerId + "/" + accountNumber)
      .then(response => {
        alert("deleted successfully!")
      }).catch(error => {
        console.error(error)
      })
  }
  return (
    <div>
      <form onSubmit={deleteHandler}>
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
      
        <button className='btn btn-primary'>Delete</button>
      </form>
    </div>
  )
};

export default DeleteCustomer;
