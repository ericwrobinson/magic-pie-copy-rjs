import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

import homeHero from '../../img/magic-pie-copy-home-hero.svg';
import curvesBlackTop from '../../img/curves/curves-black-top.svg';
import curvesWhiteBottom from '../../img/curves/curves-white-bottom.svg';
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

const Image = styled.div`
	width:  80%;
	min-height: 600px;
	background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  background-position: center;
	margin: 0 auto;
	margin-bottom: -120px;
	z-index: -1;

	@media only screen and (min-width: 1600px) {
		width:  80%;
		margin-bottom: -230px;
	}

	@media only screen and (max-width: 980px) {
		width:  80%;
	}

	@media only screen and (max-width: 580px) {
		width:  80%;
		margin: 0 auto;
		min-height: 400px;
		margin-bottom: -50px;
	}

`;

const Divider = styled.img`
	width: 100%;
	transform: ${({ inverted }) => inverted ? null : 'rotate(180deg)' };
	margin-bottom: -10px;
`;

const HeroWrapper = styled.div`
  min-height: ${({ minHeight }) => minHeight ? minHeight : '200px'};
  height: ${({ height }) => height ? height : '30vh'};
  padding-top: 140px;
  background-color: ${({ inverted, backgroundColor }) => backgroundColor ? backgroundColor : inverted ? 'black' : '#f2f2f2' };
  color: ${({ inverted }) => inverted ? '#f2f2f2' : 'black' };
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  z-index: -1;

	::selection {
	  background: #000;
	  color: #f2f2f2;
	};

  @media only screen and (max-width: 780px) {
  	padding-top: 140px;
		height: auto;
	}

	@media only screen and (max-width: 580px) {

	}

	@media only screen and (max-width: 400px) {

	}

`;

// <HeroImage src={homeHero}/>


const AboutHero = ({ 
	children, 
	inverted, 
	headerTitle, 
	subtitle, 
	buttonTitle, 
	divider,
	maxWidth,
	center,
	minHeight,
	height,
	backgroundColor,
	h2,
	linkTo,
	image
	}) => {

	let heading = h2 ? true : false;

	return (
		<Wrapper inverted={inverted}>
			<HeroWrapper
				backgroundColor={backgroundColor}
				minHeight={minHeight}
				height={height}
				inverted={inverted}>
				<SiteContent
					center>
					<Header 
						h1={!h2}
						h2={h2}
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
			      	linkTo={linkTo}>{buttonTitle}</ButtonPrimary>
		      }
				</SiteContent>
				{ image && 
					<Image style={{
	          backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`
	        }}/>
	      }
			</HeroWrapper>
			{ divider && 
				<Divider 
					inverted={inverted} 
					src={inverted ? curvesWhiteBottom : curvesBlackTop} />
			}
		</Wrapper>
	);
}

AboutHero.propTypes 	  = propTypes;
AboutHero.defaultProps  = defaultProps;

export default AboutHero;