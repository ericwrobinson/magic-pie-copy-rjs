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
	linkTo: PropTypes.string,
},
defaultProps = {
	linkTo: "#"
}

const Wrapper = styled.div`
  background-color: ${({ inverted }) => inverted ? 'black' : '#f2f2f2' };

`;

const Subheading = styled.div`
	text-transform: uppercase;
	font-six: 18px;
	letter-spacing: 3px;
	font-family: sofia-pro, sans-serif;
	font-weight: bold;
	padding-bottom: 18px;
	color: ${({ inverted }) => inverted ? 'rgba(255, 255, 255, .4)' : 'rgba(0, 0, 0, .4)' };
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
	min-height: 200px;
	background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  background-position: center;
	margin: 0 auto;

	@media only screen and (max-width: 980px) {
		width:  50%;
	}

	@media only screen and (max-width: 580px) {
		width:  60%;
		margin: 0 auto;
	}

`;

const Divider = styled.img`
	width: 180%;
	transform: ${({ inverted }) => inverted ? null : 'rotate(180deg)' };
	margin-bottom: -10px;
`;

const HeroWrapper = styled.div`
  min-height: ${({ minHeight }) => minHeight ? minHeight : '600px'};
  height: ${({ height }) => height ? height : '40vh'};
  background-color: ${({ inverted, backgroundColor }) => backgroundColor ? backgroundColor : inverted ? 'black' : '#f2f2f2' };
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
	center,
	minHeight,
	height,
	backgroundColor,
	h2,
	linkTo,
	image,
	subheading
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
					{ subheading &&
						<Subheading
							inverted={inverted}>
							{subheading}
						</Subheading>
					}
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
			</HeroWrapper>
			{ image && 
				<Image style={{
          backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`
        }}/>
      }
			{ divider && 
				<Divider 
					inverted={inverted} 
					src={inverted ? curvesWhiteBottom : curvesBlackTop} />
			}
		</Wrapper>
	);
}

Hero.propTypes 	  = propTypes;
Hero.defaultProps  = defaultProps;

export default Hero;