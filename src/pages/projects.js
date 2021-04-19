import * as React from "react"

import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/Layout';


const ProjectBlock = (data) => {
  return (
    <div class="xl:w-1/4 md:w-1/2 p-4">
      <div class="bg-gray-100 p-6 rounded-lg">
        <Link to={data.fields.slug}>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={data.frontmatter.featuredImage} alt="content"/>
          <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font uppercase truncate">{data.frontmatter.seasons.map(el => el.name).join(", ")}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{data.frontmatter.title}</h2>
        </Link>
        <p class="leading-relaxed text-base h-40 overflow-ellipsis overflow-hidden">{data.frontmatter.excerpt}</p>
      </div>
    </div>
  )
}



// markup
const ProjectsPage = (jsonData) => {

  const data = jsonData["data"]["allMarkdownRemark"]["nodes"];

  return (
    <Layout>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Les projets <span class="bg-blue-50 text-blue-600 px-2">Data For Good</span></h1>
              <div class="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Retrouvez l'ensemble des projets Data For Good réalisés pendant ou en dehors des saisons. Pour chaque projet, retrouvez les réalisations des bénévoles, l'actualité du projet, la méthodologie et les technologies utilisées, ou bien les liens les plus importants (Github, bibliographie).</p>
          </div>
          <div class="flex flex-wrap -m-4">
            {data.map(el => (ProjectBlock(el)))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage



export const query = graphql`
  query {
    allMarkdownRemark (filter: { frontmatter: { template: { eq: "ProjectPage" } } }){
      nodes {
        frontmatter {
          title
          featuredImage
          seasons{
            name
          }
          excerpt
        }
        fields {
          slug
        }
      }
    }
  }
`