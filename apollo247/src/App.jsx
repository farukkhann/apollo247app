import { useState } from 'react'
// import { MainCompo } from './components/maincompo'
import "./app.css"
import { AllRoutes } from './components/allroutes'
import { Navbar } from './components/navbar'


function App() {
  return (
    <div className="App">
      <div className='app2'>
      <Navbar/>
      <AllRoutes/>
      </div>
      {/* <AllRoutes/> */}
    {/* <MainCompo/> */}
   
    </div>
  )
}

export default App
