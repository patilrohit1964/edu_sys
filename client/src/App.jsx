import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Explore_Programs from './pages/Explore_Programs'
import Placement from './pages/Placement'
import Hire from './pages/Hire'
import Refer_Earn from './pages/Refer_Earn'

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/explore-programs' element={<Explore_Programs />}></Route>
        <Route path='/placement' element={<Placement />}></Route>
        <Route path='/hire' element={<Hire />}></Route>
        <Route path='/refer-earn' element={<Refer_Earn />}></Route>
      </Routes>
    </div>
  )
}

export default App


