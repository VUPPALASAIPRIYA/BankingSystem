import React from 'react'
import '../App.css'
import Axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [role,setRole] = useState("")
    const navigate = useNavigate()
    const handleSubmit =(e) =>{
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/signup',{
            username,
            email,
            password,
            role,
        }).then(response => {
            if(response.data.status){
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
        <div className='wrapper'>
        <div className='box box1'>
        "Welcome to our Banking and Finance Management System, your comprehensive solution for all financial needs."
        "Efficiently manage your finances with our secure and user-friendly platform."
"Experience seamless banking services tailored to your needs, all in one place."
        </div>
        <div className='box box2'>
           <div className='new'>
           New to our management system? Then Register immediatley and enjoy our services!!
           </div>
            <div className='sign-up-container'>
        <form className='sign-up-form' onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
            <label htmlFor='username'>Username:</label>
            <input type='text' placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}/>

            <label htmlFor='email'>Email</label>
            <input type="email" autoComplete='off' placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='******'
            onChange={(e) => setPassword(e.target.value)}/>

            <label htmlFor='role'>Role:</label>
            <select id='role'
            onChange={(e) => setRole(e.target.value)}>
                <option value=''>Select Role</option>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
                </select>
            <button type='submit'>Sign Up</button>
            <p>Already Have an account? <Link to="/login">Login</Link></p> 
        </form>
    </div>
        </div>
        <div className='box box3'>
            <h2 >Our Featured Services</h2>
            <ul>
                <li>Account Management</li>
                <li>Fund Transfers</li>
                <li>Bill Payments</li>
                <li>Loan applications</li>
                <li>Investment Options</li>
                <li>And many more..</li>
            </ul>
        </div>
        <div className='box box4'>
            <h1> Security and Privacy</h1>
            <p className='box4-paragraph'>At Banking and Finance Management System, we prioritize the security and privacy of your personal and financial information.</p>
            <h2>Security Measures</h2>
            <ul className='box4-list'>
                <li>Data encryption and secure transmission protocols</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Strict access controls and authentication mechanisms</li>
            </ul>
        </div>
        </div>
        
    <footer>
        <p>&copy; 2024 Banking and Finance Management System.All rights reserved</p>
    </footer>
    </div>
  )
}

export default Signup
