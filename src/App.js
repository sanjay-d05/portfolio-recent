import React, { useContext, useEffect } from 'react';
import './App.css' ;

/* pages */
import {
  Home ,
  About ,
  Projects ,
  Certificates ,
  Blogs
} from './pages/page' ;

/* components */
import {
  PortfolioNavbar ,
  Footer ,
  Preloader
} from './components/require' ;

/* react router dom */
import { Route, Routes } from 'react-router-dom';

/* context */
import { PortfolioContext } from './context/Portfoliocontext';

function App() {

  const {load , setLoad} = useContext(PortfolioContext) ;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false) ;
    },1500) ;

    return() => clearTimeout(timer) ;
  } , [])

  return (
    <>
    <Preloader load={load}/>
    <div>
      <PortfolioNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App