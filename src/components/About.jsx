import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data'

export default function About(){
  return (
    <motion.section
      id="about"
      initial={{opacity:0,y:8}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        About
      </h2>

      <div className="card hero p-6">
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          I am a Software Development Engineer with experience building full-stack applications. I enjoy solving complex problems, designing robust APIs, and working with modern frontend frameworks.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.slice(0,4).map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{opacity:0, y:8}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true, amount:0.3}}
              transition={{duration:0.4, delay: idx * 0.05}}
              whileHover={{y:-3, scale:1.01}}
              className="p-4 card hero shadow-inner"
            >
              <h3 className="font-medium text-slate-800 dark:text-slate-100">{s.name}</h3>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {s.items.map(i => i.name).join(' • ')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
