import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero   from './components/section/Hero'
import About from './components/section/About'
import Contact from './components/section/Contact'
import Footer from './components/layout/Footer'
import Scroll from './components/layout/Scroll'
import Skills from './components/section/Skills'
import Capabilities from './components/section/Capabilities'
import Welcome from './components/layout/Welcome'


function App() {

const [count, setCount] = useState(0)
const [showWelcome, setShowWelcome] = useState(true)

useEffect(() => {
  const timer = setTimeout(() => {
    setShowWelcome(false);
  }, 5000); 

    return () => clearTimeout(timer);
  
  }, []);

  if (showWelcome) {
    return(
      <Welcome/>
    )
  }


  return (
    <>
    {/* <Welcome/> */}
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Capabilities/>
      <Contact/>
      <Footer/>
      <Scroll/>
    </>
  )
}

export default App
