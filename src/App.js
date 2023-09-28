import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/login/Login'
import './app.css'
import SignUp from './components/login/SignUp'
import Home from './components/home/Home'
import UserApply from './components/userApply/UserApply'
const App = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/jobdetail/:id' element={<UserApply/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App