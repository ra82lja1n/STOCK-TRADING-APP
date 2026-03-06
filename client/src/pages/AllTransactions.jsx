import React, { useEffect, useState } from 'react'
import '../styles/AllTransactions.css'
import axios from 'axios';
import axiosInstance from '../components/axiosInstance';
import { useNavigate } from 'react-router-dom';

const AllTransactions = () => {

  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate()

  useEffect(()=>{
    fetchTransactions();
  }, [])

  const fetchTransactions = async()=>{
    await axiosInstance.get('/transactions').then(
      (response)=>{
        setTransactions(response.data.reverse());
      }
    ).catch((err)=>{
      if (err.response.status == 400){
        localStorage.clear()
        navigate("/")
      }
      console.log(err)
    })
  }

  return (
    <div className="all-transactions-page">
        <h2>All Transactions</h2>
        <div className="all-transactions">

              {transactions.map((transaction, index)=>{
                return(
                  <div className="admin-transaction" key={index} >
                      <span>
                        <h6>Transaction Id</h6>
                        <p>{transaction._id}</p>
                      </span>
                      <span>
                        <h6>User Id</h6>
                        <p>{transaction.user}</p>
                      </span>
                      <span>
                        <h6>Amount</h6>
                        <p>$ {transaction.amount}</p>
                      </span>
                      <span>
                        <h6>Action</h6>
                        <p> {transaction.type} </p>
                      </span>
                      <span>
                        <h6>Payment mode</h6>
                        <p>{transaction.paymentMode}</p>
                      </span>
                      <span>
                        <h6>Time</h6>
                        <p>{transaction.time.slice(0,24)}</p>
                      </span>
                  </div>
                )
              })}
        </div>
    </div>
  )
}

export default AllTransactions