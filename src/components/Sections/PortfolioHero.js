import React from "react";
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

import curvesWhiteBottom from '../../img/curves/curves-white-bottom.svg';

const propTypes = {
},
defaultProps = {
}

const Wrapper = styled.div``;

const Divider = styled.img`
	position: absolute;
  z-index: 2;
	width: 100%;
	bottom: -5px;

	@media only screen and (max-width: 580px) {
		min-width:  100.1%;
	}
`;

const HeaderWrapper = styled.div`
	position: relative;
	padding: 60px 0 120px 0;
  min-height: 600px;
  height: 100%;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #f2f2f2;
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
		padding: 30px 0 60px 0;
		min-height: 500px;
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
	// children, 
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
			<HeaderWrapper>
				<SiteContent
					center>
					<Header 
						h1
						color={'#f2f2f2'}>
						{headerTitle}
		      </Header>

		      <Body 
		      	paddingBottom
		      	maxWidth={maxWidth}
		      	center={center}
		      	color={'#f2f2f2'}>
		      	{subtitle}
		      </Body>

		      { buttonTitle &&
			      <ButtonPrimary 
			      	// inverted={isInverted} 
			      	linkTo={'#'}>{buttonTitle}</ButtonPrimary>
		      }

				</SiteContent>
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