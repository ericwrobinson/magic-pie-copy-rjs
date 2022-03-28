import React from 'react';
import styled from 'styled-components';
import PageTransition from 'gatsby-plugin-page-transitions';

import { Hero } from '../../components/Sections';
import Layout from '../../components/Layout';
import PortfolioRoll from '../../components/PortfolioRoll';
import { PortfolioServices } from '../../components/Sections';
import { gradients } from '../../theme';

const SectionWrapper = styled.section`
  background: ${gradients.purpleGradient};
`;

export default class PortfolioIndexPage extends React.Component {
  render() {
    const 
      subheading = 'Work',
      title = 'Magic Pie works.',
      subtitle = 'Magic Pie Copywriting means communicating, collaborating, and creating. How do we do it? Usually with a conversation over a cup of coffee or a couple cold ones. Then we work together to identify needs, chalk up a plan of action, and execute shared strategies. The result is rock-solid copy for websites, videos, blogs, and more.';
    return (
      <PageTransition>
        <Layout>
        
          <Hero
            divider
            maxWidth='680px'
            center
            minHeight="750px"
            subheading={subheading}
            headerTitle={title}
            subtitle={subtitle}/>

          <SectionWrapper className="section">
            <div className="container">
              <PortfolioRoll />
            </div>
          </SectionWrapper>

          <PortfolioServices
            headerTitle={'Need some good copy? \nSee what we can do.'}
            subtitle={'So now that you’ve read and seen the work we’ve done, check out the services we offer and then let us know how we can make your business better.'}
            buttonTitle={'Our Services'}/>
        </Layout>
      </PageTransition>
    )
  }
}
