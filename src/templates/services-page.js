import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import { Hero,
         SplitCTA } from '../components/Sections';

const GridWrapper = styled.div`
  background-color: #F2F2F2;
  position: relative;
  z-index: -2;
`;

export const ServicesPageTemplate = ({
  image,
  title,
  subtitle,
  intro,
  cta,
}) => (
  <React.Fragment>
    <Hero
      maxWidth
      center
      headerTitle={title}
      subtitle={subtitle}/>
    <GridWrapper className="columns">
      <div className="column is-10 is-offset-1">
        <Features gridItems={intro.services} />
      </div>
    </GridWrapper>
  </React.Fragment>
)

ServicesPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  intro: PropTypes.shape({
    services: PropTypes.array,
  }),
  cta: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonTitle: PropTypes.string,
  }),
}

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log('frn', frontmatter)
  return (
    <Layout>

      <ServicesPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        intro={frontmatter.intro}
        cta={frontmatter.cta}
      />

      <SplitCTA
        headerTitle1={frontmatter.cta.title1}
        subtitle1={frontmatter.cta.subtitle1}
        buttonTitle1={frontmatter.cta.buttonTitle1}
        headerTitle2={frontmatter.cta.title2}
        subtitle2={frontmatter.cta.subtitle2}
        buttonTitle2={frontmatter.cta.buttonTitle2}
      />

    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        subtitle
        intro {
          services {
            serviceTitle
            serviceSubtitle
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        cta {
          title1
          subtitle1
          buttonTitle1
          title2
          subtitle2
          buttonTitle2
        }
      }
    }
  }
`
