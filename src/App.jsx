import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Clinets from './Pages/Clinets'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import ScrollTop from './Components/ScrollToTop'

const App = () => {
  return (
    <>
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/clients' element={<Clinets/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App