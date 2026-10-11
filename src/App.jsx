import './App.css'



import { Route, Routes } from 'react-router'

// import Navbar from './components/Navbar'
// import Showcase from './components/Showcase'
// import AboutMe from './components/AboutMe'
// import Contact from './components/Contact'
// import Footer from './components/Footer'


import Home from './pages/Home'
import Projects from './pages/Projects'
import Project01 from './pages/Project01'


function App() {
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/project_01" element={<Project01 />} />
    </Routes>
     
     
      

      
      
    </>
  )
}

export default App
