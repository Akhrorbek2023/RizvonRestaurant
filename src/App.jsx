import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom'
import { Header } from './container/Header'
import { Home } from './container/Home'
import { Footer } from './container/Footer'
import { Menu } from './Menu'
import { About } from './container/About'
import { Contact } from './Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <div className=''>
     <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
        
      </Router>
     </div>
    </>
  )
}

export default App
