import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/Layout';

import { AiFillGithub } from 'react-icons/ai';
import { IoIosGlobe } from 'react-icons/io';
import { FaSlack } from 'react-icons/fa';

// markup
const ProjectPage = (jsonData) => {

  const data = jsonData["data"].markdownRemark;
  console.log("hello",data);

  return (
    <Layout>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="mb-10 bg-blue-50 px-10 py-10 rounded-xl">
            <div class="flex flex-wrap w-full">
              <div class="lg:w-1/4 w-full lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 mb-5">{data.frontmatter.title}</h1>
                <div class="">
                  {data.frontmatter.seasons.map(el => (
                    <span class="bg-blue-100 px-5 mx-1 mb-2 py-1 rounded-xl text-gray-900 inline-block uppercase  ">{el.name}</span>
                  ))}
                </div>
                <div class="flex flex-wrap text-3xl text-blue-800 mt-5 mx-1">
                  <span class="w-10"><a href={data.frontmatter.github} target="_blank"><AiFillGithub/></a></span>
                  <span class="w-10"><a href={data.frontmatter.website} target="_blank"><IoIosGlobe/></a></span>
                  <span class="w-10"><a href={data.frontmatter.slack} target="_blank"><FaSlack/></a></span>
                </div>
                {/* <img class="h-20 rounded w-full object-contain object-center" src={data.frontmatter.logo} alt="content"/> */}
              </div>
              <div class="lg:w-1/2 w-full px-2 text-gray-800 flex flex-wrap content-center">
                <p class="w-full">{data.frontmatter.excerpt}</p>
                <div class="pt-2">
                  {data.frontmatter.tags.map(el => (
                    <span class="bg-blue-200 px-5 mx-1 py-1 mb-2 rounded-xl text-gray-900 text-xs inline-block" >{el.name}</span>
                  ))}
                </div>
              </div>
              <div class="lg:w-1/4 w-full lg:mb-0 content-center flex flex-wrap">
                <img class="h-40 w-full object-contain object-center align-middle" src={data.frontmatter.featuredImage} alt="content"/>
              </div>
            </div>
          </div>
          <div class="px-16 text-gray-900">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: data.html }}
            />
            <div>
              <h1>A propos</h1>
              <div class="flex flex-wrap w-full">
                <div class="lg:w-1/2">
                  <h2>{data.frontmatter.title}</h2>
                  <div class="flex flex-nowrap w-full">
                  <img class="w-24" src={data.frontmatter.logo} alt="logo-ngo"/>
                  <p class="px-6">{data.frontmatter.description}</p>
                  </div>
                </div>
                <div class="lg:w-1/2">
                  <h2>L'équipe 💪</h2>
                  <ul>
                    {data.frontmatter.team.map(el => (
                      <li>{el.name} - <i>{el.role}</i></li>
                    ))}
                  </ul>
                  <p>Vous avez des questions sur ce projet ? Contactez-nous sur slack ou par <a class="text-blue-700 underline" href="mailto:hellodataforgood@gmail.com">email</a></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectPage


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter{
        title
        template
        status
        date
        featuredImage
        excerpt
        logo
        description
        github
        website
        linkedin
        seasons {
          name
        }
        meta {
          description
          title
        }
        tags {
          name
        }
        team {
          name
          role
        }
      }
    }
  }
`