import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/' element=""></Route>
        <Route path='/' element=""></Route>
        <Route path='/' element=""></Route>
        <Route path='/' element=""></Route>
      </Routes>
    </div>
  )
}

export default App


