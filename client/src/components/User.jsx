import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./User.css"
const User = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleLogout = ()  => {
      axios.get('http://localhost:3000/auth/logout')
      .then(res => {
        if(res.data.status){
          navigate('/login')
        }
      }).catch(err =>{
        console.log(err)
      })
    }


  return (
    <div>
    <nav>
      <Link to='/' className='title' activeClassName='active'>Website</Link>
      <ul>
        <li>
          <NavLink to='/userprofile' activeClassName='active'>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/moneytransaction' activeClassName='active'>Money Transaction</NavLink>
        </li>
        <li>
          <NavLink to='/transactionhistory' activeClassName='active'>Transactions</NavLink>
        </li>
        <li>
          <NavLink to='/applyloans' activeClassName='active'>Apply Loans</NavLink>
        </li>
        <li>
          <NavLink to='/trackloans' activeClassName='active'>Track Loans</NavLink>
        </li>
        <li>
          <NavLink to='/managefinances' activeClassName='active'>Manage Finances</NavLink>
        </li>
        <li>
        <button1 onClick={handleLogout}>Logout</button1>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default User
