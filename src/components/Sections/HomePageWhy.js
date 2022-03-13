import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

import questionMark from '../../img/curves/question-mark-bubbble.svg';

const propTypes = {
	linkTo: PropTypes.string,
},
defaultProps = {
	linkTo: "#"
}

const ImageWrapper = styled.img`
	width: 33.33%;
	text-align: right;
	float: right;

	@media only screen and (max-width: 780px) {
	  width: 60%;
	  margin: 0 auto;
    margin-bottom: 44px;
	}
`;

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
	display: flex;
	background-color: white;
  justify-content: space-between;

	@media only screen and (max-width: 780px) {
	  flex-direction: column;
	}
`;

const HalfWrapper = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;

  @media only screen and (max-width: 780px) {
	  width: 100%;
	}
`;

const WhyWrapper = styled.div`
  min-height: 40vh;
	margin-top: 268px;
	margin-bottom: 128px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

	::selection {
	  background: #000;
	  color: black;
	};

  @media only screen and (max-width: 780px) {

	}

	@media only screen and (max-width: 580px) {

	}

	@media only screen and (max-width: 400px) {

	}

`;

const HomePageWhy = ({ children, headerTitle, subtitle, buttonTitle, linkTo }) => {
	return (
		<Wrapper>
			<WhyWrapper>
				<SiteContent>
					<ContentWrapper>
						<ImageWrapper src={questionMark} />
						<HalfWrapper>
							<Header h2 color='black'>
								{headerTitle}
				      </Header>
				      <Body paddingBottom>
				      	{subtitle}
				      </Body>
				      <ButtonPrimary 
				      	flexBox
				      	linkTo={linkTo}>{buttonTitle}</ButtonPrimary>
						</HalfWrapper>
					</ContentWrapper>
				</SiteContent>
			</WhyWrapper>
		</Wrapper>
	);
}

HomePageWhy.propTypes 	  = propTypes;
HomePageWhy.defaultProps  = defaultProps;

export default HomePageWhy;