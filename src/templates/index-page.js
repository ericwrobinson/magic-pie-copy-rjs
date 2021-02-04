import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import {  HomePageHero,
          HomePageWork } from '../components/Sections';
import { Header,
         // SubHeader,
         // Body 
       } from '../components/Typography';

export const IndexPageTemplate = ({
  hero,
  work
}) => (
  <div>
    <HomePageHero
      headerTitle={hero.title}
      subitle={hero.subtitle}
      buttonTitle={hero.buttonTitle}
    >
    </HomePageHero>

    <HomePageWork
      headerTitle={work.title}
      subitle={work.subtitle}
      buttonTitle={hero.buttonTitle}
      workLogo1={!!work.workLogo1.childImageSharp ? work.workLogo1.childImageSharp.fluid.src : work.workLogo1}
      workLogo2={!!work.workLogo2.childImageSharp ? work.workLogo2.childImageSharp.fluid.src : work.workLogo2}
      workLogo3={!!work.workLogo3.childImageSharp ? work.workLogo3.childImageSharp.fluid.src : work.workLogo3}
      workLogo4={!!work.workLogo4.childImageSharp ? work.workLogo4.childImageSharp.fluid.src : work.workLogo4}
    >      
    </HomePageWork>

    <HomePageWork
      h1 
      headerTitle={work.title}
      subitle={work.subtitle}
      buttonTitle={hero.buttonTitle}
      workLogo1={!!work.workLogo1.childImageSharp ? work.workLogo1.childImageSharp.fluid.src : work.workLogo1}
      workLogo2={!!work.workLogo2.childImageSharp ? work.workLogo2.childImageSharp.fluid.src : work.workLogo2}
      workLogo3={!!work.workLogo3.childImageSharp ? work.workLogo3.childImageSharp.fluid.src : work.workLogo3}
      workLogo4={!!work.workLogo4.childImageSharp ? work.workLogo4.childImageSharp.fluid.src : work.workLogo4}
    >      
    </HomePageWork>
      
  </div>
)

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  work: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

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
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          workLogo2 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          workLogo3 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          workLogo4 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
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
