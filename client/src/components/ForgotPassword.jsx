import React from 'react'
import '../App.css'
import Axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email,setEmail] = useState("")
    const navigate = useNavigate()
    const handleSubmit =(e) =>{
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/forgot-password',{
            email,
        }).then(response => {
            if(response.data.status){
                alert("Check your email for reset password link")
                navigate('/login')
            }          
        }).catch(err =>{
            console.log(err)
        })
    };




  return (
    <div className='app.container'>
        <header>
            <h1>Banking and Finance Management System</h1>
        </header>
        <div className='bg'>
            <div className='re1'>
                <span>YOU CAN RESET YOUR PASSWORD HERE</span>
            </div>
          <div className='sign-up-container1'>
        <form className='sign-up-form1' onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
            <label htmlFor='email'>Email</label>
            <input type="email" autoComplete='off' placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}/>
            <button type='submit'>Send</button>
        </form>
    </div>
    </div>
    <footer>
        <p>&copy; 2024 Banking and Finance Management System.All rights reserved</p>
    </footer>
    </div>
  )
}

export default ForgotPassword
