
import Portfolio from './Portfolio'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllCertificates from './Pages/AllCertificates'
import AllProjects from './Pages/AllProjects'


function App() {
  return(
    <div className='container'>
        <BrowserRouter>
      <Routes>
          <Route path='/' element={< Portfolio/>} />
          <Route path='/certifications' element={< AllCertificates/>} />
          <Route path='/projects' element={< AllProjects/>} />
      </Routes>
    </BrowserRouter>
    </div>
   
  )
}

export default App
