import axios from "axios";

const Rest_API_URL_FOR_ACCOUNT='http://localhost:8080/customer/';


 export const getCustomers = (customerId) => axios.get(Rest_API_URL_FOR_ACCOUNT+customerId);



