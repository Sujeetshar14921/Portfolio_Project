import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({project}){
  return (
    <motion.div 
      whileHover={{scale:1.02, y: -6}} 
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="card hero p-4"
    >
      <div className="h-40 rounded-md overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center shadow-inner">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full shadow-inner"
            onError={(e) => {
              const t = e.currentTarget
              t.onerror = null
              const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'>\n<defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:rgb(34,211,238);stop-opacity:1' /><stop offset='50%' style='stop-color:rgb(93,211,211);stop-opacity:1' /><stop offset='100%' style='stop-color:rgb(16,185,129);stop-opacity:1' /></linearGradient></defs>\n<rect width='100%' height='100%' fill='url(%23grad)'/>\n<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='18' font-weight='600' font-family='Poppins, Arial'>${project.title}</text>\n</svg>`
              t.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
            }}
          />
        ) : (
          <div className="text-slate-500 dark:text-slate-400">No image</div>
        )}
      </div>
      <h4 className="mt-3 font-semibold text-slate-800 dark:text-slate-100">{project.title}</h4>
      <p className="text-sm mt-1 text-slate-600 dark:text-slate-300">{project.description}</p>
      <div className="mt-4 flex gap-2">
        <a href={project.demo} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-900 shadow-lg shadow-teal-400/20 text-xs hover:shadow-xl transition-shadow">Live Demo</a>
        <a href={project.repo} className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">GitHub</a>
      </div>
    </motion.div>
  )
}
