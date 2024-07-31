import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nave from './Componnent/NavBar/NaveBar'
import NaveBar from './Componnent/NavBar/NaveBar'
import rout from './Naigation/Router'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Componnent/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className='c'>
        <NaveBar />
        <br />
        <br />
        <Routes>
          {rout.map((val, inddex) => (
            <Route path={val.path} element={val.component} />
          ))}
          <Route path={'*'} element={<Home />} />
        </Routes>
      </div>


    </div>
  )
}

export default App
