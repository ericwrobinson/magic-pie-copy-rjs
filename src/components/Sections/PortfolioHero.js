import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

import homeHero from '../../img/magic-pie-copy-home-hero.svg';
import curvesWhiteBottom from '../../img/curves/curves-white-bottom.svg';

const propTypes = {
},
defaultProps = {
}

const Wrapper = styled.div`
`;

const ContentWrapper = styled.div``;

const Divider = styled.img`
	position: absolute;
  z-index: 2;
	width: 100%;
	bottom: -5px;
`;

const HeaderWrapper = styled.div`
	position: relative;
  min-height: 500px;
  height: 40vh;
  background-color: ${({ inverted }) => inverted ? 'black' : '#f2f2f2' };
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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

const BackgroundOverlay = styled.div`
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const PortfolioHero = ({ 
	children, 
	inverted, 
	headerTitle, 
	featuredimage,
	subtitle, 
	buttonTitle, 
	divider,
	maxWidth,
	center
	}) => {

	let isInverted = featuredimage ? true : inverted;


	return (
		<Wrapper inverted={featuredimage ? true : inverted}>
			<HeaderWrapper
				style={{
	          
	          	backgroundImage: `url(${!featuredimage ? null : featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage})`
	        }}
				featuredimage={featuredimage}
				inverted={isInverted}>
				<SiteContent
					center>
					<Header 
						h1
						color={isInverted ? '#f2f2f2' : 'black' }>
						{headerTitle}
		      </Header>

		      <Body 
		      	paddingBottom
		      	maxWidth={maxWidth}
		      	center={center}
		      	color={isInverted ? '#f2f2f2' : 'black' }>
		      	{subtitle}
		      </Body>

		      { buttonTitle &&
			      <ButtonPrimary 
			      	inverted={isInverted} 
			      	linkTo={'#'}>{buttonTitle}</ButtonPrimary>
		      }

				</SiteContent>
					{ featuredimage && 
					<BackgroundOverlay/>
				}
			{ divider && 
				<Divider src={curvesWhiteBottom} />
			}
			</HeaderWrapper>
			
			
		</Wrapper>
	);
}

PortfolioHero.propTypes 	  = propTypes;
PortfolioHero.defaultProps  = defaultProps;

export default PortfolioHero;