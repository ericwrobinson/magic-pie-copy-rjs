import React from "react";
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { colors, gradients } from '../../theme'
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
	padding: 62px 0 124px 0;
  min-height: 800px;
  height: 100%;
  background: ${gradients.purpleGradient};
  /* background-color: black; */
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
		min-height: 600px;
	}

	@media only screen and (max-width: 400px) {
	}
`;

const TagWrapper = styled.ul`
	display: flex ;
	align-self: center;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 32px ;
`;

const TagItem = styled.li`
	display: flex;
  padding-right: 16px;
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
	center,
	tags
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

					{tags && tags.length ? (
							<TagWrapper className="taglist">
								{tags.map((tag, index) => {
									console.log('index', (index === tags.length-1))
									return (
										<TagItem key={tag + `tag`}>
											<Body color="white">{tag}</Body>
											{index != (tags.length-1) && 
												<span style={{paddingLeft: '16px', color: colors.orange}}> | </span>
											}
										</TagItem>
									)
								})}
							</TagWrapper>
					) : null}

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