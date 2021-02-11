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

const Wrapper = styled.div`
  background-color: ${({ inverted }) => inverted ? 'black' : '#f2f2f2' };

`;

const HeroImage = styled.img`
	width: 850px;
	margin: 0 auto;

	@media only screen and (max-width: 780px) {
		width: 100%;
	}
`;

const ContentWrapper = styled.div``;

const Divider = styled.img`
	width: 100%;
	transform: rotate(180deg);
	margin-bottom: -10px;
`;

const HeroWrapper = styled.div`
  min-height: 500px;
  height: 40vh;
  background-color: ${({ inverted }) => inverted ? 'black' : '#f2f2f2' };
  color: ${({ inverted }) => inverted ? '#f2f2f2' : 'black' };
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

	::selection {
	  background: #000;
	  color: #f2f2f2;
	};

  @media only screen and (max-width: 780px) {

	}

	@media only screen and (max-width: 580px) {

	}

	@media only screen and (max-width: 400px) {

	}

`;

// <HeroImage src={homeHero}/>


const Hero = ({ 
	children, 
	inverted, 
	headerTitle, 
	subtitle, 
	buttonTitle, 
	divider,
	maxWidth,
	center
	}) => {


	return (
		<Wrapper inverted={inverted}>
			<HeroWrapper
				inverted={inverted}>
				<SiteContent
					center>

					<Header 
						h1
						color={inverted ? '#f2f2f2' : 'black' }>
						{headerTitle}
		      </Header>

		      <Body 
		      	paddingBottom
		      	maxWidth={maxWidth}
		      	center={center}
		      	color={inverted ? '#f2f2f2' : 'black' }>
		      	{subtitle}
		      </Body>

		      { buttonTitle &&
			      <ButtonPrimary 
			      	inverted={inverted} 
			      	linkTo={'#'}>{buttonTitle}</ButtonPrimary>
		      }

				</SiteContent>
			</HeroWrapper>
			{ divider && 
				<Divider src={curvesBlackTop} />
			}
		</Wrapper>
	);
}

Hero.propTypes 	  = propTypes;
Hero.defaultProps  = defaultProps;

export default Hero;