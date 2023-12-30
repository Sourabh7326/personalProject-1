import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Contact from './Contact'


import Home from './Components/Home'
import Footer from './Components/Footer'
import Services from './Components/Services'
import "./Styles/home.scss"
import "./Styles/contact.scss"
import './Styles/App.scss'
import './Styles/Header.scss'
import './Styles/mediaquerry.scss'
// import './Styles/services.scss'


import "./Styles/contact.scss"

const App = () => {
  return (
    <Router>
    <Header />
      <Routes>
         <Route path='/' element={<Home/>} /> 
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

