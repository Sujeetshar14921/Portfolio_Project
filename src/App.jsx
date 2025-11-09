import React, { useEffect, createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './components/Projects'
import { siteMeta } from './data'
import ConnectEmailModal from './components/ConnectEmailModal'
import HireLetterModal from './components/HireLetterModal'

export const VisitorContext = createContext({ email:null, setEmail:()=>{}, hire:()=>{} })

export default function App() {
  useEffect(() => {
    // initialize theme from localStorage
    const theme = localStorage.getItem('theme') || 'light'
    if (theme === 'dark') document.documentElement.classList.add('dark')
  }, [])

  const [email, setEmail] = useState(()=> localStorage.getItem('visitorEmail') || null)
  const [modalOpen, setModalOpen] = useState(false)
  const [hireModalOpen, setHireModalOpen] = useState(false)

  const hire = () => {
    // if no email captured, prompt email modal first
    if(!email){
      setModalOpen(true)
      return
    }
    // open hire letter modal
    setHireModalOpen(true)
  }

  return (
    <VisitorContext.Provider value={{ email, setEmail: (e)=>{ setEmail(e); localStorage.setItem('visitorEmail', e) }, hire }}>
    <div >
      <Helmet>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
      </Helmet>

      <Navbar />

      <main className='mx-4 my-10'>
        <Routes>
          <Route path="/Portfolio_Project/" element={<Home />} />
          <Route path="/Portfolio_Project/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
      <ConnectEmailModal 
        open={modalOpen} 
        onClose={()=> setModalOpen(false)} 
        onSave={(val)=> setEmail(val)}
      />
      <HireLetterModal 
        open={hireModalOpen} 
        onClose={()=> setHireModalOpen(false)} 
        visitorEmail={email}
      />
    </div>
    </VisitorContext.Provider>
  )
}
