import React from 'react'
import { BrowserRouter, Routes, Route, Navigate }  from 'react-router-dom'
import Home from './components/Home'
import Login from './components/login'
import SignUp from './components/signUp'
import ForgotPassword from './components/forgotPassword'
import Dashboard from './components/Dashboard'

function App() {
  return <>
  <div id='wrapper'>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/forgotpassword' element={<ForgotPassword />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>

  </div>
  </>
}

export default App