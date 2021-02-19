import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageTransition from 'gatsby-plugin-page-transitions';

import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';

import { Header,
         Body } from '../components/Typography';
import { PortfolioHero } from '../components/Sections';

import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ContentWrapper = styled.div`
  margin-top: 44px;
`;

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  subtitle,
  tags,
  featuredimage,
  title,
  helmet,
}) => {

  const PostContent = contentComponent || Content

  return (
    <PageTransition>
      <PortfolioHero
          maxWidth
          center
          divider
          featuredimage={featuredimage}
          headerTitle={title}
          subtitle={subtitle}/>
      <section className="section">
        {helmet || ''}
        <div className="container content">

          <div className="columns">
            <ContentWrapper className="column is-10 is-offset-1">
              
              <PostContent content={content} />

              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

            </ContentWrapper>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

PortfolioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <PortfolioPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        subtitle={post.frontmatter.subtitle}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Portfolio">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="subtitle"
              content={`${post.frontmatter.subtitle}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PortfolioPost

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
