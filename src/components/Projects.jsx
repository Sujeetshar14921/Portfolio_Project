import React from 'react'
import { projects } from '../data'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
