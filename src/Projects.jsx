import { FaGithub } from "react-icons/fa"
import React from "react"
import { useFetchProjects } from "./fetchProjects"

function Projects() {
  const { loading, projects } = useFetchProjects()
  console.log(loading, projects)

  if (loading)
    return (
      <section className='projects'>
        <h2>Loading...</h2>
      </section>
    )
  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          const { id, imageUrl, siteUrl, sourceCodeUrl, title } = project
          return (
            <a
              key={id}
              href={siteUrl}
              target='_blank'
              rel='noreferrer'
              className='project'
            >
              <img src={imageUrl} alt={title} className='img' />
              <h5>{title}</h5>
              <a href={sourceCodeUrl} target='_blank' rel='noreferrer'>
                <FaGithub />
              </a>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
