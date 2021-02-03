import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  hero,
  work
}) => (
  <div>
    <div
      style={{
        display: 'flex',
        height: '150px',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',
      }}
    >
      <h1
        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        style={{
          boxShadow:
            'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
          backgroundColor: 'rgb(255, 68, 0)',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em',
        }}
      >
        {hero.title}
      </h1>
      <h3
        className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
        style={{
          whiteSpace: 'pre-line',
          boxShadow:
            'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
          backgroundColor: 'rgb(255, 68, 0)',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em',
        }}
      >
        {hero.subtitle}
      </h3>
      <Link>{hero.buttonTitle}</Link>
    </div>
    <section className="section section--gradient">
      <h2>{work.title}</h2>
      <p>{work.subtitle}</p>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!work.workLogo1.childImageSharp ? work.workLogo1.childImageSharp.fluid.src : work.workLogo1
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      ></div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!work.workLogo2.childImageSharp ? work.workLogo2.childImageSharp.fluid.src : work.workLogo2
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      ></div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!work.workLogo3.childImageSharp ? work.workLogo3.childImageSharp.fluid.src : work.workLogo3
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      ></div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!work.workLogo4.childImageSharp ? work.workLogo4.childImageSharp.fluid.src : work.workLogo4
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      ></div>
      <Link>{work.buttonTitle}</Link>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  work: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log('frontmatter', frontmatter)
  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        work={frontmatter.work}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          title
          subtitle
          buttonTitle
        }
        work {
          title
          subtitle
          workLogo1 {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          workLogo2 {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          workLogo3 {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          workLogo4 {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          buttonTitle
        }
      }
    }
  }
`
