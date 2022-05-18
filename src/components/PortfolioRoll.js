import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash';
import styled from 'styled-components';
import { Link, graphql, StaticQuery } from 'gatsby'
import { 
        // Header,
         Body } from './Typography';
import { NewLink } from './Buttons';

import PreviewCompatibleImage from './PreviewCompatibleImage'
import { colors, gradients } from '../theme';

const Wrapper = styled.div`
  padding-bottom: 88px;
`;
const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between ;
`;

const CardWrapper = styled.article`
  background-color: rgba(255,255,255,.1);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 8px ;
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;

  &:before {
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    content: '';
    background: ${gradients.orangeRed};
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    border-radius: 4px;
    width: 0%;
  }

  :hover {
    transform: scale(1.05, 1.05);
    border-radius: 0;

    &:before {
      background: ${gradients.orangeRed};
      width: 100%;
    }
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

const TagsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const Thumbnail = styled.div`
  width: 100%;
  padding: 4px;
  /* max-width: 250px; */
  /* max-height: 250px; */
  height: auto;
`;

const TagWrapper = styled.ul`
	display: flex ;
	align-self: center;
	flex-direction: row;
  flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 32px ;
`;

const TagItem = styled.li`
	display: flex;
  padding-right: 8px;
`;

class PortfolioRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Wrapper className="columns is-multiline">
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
                          {/* {post.frontmatter.title} */}
                      </Body>
                    </SectionHeader>
                    <TagsWrapper>
                      {post.frontmatter.tags && post.frontmatter.tags.length ? (
                          <TagWrapper className="taglist">
                            {post.frontmatter.tags.map((tag, index) => {
                              return (
                                <TagItem key={tag + `tag`}>
                                  <Body color="white" opacity={.6}>{tag}</Body>
                                  {index != (post.frontmatter.tags.length-1) && 
                                    <span style={{paddingLeft: '8px', color: colors.orange}}> | </span>
                                  }
                                </TagItem>
                              )
                            })}
                          </TagWrapper>
                      ) : null}
                    </TagsWrapper>
                      <NewLink inverted to={post.fields.slug}>
                        learn more
                      </NewLink>
                </CardWrapper>
              </Link>
            </div>
          ))}
      </Wrapper>
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
                tags
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
