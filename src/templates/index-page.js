import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import {  HomePageHero,
          HomePageWork,
          HomePageServices,
          HomePageWhy } from '../components/Sections';
import { Header,
         // SubHeader,
         // Body 
       } from '../components/Typography';

export const IndexPageTemplate = ({
  hero,
  work,
  services,
  why
}) => {
  return (
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
      buttonTitle={work.buttonTitle}
      workLogo1={!!work.workLogo1.childImageSharp ? work.workLogo1.childImageSharp.fluid.src : work.workLogo1}
      workLogo2={!!work.workLogo2.childImageSharp ? work.workLogo2.childImageSharp.fluid.src : work.workLogo2}
      workLogo3={!!work.workLogo3.childImageSharp ? work.workLogo3.childImageSharp.fluid.src : work.workLogo3}
      workLogo4={!!work.workLogo4.childImageSharp ? work.workLogo4.childImageSharp.fluid.src : work.workLogo4}
    >      
    </HomePageWork>

    <HomePageServices
      headerTitle={services.title}
      subitle={services.subtitle}
      buttonTitle={services.buttonTitle}
      serviceTitle1={services.service1.title}
      serviceSubtitle1={services.service1.subtitle}
      serviceTitle2={services.service2.title}
      serviceSubtitle2={services.service2.subtitle}
      serviceTitle3={services.service3.title}
      serviceSubtitle3={services.service3.subtitle}
      serviceTitle4={services.service4.title}
      serviceSubtitle4={services.service4.subtitle}
    >      
    </HomePageServices>

    <HomePageWhy
      headerTitle={why.title}
      subitle={why.subtitle}
      buttonTitle={why.buttonTitle}
      image={!!why.img.childImageSharp ? why.img.childImageSharp.fluid.src : why.img}
    >
    </HomePageWhy>
  </div>
)}

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  work: PropTypes.object,
  services: PropTypes.object,
  why: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log('api', frontmatter)

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
          service1 {
            title
            subtitle
          }
          service2 {
            title
            subtitle
          }
          service3 {
            title
            subtitle
          }
          service4 {
            title
            subtitle
          }
          buttonTitle
        }
        why {
          title
          subtitle
          buttonTitle
          img {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
