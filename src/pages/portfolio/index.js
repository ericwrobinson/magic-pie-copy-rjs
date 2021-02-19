import React from 'react'
import styled from 'styled-components';
import PageTransition from 'gatsby-plugin-page-transitions';

import { Hero } from '../../components/Sections';
import Layout from '../../components/Layout'
import PortfolioRoll from '../../components/PortfolioRoll'
import { PortfolioServices } from '../../components/Sections';

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
      <PageTransition>
        <Layout>
        
          <Hero
            divider
            maxWidth
            center
            inverted
            minHeight="750px"
            headerTitle={title}
            subtitle={subtitle}/>

          <SectionWrapper className="section">
            <div className="container">
              <PortfolioRoll />
            </div>
          </SectionWrapper>

          <PortfolioServices
            headerTitle={'need something done? \nsee what we can do.'}
            subtitle={'So now that you’ve read and seen the work we’ve done, check out the services we offer and then let us know how we can make your business better.'}
            buttonTitle={'our services'}/>
        </Layout>
      </PageTransition>
    )
  }
}
