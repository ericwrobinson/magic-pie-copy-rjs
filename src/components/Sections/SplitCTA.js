import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

import questionMark from '../../img/curves/question-mark-bubbble.svg';

const propTypes = {
	linkTo1: PropTypes.string,
	linkTo2: PropTypes.string,
},
defaultProps = {
	linkTo1: "#",
	linkTo2: "#"
};

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
	display: flex;
	width: 100%;
	background-color: white;
  justify-content: space-between;
	padding: 44px;

	@media only screen and (max-width: 780px) {
  	flex-direction: column;
	}
`;

const HalfWrapper = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  margin-left: 1.5%;
  margin-right: 1.5%;
  background-color: white;

  @media only screen and (max-width: 780px) {
	  width: 100%;
	  margin-bottom: 42px;
	  margin-left: 0;
	  margin-right: 0;
	}
`;

const WhyWrapper = styled.div`
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

	::selection {
	  background: #000;
	  color: black;
	};

  @media only screen and (max-width: 780px) {
	  flex-direction: row;
	}

	@media only screen and (max-width: 580px) {

	}

	@media only screen and (max-width: 400px) {

	}

`;

const SplitCTA = ({ 
	headerTitle1, 
	subtitle1, 
	buttonTitle1, 
	linkTo1,
	headerTitle2, 
	subtitle2, 
	buttonTitle2,
	linkTo2
}) => {
	return (
		<Wrapper>
			<WhyWrapper>
				<SiteContent>
					<ContentWrapper>
						<HalfWrapper>
							<Header h3 color='black'>
								{headerTitle1}
				      </Header>
				      <Body paddingBottom>
				      	{subtitle1}
				      </Body>
				      <ButtonPrimary 
				      	flexBox
				      	linkTo={linkTo1}>{buttonTitle1}</ButtonPrimary>
						</HalfWrapper>
						<HalfWrapper>
							<Header h3 color='black'>
								{headerTitle2}
				      </Header>
				      <Body paddingBottom>
				      	{subtitle2}
				      </Body>
				      <ButtonPrimary 
				      	flexBox
				      	linkTo={linkTo2}>{buttonTitle2}</ButtonPrimary>
						</HalfWrapper>
					</ContentWrapper>
				</SiteContent>
			</WhyWrapper>
		</Wrapper>
	);
}

SplitCTA.propTypes 	  = propTypes;
SplitCTA.defaultProps  = defaultProps;

export default SplitCTA;