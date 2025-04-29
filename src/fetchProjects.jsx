import { createClient } from "contentful"
import { useEffect, useState } from "react"

const env = import.meta.env

const client = createClient({
  space: env.VITE_CONTENTFUL_SPACE_ID,
  environment: env.VITE_CONTENTFUL_ENVIRONMENT_ID,
  accessToken: env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await client.getEntries({
          content_type: env.VITE_CONTENTFUL_CONTENT_TYPE_PROJECTS,
        })
        const projects = response.items.map((item) => {
          const { image, siteUrl, sourceCodeUrl, title } = item.fields
          const id = item.sys.id
          const imageUrl = image?.fields?.file?.url
          return { title, siteUrl, sourceCodeUrl, imageUrl }
        })
        setProjects(projects)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])
  return { loading, projects }
}
