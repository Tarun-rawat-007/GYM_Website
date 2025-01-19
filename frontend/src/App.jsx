import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {BrowserRouter as Router } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Bmicalculator from "./componenets/Bmicalculator";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import Gallery from "./componenets/Gallery";
import Hero from "./componenets/Hero";
import Pricing from "./componenets/Pricing";
import Workoutsession from "./componenets/Workoutsession";
const App = () => {
  {toast}
  return (
    
    <Router>
      <Navbar/>
      <Hero/>
      <Workoutsession/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <Bmicalculator/>
      <Footer/>
      <ToastContainer theme='dark' position='top-center'></ToastContainer>
    </Router>
  )
}

export default App