import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_url } from '../services/Helper';


function CustomerList() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAllCustomers();
  },[])

  const getAllCustomers = () => {
      axios.get(`${base_url}/admin/customers`).then(
        (response) => {
            console.log(response);
        // setCustomers
        },
        (error) => {

        }
    )
  }


  return (
    <div>
      
    </div>
  )
}

export default CustomerList
