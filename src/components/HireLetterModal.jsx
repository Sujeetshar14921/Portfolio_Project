import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { send } from '@emailjs/browser'

const defaultLetter = `Dear Sujeet Sharma,

I am impressed by your portfolio and would like to discuss a potential opportunity to work together.

Your skills in React, Node.js, and Full-stack Development align perfectly with what I'm looking for. I believe you would be a great fit for my project/team.

I would love to schedule a call at your earliest convenience to discuss this further.

Looking forward to hearing from you.

Best regards,`

export default function HireLetterModal({ open, onClose, visitorEmail }){
  const [name, setName] = useState('')
  const [letter, setLetter] = useState(defaultLetter)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  useEffect(()=>{
    if(open){
      // reset on open
      setLetter(defaultLetter)
      setName(localStorage.getItem('visitorName') || '')
      setStatus(null)
    }
  }, [open])

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleSend = async (e) => {
    e.preventDefault()
    if(!name.trim()){
      alert('Please enter your name')
      return
    }
    setSending(true)
    setStatus(null)
    localStorage.setItem('visitorName', name.trim())

    const payload = {
      visitor_name: name.trim(),
      visitor_email: visitorEmail,
      hiring_letter: letter,
      reply_to: visitorEmail,
      from_email: visitorEmail
    }

    try {
      if(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY){
        await send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY)
        setStatus('sent')
      } else {
        // fallback mailto
        const subject = encodeURIComponent('Hire Request from ' + name.trim())
        const body = encodeURIComponent(`${letter}\n\n${name.trim()}\n${visitorEmail}`)
        const owner = 'mailto:sujeet@gmail.com'
        window.location.href = `${owner}?subject=${subject}&body=${body}`
        setStatus('sent')
      }
    } catch(err){
      console.error(err)
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
        >
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div 
            initial={{scale:.92, opacity:0, y:20}} 
            animate={{scale:1, opacity:1, y:0}} 
            exit={{scale:.92, opacity:0, y:10}}
            transition={{type:'spring', stiffness:140, damping:16}}
            className="relative w-full max-w-2xl card hero p-6 md:p-8 my-8"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">Send Hiring Letter</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Customize your message and send directly to Sujeet</p>
              </div>
              <button 
                type="button" 
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {status === 'sent' ? (
              <motion.div 
                initial={{opacity:0, scale:.9}}
                animate={{opacity:1, scale:1}}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Hiring letter sent!</h4>
                <p className="text-slate-600 dark:text-slate-400">Sujeet will review your message and get back to you soon.</p>
                <motion.button 
                  whileHover={{y:-2}}
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-900 shadow-md"
                >
                  Close
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSend} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Name</label>
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Email</label>
                  <input 
                    type="email"
                    readOnly
                    value={visitorEmail}
                    className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Message (editable)</label>
                  <textarea 
                    value={letter}
                    onChange={e=> setLetter(e.target.value)}
                    rows="12"
                    className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition resize-none"
                  />
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">Feel free to customize this letter or write your own message.</p>
                </div>

                {status === 'error' && (
                  <motion.p 
                    initial={{opacity:0, y:-10}}
                    animate={{opacity:1, y:0}}
                    className="text-sm text-red-600 dark:text-red-400 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Failed to send. Please try again.
                  </motion.p>
                )}

                <div className="flex items-center gap-3 pt-2">
                  <motion.button 
                    type="submit"
                    whileHover={{y:-2, boxShadow: "0 8px 24px rgba(93,211,211,0.25)"}}
                    whileTap={{scale:0.98}}
                    disabled={sending}
                    className="flex-1 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-900 shadow-lg shadow-teal-400/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send Hiring Letter
                      </>
                    )}
                  </motion.button>
                  <button 
                    type="button"
                    onClick={onClose}
                    className="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
