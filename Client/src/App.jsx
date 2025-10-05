import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavigationBar from './Component/NavigationBar'
import Skills from './Pages/Skills'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tries' element={<Skills/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App