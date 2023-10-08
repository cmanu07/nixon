import React from 'react'

import Header from './Components/Header/Header'
import Home from './Components/Main/Home'
import Process from './Components/Main/Process'
import Testimonies from './Components/Main/Testimonies'
import Services from './Components/Main/Services'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <main>
      <Header/>
      <Home/>
      <Process/>
      <Testimonies/>
      <Services/>
      <Footer/>

    </main>
  )
}

export default App
