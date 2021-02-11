import React from 'react'
import styled from 'styled-components';
import { Hero } from '../../components/Sections';

import Layout from '../../components/Layout'
import PortfolioRoll from '../../components/PortfolioRoll'

const SectionWrapper = styled.section`
  background-color: black;
`;

export default class PortfolioIndexPage extends React.Component {
  render() {
    const 
      title = 'magic pie works.',
      subtitle = 'Magic Pie Copywriting means communicating, collaborating, and creating. How do we do it? Usually with a conversation over a cup of coffee or a couple cold ones. Then we work together to identify needs, chalk up a plan of action, and execute shared strategies. The result is rock-solid copy for websites, videos, blogs, social media, and more.',
      buttonTitle = '';

    return (
      <Layout>
        <Hero
          divider
          maxWidth
          center
          headerTitle={title}
          subtitle={subtitle}
        >
        </Hero>
        <SectionWrapper className="section">
            <PortfolioRoll />
        </SectionWrapper>
      </Layout>
    )
  }
}
