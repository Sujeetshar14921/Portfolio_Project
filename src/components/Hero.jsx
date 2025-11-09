import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Avatar from './Avatar'
import avatarPhoto from '../images/avatar.jpg'
import SocialIcons from './SocialIcons'
import { useContext } from 'react'
import { VisitorContext } from '../App'
import { siteMeta } from '../data'
import resumePDF from '../images/Resume.pdf'

const container = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
}
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.2,0.9,0.2,1] } } }

export default function Hero(){
  const { hire } = useContext(VisitorContext)
  const variant = 'circle'

  // typing state
  const words = ['Software Development Engineer', 'Full-stack Developer', 'Frontend Engineer']
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(()=>{
    let timeout
    const current = words[wordIndex % words.length]
    if(!isDeleting){
      timeout = setTimeout(()=> setText(current.slice(0, text.length + 1)), 100)
      if(text === current) timeout = setTimeout(()=> setIsDeleting(true), 900)
    } else {
      timeout = setTimeout(()=> setText(current.slice(0, text.length - 1)), 50)
      if(text === ''){
        setIsDeleting(false)
        setWordIndex(w => w + 1)
      }
    }
    return ()=> clearTimeout(timeout)
  }, [text, isDeleting, wordIndex])

  // note: underline animation removed to avoid unnecessary reflows while typing

  return (
    <section className="relative overflow-hidden py-16 bg-transparent">
      <div className="hero-blobs" aria-hidden>
        <div className="hero-blob one" />
        <div className="hero-blob two" />
      </div>

      <div className="container mx-auto px-4">
        <div className="card hero p-8 md:p-12">
          <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={item} className="space-y-4">
            <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">Welcome — nice to meet you</p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-800 dark:text-white">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">Sujeet Sharma</span>
            </h1>

            <div className="mt-4 text-2xl md:text-3xl font-semibold text-slate-700 dark:text-white">
              <span className="typewriter whitespace-nowrap align-middle">
                {text}
                <span className="cursor" aria-hidden="true" />
              </span>
            </div>

            <motion.p variants={item} className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-xl">
              I love technology and technology loves me.
            </motion.p>

            <motion.div variants={item} className="mt-6 flex items-center gap-4">
              <motion.button
                type="button"
                onClick={hire}
                whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(93,211,211,0.25)" }} 
                whileTap={{ scale: .98 }} 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-900 shadow-lg shadow-teal-400/20"
              >
                Hire Me
              </motion.button>
              <motion.button
                type="button"
                onClick={() => window.open(resumePDF, '_blank')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: .98 }}
                className="cta-ghost"
              >
                View Resume
              </motion.button>
              <div className="ml-4 hidden md:flex items-center"><SocialIcons /></div>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-400/10 via-teal-400/10 to-emerald-400/10 border border-cyan-400/20 text-cyan-600 dark:text-cyan-300">React</span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-400/10 via-teal-400/10 to-emerald-400/10 border border-teal-400/20 text-teal-600 dark:text-teal-300">Node.js</span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-400/10 via-teal-400/10 to-emerald-400/10 border border-emerald-400/20 text-emerald-600 dark:text-emerald-300">TypeScript</span>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center md:items-end gap-4 pr-4">
            <motion.div whileHover={{ scale: 1.03, rotate: -4 }} transition={{ type: 'spring', stiffness: 260 }} className="avatar-frame floating shift-left">
              <div className="avatar-inner">
                <Avatar src={avatarPhoto} alt="Sujeet Sharma" variant={variant} size={260} />
              </div>
              <div className="avatar-badge">5+ yrs</div>
            </motion.div>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
