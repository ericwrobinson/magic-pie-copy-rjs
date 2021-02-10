import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

import homeHero from '../../img/magic-pie-copy-home-hero.svg';
import curvesBlackTop from '../../img/curves/curves-black-top.svg';
const propTypes = {
},
defaultProps = {
}

const Wrapper = styled.div``;

const HeroImage = styled.img`
	width: 850px;
	margin: 0 auto;

	@media only screen and (max-width: 780px) {
		width: 100%;
	}
`;

const HeaderHider = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`;

const ContentWrapper = styled.div``;
const Divider = styled.img`
	width: 100%;
`;

const WhyWrapper = styled.div`
  height: 70vh;
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
			<WhyWrapper>
				<SiteContent center>
	      	<HeroImage src={homeHero}/>
	      	<HeaderHider>
						<Header h1 color='black'>
							{headerTitle}
			      </Header>
	      	</HeaderHider>
		      <Body paddingBottom>
		      	{subitle}
		      </Body>
		      <ButtonPrimary 
		      	inverted 
		      	linkTo={'#'}>{buttonTitle}</ButtonPrimary>
				</SiteContent>
			</WhyWrapper>
			<Divider src={curvesBlackTop} />
		</Wrapper>
	);
}

HomePageHero.propTypes 	  = propTypes;
HomePageHero.defaultProps  = defaultProps;

export default HomePageHero;