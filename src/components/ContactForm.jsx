import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { send } from '@emailjs/browser'
import { socials } from '../data'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try{
      // If EmailJS env vars are missing, gracefully fallback to mailto
      if(!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY){
        const mailtoBase = socials?.email || 'mailto:'
        const sep = mailtoBase.includes('?') ? '&' : '?'
        const subject = encodeURIComponent(`New message from ${form.name}`)
        const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`)
        const href = `${mailtoBase}${sep}subject=${subject}&body=${body}`
        window.location.href = href
        setStatus('sent')
        setForm({name:'',email:'',message:''})
        return
      }

      // Send using EmailJS with Vite env variables
      await send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      setStatus('sent')
      setForm({name:'',email:'',message:''})
    }catch(err){
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <motion.section 
      id="contact"
      initial={{opacity:0, y:12}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true, amount:0.3}}
      transition={{duration:0.6}}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        Contact
      </h2>
      
      <div className="card hero p-6 md:p-8">
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
          <motion.div whileFocus={{scale:1.01}} className="relative">
            <input 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              required 
              placeholder="Your Name" 
              className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
            />
          </motion.div>
          
          <motion.div whileFocus={{scale:1.01}} className="relative">
            <input 
              name="email" 
              type="email"
              value={form.email} 
              onChange={handleChange} 
              required 
              placeholder="Your Email" 
              className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
            />
          </motion.div>
          
          <motion.div whileFocus={{scale:1.01}} className="md:col-span-2">
            <textarea 
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              required 
              placeholder="Your Message" 
              rows="5"
              className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all resize-none"
            />
          </motion.div>
          
          <div className="md:col-span-2 flex items-center gap-4">
            <motion.button 
              type="submit" 
              whileHover={{y:-2, boxShadow: "0 12px 32px rgba(93,211,211,0.25)"}}
              whileTap={{scale:0.98}}
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-900 shadow-lg shadow-teal-400/20 hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
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
                  Send Message
                </>
              )}
            </motion.button>
            
            {status === 'sent' && (
              <motion.span 
                initial={{opacity:0, x:-10}} 
                animate={{opacity:1, x:0}}
                className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sent successfully!
              </motion.span>
            )}
            
            {status === 'error' && (
              <motion.span 
                initial={{opacity:0, x:-10}} 
                animate={{opacity:1, x:0}}
                className="flex items-center gap-2 text-red-600 dark:text-red-400 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Error sending message
              </motion.span>
            )}

            {(!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) && (
              <p className="md:col-span-2 text-xs text-slate-500 dark:text-slate-500">
                Tip: Direct email fallback is active. Add EmailJS keys in your <code>.env</code> to enable in-app sending.
              </p>
            )}
          </div>
        </form>
      </div>
    </motion.section>
  )
}
