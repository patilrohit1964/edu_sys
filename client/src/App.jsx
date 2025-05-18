import React, { useEffect, Suspense, lazy } from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer'
import DataSciMl from './pages/coursesInfo/DataSciMl';
import ProjectManagement from './pages/coursesInfo/ProjectManagement';
import CareerCatalyst from './pages/coursesInfo/CareerCatalyst';
import InvestmentBanking from './pages/coursesInfo/InvestmentBanking';
import Java from './pages/coursesInfo/JavaCourse';
import SuccessStory from './pages/SuccessStory';

// Lazy load components
const Home = lazy(() => import('./pages/Home'))
const Explore_Programs = lazy(() => import('./pages/Explore_Programs'))
const Placement = lazy(() => import('./pages/Placement'))
const Hire = lazy(() => import('./pages/Hire'))
const Refer_Earn = lazy(() => import('./pages/Refer_Earn'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const Return_Policy = lazy(() => import('./pages/Return_Policy'))
const DataAnalyticInfo = lazy(() => import('./pages/coursesInfo/DataAnalyticInfo'))

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
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
      mirror: true
    });
    return () => {
      return null;
    };
  }, [])

  return (
    <div className=''>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/placement' element={<Placement />}></Route>
          <Route path='/hire' element={<Hire />}></Route>
          <Route path='/refer-earn' element={<Refer_Earn />}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
          <Route path='/terms-conditions' element={<TermsAndConditions />}></Route>
          <Route path='/return-policy' element={<Return_Policy />}></Route>
          <Route path='/data-analytics-course' element={<DataAnalyticInfo />}></Route>
          <Route path='/data-science-ml' element={<DataSciMl />}></Route>
          <Route path='/product-management-course' element={<ProjectManagement />}></Route>
          <Route path='/career-catalyst-course' element={<CareerCatalyst />}></Route>
          <Route path='/investment-banking-course' element={<InvestmentBanking />}></Route>
          <Route path='/java-course' element={<Java />}></Route>
          <Route path='/success-story' element={<SuccessStory />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
