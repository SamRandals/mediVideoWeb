import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Tendences from './components/MovieTendence'
import PreguntasFrecuentes from './components/Questions'

import Footer from './components/Footer'
import EmpezarNetflix from './components/StartÑetflix'
function App() {
  


  return (
    <> 
    <Header></Header>
  <MainSection>
  </MainSection>
<Tendences/>
<PreguntasFrecuentes/>
<EmpezarNetflix/>
<Footer></Footer>
    </>
  )
}

export default App
