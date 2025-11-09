import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  // Basic scroll-spy for hash sections
  useEffect(() => {
    const ids = ['about', 'skills', 'blog', 'contact']
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -30% 0px', threshold: [0.5] }
    )

    sections.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const linkBase = 'relative nav-link group'
  const activePill = 'after:content-["" ] after:absolute after:-inset-y-1 after:-inset-x-2 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:via-teal-400 after:to-emerald-400 after:opacity-20'
  const hoverUnderline = 'before:content-["" ] before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-0 before:bg-gradient-to-r before:from-cyan-400 before:via-teal-400 before:to-emerald-400 group-hover:before:w-full before:transition-all before:duration-300'

  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* colorful progress bar */}
      <motion.div style={{ scaleX }} className="origin-left h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400" />

      <div className="navbar-glass px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 brand-badge flex items-center justify-center font-bold brand-mark">SS</div>
            <div className="leading-tight">
              <div className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
                Sujeet Sharma
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={({isActive})=> `${linkBase} ${hoverUnderline} ${isActive ? activePill+' text-slate-900 dark:text-white' : ''}`}>Home</NavLink>
            <NavLink to="/projects" className={({isActive})=> `${linkBase} ${hoverUnderline} ${isActive ? activePill+' text-slate-900 dark:text-white' : ''}`}>Projects</NavLink>
            <a href="#about" className={`${linkBase} ${hoverUnderline} ${activeSection==='about' ? activePill+' text-slate-900 dark:text-white' : ''}`}>About</a>
            <a href="#skills" className={`${linkBase} ${hoverUnderline} ${activeSection==='skills' ? activePill+' text-slate-900 dark:text-white' : ''}`}>Skills</a>
            <a href="#blog" className={`${linkBase} ${hoverUnderline} ${activeSection==='blog' ? activePill+' text-slate-900 dark:text-white' : ''}`}>Blog</a>
            <a href="#contact" className={`${linkBase} ${hoverUnderline} ${activeSection==='contact' ? activePill+' text-slate-900 dark:text-white' : ''}`}>Contact</a>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button aria-label="Open menu" onClick={()=>setOpen(v=>!v)} className="p-2 rounded-md border border-transparent hover:border-slate-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{opacity:0, y:-8}}
              animate={{opacity:1, y:0}}
              exit={{opacity:0, y:-8}}
              className="md:hidden mt-2 px-4"
            >
              <div className="card hero p-4 space-y-3">
                <NavLink to="/" onClick={()=>setOpen(false)} className={({isActive})=> `${linkBase} block ${isActive ? activePill+' text-slate-900 dark:text-white' : ''}`}>Home</NavLink>
                <NavLink to="/projects" onClick={()=>setOpen(false)} className={({isActive})=> `${linkBase} block ${isActive ? activePill+' text-slate-900 dark:text-white' : ''}`}>Projects</NavLink>
                <a href="#about" onClick={()=>setOpen(false)} className={`${linkBase} block ${activeSection==='about' ? activePill+' text-slate-900 dark:text-white' : ''}`}>About</a>
                <a href="#skills" onClick={()=>setOpen(false)} className={`${linkBase} block ${activeSection==='skills' ? activePill+' text-slate-900 dark:text-white' : ''}`}>Skills</a>
                <a href="#blog" onClick={()=>setOpen(false)} className={`${linkBase} block ${activeSection==='blog' ? activePill+' text-slate-900 dark:text-white' : ''}`}>Blog</a>
                <a href="#contact" onClick={()=>setOpen(false)} className={`${linkBase} block ${activeSection==='contact' ? activePill+' text-slate-900 dark:text-white' : ''}`}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
