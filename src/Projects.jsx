import { FaGithub } from "react-icons/fa"
import React from "react"
import { useFetchProjects } from "./fetchProjects"

function Projects() {
  const { loading, projects } = useFetchProjects()

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
            <div key={id} className='project'>
              <a
                href={siteUrl}
                target='_blank'
                rel='noreferrer'
                className='project-link'
              >
                <img src={imageUrl} alt={title} className='img' />
                <h5>{title}</h5>
              </a>
              {sourceCodeUrl && (
                <a
                  href={sourceCodeUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='source-code-link'
                >
                  <FaGithub />
                </a>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
