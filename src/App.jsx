import React from 'react'
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Programs, Contact, SchoolTutoring, OneOnOneTutoring, OnlineTutoring, CampsTutoring } from './pages'



const App = ()  => {
  return (
<main className='bg-slate-300/20 '>
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/programs' element={<Programs/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/school-tutoring' element={<SchoolTutoring/>} />
      <Route path='/one-on-one-tutoring' element={<OneOnOneTutoring/>} />
      <Route path='/online-tutoring' element={<OnlineTutoring/>} />
      <Route path='/camps-tutoring' element={<CampsTutoring/>} />
    </Routes>
  </Router>
</main>
  )
}

export default App