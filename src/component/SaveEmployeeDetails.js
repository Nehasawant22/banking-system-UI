import React, { useEffect, useState } from 'react';
import { postCustomers } from '../services/EmployeeService';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function SaveEmployeeDetails() {

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const customerName = event.target.customerName.value;
        const customerId = event.target.customerId.value;
        const emailId = event.target.email.value;
        const accountTypes = event.target.accountType.value;
        const currentBalance = event.target.currentBalance.value;
        const loanStatus = event.target.loanStatus.value;

        const accounts = [{ accountTypes, currentBalance, loanStatus }];
        const data = { customerName, emailId, customerId, accounts };
        axios.post('http://localhost:8080/customer', data).then((response) => {
            console.log(response)
        }).catch(error => {
            console.error(error)
        })

    };


    return (
        <div className='w-50 text-center'>
            <form onSubmit={handleSubmit}>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label"> Customer Id</label>
                    <div class="col-sm-4">
                        <input type="text" id="customerId" placeholder=""></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label"> Customer Name</label>
                    <div class="col-sm-4">
                        <input type="text" id="customerName" placeholder=""></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label"> Email  </label>
                    <div class="col-sm-4">
                        <input type="text" id="email" placeholder=""></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="accountType" class="col-sm-2 col-form-label"> Account Type  </label>
                    <div class="col-sm-4">
                        <select name="select Account" id="accountType" class="form-control">
                            <option selected>Choose...</option>
                            <option value="Current">Current</option>
                            <option value="Savings">Savings</option>
                            <option value="Joint">Joint</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="currentBalance" class="col-sm-2 col-form-label"> Deposit Amount  </label>
                    <div class="col-sm-4">
                        <input type="text" id="currentBalance" placeholder=""></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label"> Loan Status  </label>
                    <div class="col-md-4">
                        <select id="loanStatus" class="form-control">
                            <option selected>Choose...</option>
                            <option>Open</option>
                            <option>Closed</option>
                            <option>NA</option>
                        </select>


                    </div>
                </div>

                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}


export default SaveEmployeeDetails;