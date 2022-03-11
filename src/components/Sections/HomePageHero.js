import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

import curvesPurpleBottom from '../../img/curves/curves-purple-bottom.svg';

const propTypes = {
	linkTo: PropTypes.string,
},
defaultProps = {
	linkTo: "#"
}

const Wrapper = styled.div``;

const WhyWrapper = styled.div`
  height: 70vh;
	min-height: 650px;
  background-color: white;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
	margin-bottom: 128px;

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

const HomePageHero = ({ children, headerTitle, subtitle, buttonTitle, linkTo }) => {
	return (
		<Wrapper>
			<WhyWrapper>
				<SiteContent center>
					<Text align='center'>{headerTitle}</Text>
		      <Body 
		      	paddingBottom
		      	color='black'>
		      	{subtitle}
		      </Body>
		      <ButtonPrimary 
		      	inverted 
		      	linkTo={linkTo}>{buttonTitle}</ButtonPrimary>
				</SiteContent>
			</WhyWrapper>
		</Wrapper>
	);
}

HomePageHero.propTypes 	  = propTypes;
HomePageHero.defaultProps  = defaultProps;

export default HomePageHero;