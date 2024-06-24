import React from 'react'
import './app.css'
import Main from './Components/Main.jsx'
import Navbar from "./Components/Navbar/Navbar";
import Popular from './Components/Popular/Popular'
import Offer from './Components/Offer/Offer'
import About from './Components/About/About.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Offer" element={<Offer/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
   
  </Router>
  )
}

export default App