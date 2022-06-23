import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css';
import Img from 'gatsby-image';

export default function Project({ data }) {
    console.log(data);
    const projects = data.projects.nodes;
    const contact = data.contacts.siteMetadata.contact;
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & website I've created</h3>
                <div className={styles.projects}>
                    {projects.map(project => (
                        <Link to={"/projects/"+ project.frontmatter.slug} key={project.id}>
                            <div>
                                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Like what you see? Email me at {contact}</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          featured {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
          }
        }
        id
      }
    }
    contacts: site {
      siteMetadata {
        contact
      }
    }
  }
  `;