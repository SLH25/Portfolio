import { useState, useEffect } from 'react'
import Header  from './components/layout/Header'
import Hero   from './components/section/Hero'
import About from './components/section/About'
import Contact from './components/section/Contact'
import Footer from './components/layout/Footer'
import Scroll from './components/layout/Scroll'
import Skills from './components/section/Skills'
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
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
      <Scroll/>
    </>
  )
}

export default App
