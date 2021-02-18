import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link, graphql, StaticQuery } from 'gatsby'
import { Header,
         Body } from './Typography';
import { NewLink } from './Buttons';

import PreviewCompatibleImage from './PreviewCompatibleImage'

const InnerWrapper = styled.div``;
const CardWrapper = styled.article`
  background-color: #151515;
  padding: 1.25rem;
  display: flex;
  min-height: 400px;
  align-items: center;
  text-align: center;
  align-content: center;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  
  :hover {
    transform: scale(1.05, 1.05);
  }

  @media only screen and (max-width: 1402px) {
    min-height: 400px;
  }

  @media only screen and (max-width: 580px) {

  }

  @media only screen and (max-width: 400px) {

  }
`;

const SectionHeader = styled.header`
  display: flex;
  margin-bottom: 1em;
  flex-direction: column;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: 100%;
  max-width: 250px;
  height: auto;
`;

class PortfolioRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (

            <div className="is-parent column is-6 is-4-desktop" key={post.id}>
              <Link 
                to={post.fields.slug}
                style={{width: 'auto'}}>
                <CardWrapper
                  className={`portfolio-list-item is-child ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}>
                  <InnerWrapper>
                    <SectionHeader>
                      {post.frontmatter.logoWhite ? (
                        <Thumbnail className="">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.logoWhite,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </Thumbnail>
                      ) : null}
                      <Body
                        width="300px"
                        color="white">
                          {post.frontmatter.title}
                      </Body>
                    </SectionHeader>
                      <NewLink inverted to={post.fields.slug}>
                        learn more →
                      </NewLink>
                  </InnerWrapper>
                </CardWrapper>
              </Link>
            </div>
          ))}
      </div>
    )
  }
}

PortfolioRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "portfolio-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                logoWhite {
                  childImageSharp {
                    fluid(maxWidth: 250, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PortfolioRoll data={data} count={count} />}
  />
)
