import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import { Hero,
         AboutHero,
         ThreeCol } from '../components/Sections';


export const AboutPageTemplate = ({
  hero,
  intro,
  partners
}) => (
  <PageTransition>
    <div>
      <AboutHero
        maxWidth
        center
        inverted
        divider
        headerTitle={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
      />

      <Hero
        maxWidth
        center
        h2
        height={'300px'}
        backgroundColor={'white'}
        headerTitle={intro.title}
        subtitle={intro.subtitle}
        buttonTitle={intro.buttonTitle}
        linkTo={'/services'}
      />

      <Hero
        maxWidth
        center
        h2
        minHeight={'400px'}
        height={'400px'}
        headerTitle={partners.title}
        subtitle={partners.subtitle}
      />

      <ThreeCol
        image1={partners.partnerLogo1}
        headerTitle1={partners.partnerType1}
        buttonTitle1={partners.partnerButtonTitle1}
        linkTo1={partners.partnerButtonLink1}
        image2={partners.partnerLogo2}
        headerTitle2={partners.partnerType2}
        buttonTitle2={partners.partnerButtonTitle2}
        linkTo2={partners.partnerButtonLink2}
        image3={partners.partnerLogo3}
        headerTitle3={partners.partnerType3}
        buttonTitle3={partners.partnerButtonTitle3}
        linkTo3={partners.partnerButtonLink3}
      />
    </div>
  </PageTransition>
)

AboutPageTemplate.propTypes = { 
  intro: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  intro: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonTitle: PropTypes.string,
  }),
  partners: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <AboutPageTemplate
        hero={frontmatter.hero}
        intro={frontmatter.intro}
        partners={frontmatter.partners}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        hero {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
        }
        intro {
          title
          subtitle
          buttonTitle
        }
        partners {
          title
          subtitle
          partnerLogo1 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          partnerType1
          partnerButtonTitle1
          partnerButtonLink1
          partnerLogo2 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          partnerType2
          partnerButtonTitle2
          partnerButtonLink2
          partnerLogo3 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          partnerType3
          partnerButtonTitle3
          partnerButtonLink3
        }
      }
    }
  }
`
