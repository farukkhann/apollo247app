import { useState } from 'react'
// import { MainCompo } from './components/maincompo'
import "./app.css"
import { AllRoutes } from './components/allroutes'
import { FooterComponent } from './components/Footer'
import { Navbar } from './components/navbar'
import { AddData } from './components/saveData/sendData'


function App() {
  return (
    <div className="App">
      <div className='app2'>
      <Navbar/>
      <AllRoutes/>
      <FooterComponent/>
      {/* <AddData/> */}
      </div>
   
   
    </div>
  )
}

export default App
