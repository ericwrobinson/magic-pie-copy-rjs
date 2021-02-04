import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

const propTypes = {
},
defaultProps = {
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div``;

const HeroWrapper = styled.div`
  height: 80vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

	::selection {
	  background: #000;
	  color: white;
	};

  @media only screen and (max-width: 780px) {

	}

	@media only screen and (max-width: 580px) {

	}

	@media only screen and (max-width: 400px) {

	}

`;

const HomePageHero = ({ children, headerTitle, subitle, buttonTitle }) => {
	return (
		<Wrapper>
			<HeroWrapper>
				<SiteContent center>
					<Header h1 color='white'>
						{headerTitle}
		      </Header>
		      <Body paddingBottom>
		      	{subitle}
		      </Body>
		      <ButtonPrimary 
		      	inverted 
		      	linkTo={'#'}>{buttonTitle}</ButtonPrimary>
				</SiteContent>
			</HeroWrapper>
		</Wrapper>
	);
}

HomePageHero.propTypes 	  = propTypes;
HomePageHero.defaultProps  = defaultProps;

export default HomePageHero;