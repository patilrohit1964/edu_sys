import React, { useEffect } from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Explore_Programs from './pages/Explore_Programs'
import Placement from './pages/Placement'
import Hire from './pages/Hire'
import Refer_Earn from './pages/Refer_Earn'

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/68089ec3843a7919139abd31/1ipgqoboi";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
    script.onload = () => {
      if (window.Tawk_API) {
        window.Tawk_API.setAttributes({
          name: "rohit",
          email: "richerloginer@gmail.com",
        }, function (error) {
          if (error) console.log(error);
        });
      }
    };
    return null;
  }, [])
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


