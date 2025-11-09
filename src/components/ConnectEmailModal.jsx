import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Simple modal to capture visitor email once
export default function ConnectEmailModal({ open, onClose, onSave }){
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)

  useEffect(()=>{
    if(open){
      // preload any existing email
      const existing = localStorage.getItem('visitorEmail')
      if(existing) setEmail(existing)
    } else {
      setTouched(false)
    }
  }, [open])

  const valid = /.+@.+\..+/.test(email)

  const handleSubmit = e => {
    e.preventDefault()
    setTouched(true)
    if(!valid) return
    localStorage.setItem('visitorEmail', email.trim())
    onSave(email.trim())
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
        >
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <motion.div 
            initial={{scale:.9, opacity:0, y:30}} 
            animate={{scale:1, opacity:1, y:0}} 
            exit={{scale:.9, opacity:0, y:20}}
            transition={{type:'spring', stiffness:160, damping:18}}
            className="relative w-full max-w-md card hero p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Connect Your Email</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Enter your email so I can reply directly if you choose to hire me.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="email" 
                  required 
                  autoFocus
                  value={email}
                  onChange={e=> setEmail(e.target.value)}
                  onBlur={()=> setTouched(true)}
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                />
                {touched && !valid && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">Please enter a valid email address.</p>
                )}
              </div>
              <div className="flex items-center gap-3">
                <motion.button 
                  type="submit"
                  whileHover={{y:-2}}
                  className="px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-900 shadow-md shadow-teal-400/30 disabled:opacity-50"
                  disabled={!valid}
                >
                  Save & Continue
                </motion.button>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-500">Your email is stored locally in your browser, not sent anywhere until you click Hire.</p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}