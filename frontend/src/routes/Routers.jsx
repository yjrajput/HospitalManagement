import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Doctors from '../pages/doctors/Doctors'
import Doctorsdetails from '../pages/doctors/Doctorsdetails'
import Login from '../pages/Login'
import Singup from '../pages/Singup'
import Contact from '../pages/Contact'
import Services from '../pages/Services'

const Routers = () => {
  return (
        <Routes>
            <Route path='/' element= {<Home/>}></Route>
            <Route path='/home' element= {<Home/>}></Route>
            <Route path='/doctors' element= {<Doctors/>}></Route>
            <Route path='/doctors/:id' element= {<Doctorsdetails/>}></Route>
            <Route path='/login' element= {<Login/>}></Route>
            <Route path='/register' element= {<Singup/>}></Route>
            <Route path='/contact' element= {<Contact/>}></Route>
            <Route path='/services' element= {<Services/>}></Route>
        </Routes>
  )
}

export default Routers

