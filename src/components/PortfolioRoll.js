import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link, graphql, StaticQuery } from 'gatsby'
import { Header,
         Body } from './Typography';

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
    console.log('pr data', data);
  console.log('pr posts', posts);

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6 is-4-desktop" key={post.id}>
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
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                </InnerWrapper>
              </CardWrapper>
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
