import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/Layout';
import {  HomePageHero,
          HomePageWork,
          HomePageServices,
          HomePageWhy } from '../components/Sections';
          
export const IndexPageTemplate = ({
  hero,
  work,
  services,
  why
}) => {
  return (
    <PageTransition>
      <HomePageHero
        maxWidth
        center
        headerTitle={hero.title}
        subtitle={hero.subtitle}
        buttonTitle={hero.buttonTitle}
        linkTo='/contact'
      />

      <HomePageWork
        headerTitle={work.title}
        subtitle={work.subtitle}
        buttonTitle={work.buttonTitle}
        linkTo='/portfolio'
        workLogo1={!!work.workLogo1.childImageSharp ? work.workLogo1.childImageSharp.fluid.src : work.workLogo1}
        workLogo2={!!work.workLogo2.childImageSharp ? work.workLogo2.childImageSharp.fluid.src : work.workLogo2}
        workLogo3={!!work.workLogo3.childImageSharp ? work.workLogo3.childImageSharp.fluid.src : work.workLogo3}
        workLogo4={!!work.workLogo4.childImageSharp ? work.workLogo4.childImageSharp.fluid.src : work.workLogo4}
      />      

      <HomePageServices
        headerTitle={services.title}
        subtitle={services.subtitle}
        buttonTitle={services.buttonTitle}
        linkTo='/services'
        serviceTitle1={services.service1Title}
        serviceSubtitle1={services.service1Subtitle}
        serviceTitle2={services.service2Title}
        serviceSubtitle2={services.service2Subtitle}
        serviceTitle3={services.service3Title}
        serviceSubtitle3={services.service3Subtitle}
        serviceTitle4={services.service4Title}
        serviceSubtitle4={services.service4Subtitle}
      />

      <HomePageWhy
        headerTitle={why.title}
        subtitle={why.subtitle}
        buttonTitle={why.buttonTitle}
        linkTo='/about'
      />
    </PageTransition>
)}

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  work: PropTypes.object,
  services: PropTypes.object,
  why: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        work={frontmatter.work}
        services={frontmatter.services}
        why={frontmatter.why}
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
        services {
          title
          subtitle
          service1Title
          service1Subtitle
          service2Title
          service2Subtitle
          service3Title
          service3Subtitle
          service4Title
          service4Subtitle
          buttonTitle
        }
        why {
          title
          subtitle
          buttonTitle
        }
      }
    }
  }
`
