import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import Dashboard from './components/Dashboard'
import User from './components/User'
import Userprofile from './components/Userpages/Userprofile'
import Applyloans from './components/Userpages/Applyloans'
import Managefinances from './components/Userpages/Managefinances'
import Trackloans from './components/Userpages/Trackloans'
import MoneyTransaction from './components/Userpages/MoneyTransaction'
import TransactionHistory from './components/Userpages/Transactioinhistory'

function App() {
  return (
    <div className='app-container'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/usermodule" element={<User/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
      <Route path="/resetPassword/:token" element={<ResetPassword/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path='/userprofile' element={<Userprofile/>}></Route>
      <Route path='/applyloans' element={<Applyloans/>}></Route>
      <Route path='/managefinances' element={<Managefinances/>}></Route>
      <Route path='/trackloans' element={<Trackloans/>}></Route>
      <Route path='/moneytransaction' element={<MoneyTransaction/>}></Route>
      <Route path='transactionhistory' element={<TransactionHistory/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
