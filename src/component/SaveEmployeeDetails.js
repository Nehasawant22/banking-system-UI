import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SaveEmployeeDetails() {

    const [form, setForm] = useState({
        customerName: "",
        customerId: "",
        emailId: "",
        accountTypes: "",
        currentBalance: "",
        loanStatus: "",

    });
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
        console.log("customerName: " + form.customerName + "emailId : " + form.emailId + " customer id" + form.customerId + " accountType :" + form.accountType + "currentBalance : " + form.currentBalance + "loanStatus : " + form.loanStatus)
        if (!form.customerName || !form.emailId || !form.customerId || !form.accountType || !form.currentBalance || !form.loanStatus) {
            alert("Please fill out all fields");
        } else {
            return alert("Form Submitted Successfully");
        }

    };


    return (
        <div className='w-50 text-center'>
            <form onSubmit={handleSubmit}>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label" > Customer Id</label>
                    <div class="col-sm-4">
                        <input type="text" id="customerId" placeholder="" value={form.customerId}
                            onChange={(e) => setForm({ ...form, customerId: e.target.value })} ></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label"> Customer Name</label>
                    <div class="col-sm-4">
                        <input type="text" id="customerName" placeholder="" value={form.customerName}
                            onChange={(e) => setForm({ ...form, customerName: e.target.value })}></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label"> Email  </label>
                    <div class="col-sm-4">
                        <input type="text" id="email" placeholder="" value={form.emailId}
                            onChange={(e) => setForm({ ...form, emailId: e.target.value })}></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="accountType" class="col-sm-2 col-form-label"> Account Type  </label>
                    <div class="col-sm-4">
                        <select name="select Account" id="accountType" class="form-control" value={form.accountType}
                            onChange={(e) => setForm({ ...form, accountType: e.target.value })}>
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
                        <input type="text" id="currentBalance" placeholder="" value={form.currentBalance}
                            onChange={(e) => setForm({ ...form, currentBalance: e.target.value })}></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label"> Loan Status  </label>
                    <div class="col-md-4">
                        <select id="loanStatus" class="form-control" value={form.loanStatus}
                            onChange={(e) => setForm({ ...form, loanStatus: e.target.value })}>
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