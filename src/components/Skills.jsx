import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data'

function Bar({name, lvl}){
  return (
    <div className="group">
      <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300"><span>{name}</span><span>{lvl}%</span></div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded mt-1 overflow-hidden">
        <motion.div
          className="h-2 rounded bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400"
          initial={{width:0}}
          whileInView={{width:`${lvl}%`}}
          viewport={{once:true}}
          transition={{duration:0.6, ease:'easeOut'}}
        />
      </div>
    </div>
  )
}

export default function Skills(){
  return (
    <motion.section
      id="skills"
      initial={{opacity:0,y:12}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true, amount:0.3}}
      transition={{duration:0.6}}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.name}
            initial={{opacity:0,y:14}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{duration:0.5, delay:i*0.05}}
            whileHover={{y:-4, scale:1.01}}
            className="p-5 card hero shadow-inner"
          >
            <h3 className="font-semibold mb-4 text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 shadow" />{group.name}
            </h3>
            <div className="space-y-4">
              {group.items.map(item => <Bar key={item.name} name={item.name} lvl={item.lvl} />)}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
