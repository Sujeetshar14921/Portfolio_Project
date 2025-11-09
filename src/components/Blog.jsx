import React from 'react'
import { motion } from 'framer-motion'
import { blogPosts } from '../data'

export default function Blog(){
  return (
    <section id="blog" className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map(p => (
          <motion.article 
            key={p.id} 
            whileHover={{scale:1.02, y: -6}} 
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="card hero p-4"
          >
            {p.poster && (
              <a href={p.poster} target="_blank" rel="noreferrer">
                <div className="w-full h-44 rounded-md overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center shadow-inner mb-3">
                  <img
                    src={p.poster}
                    alt={p.title + ' poster'}
                    className="w-full h-full object-cover"
                    onError={(e)=>{
                      const t = e.currentTarget
                      t.onerror = null
                      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'>\n<defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:rgb(34,211,238);stop-opacity:1' /><stop offset='50%' style='stop-color:rgb(93,211,211);stop-opacity:1' /><stop offset='100%' style='stop-color:rgb(16,185,129);stop-opacity:1' /></linearGradient></defs>\n<rect width='100%' height='100%' fill='url(%23grad)'/>\n<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='20' font-weight='600' font-family='Poppins, Arial'>${p.title}</text>\n</svg>`
                      t.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
                    }}
                  />
                </div>
              </a>
            )}
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{p.title}</h3>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{new Date(p.date).toLocaleDateString()}</div>
            <p className="mt-3 text-slate-700 dark:text-slate-200">{p.excerpt}</p>
            <div className="mt-3">
              <a href={p.url} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-900 shadow-lg shadow-teal-400/20 text-sm hover:shadow-xl transition-shadow">Read more</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
