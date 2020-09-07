import React, { Fragment } from 'react'
import './globals.css'
import './javascriptCode.js'
//en globals deberia meter los estilos que afectan a todo el proyecto


import Header from './header'
import About from './aboutMe'
import Advices from './advice'
import MyCourses from './courses'
import Why from './why'
import Blog from './blog'
import GoOn from './goOn'
import Contact from './contact'
import Footer from './footer'

 

//Fragment sirve para no poner divs donde no quiero. en el return de App no me permite ingresar dos compopnentes sin que esten en un dvi o algo. Si los meto en un div puede afectarme luego en mis estilos
//En este caso usamos un fragment explícito, pero si no quiero importarlo puedo simplemente ingresar mis componentes dentro de llaves vacías como estas => <> </> (Sugar sintax para usar Fragment)

function App() {
  return (
      <Fragment>
            <Header>
                  <h1>Dev Zeppelin</h1>
                  <h2>Primeros pasos para ser programador</h2>                  
            </Header>
            <About />
            <Advices />
            <MyCourses />
            <Why />           
            <GoOn />
            <Blog />
            <Contact />
            <Footer />

      </Fragment>
)
}

export default App;