import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Education from '../components/Education'
import Blog from '../components/Blog'
import Timeline from '../components/Timeline'
import ContactForm from '../components/ContactForm'
import ScrollToTop from '../components/ScrollToTop'

export default function Home(){
  return (
    <main className="home-bg space-y-16 min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Blog />
      <Timeline />
      <ContactForm />
      <ScrollToTop />
    </main>
  )
}
