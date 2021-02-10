import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

import questionMark from '../../img/curves/question-mark-bubbble.svg';

const propTypes = {
},
defaultProps = {
}

const Divider = styled.img`
	width: 45%;
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
	padding: 44px;

	@media only screen and (max-width: 780px) {
	  flex-direction: column-reverse;
	}
`;

const HalfWrapper = styled.div`
	display: flex;
  flex-direction: column;
  width: 50%;

  @media only screen and (max-width: 780px) {
	  width: 100%;
	}
`;

const WhyWrapper = styled.div`
  min-height: 40vh;
  padding: 20px;
  background-color: #F2F2F2;
  color: white;
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

const HomePageWhy = ({ children, headerTitle, subitle, buttonTitle }) => {
	return (
		<Wrapper>
			<WhyWrapper>
				<SiteContent>
					<ContentWrapper>
						<HalfWrapper>
							<Header h2 color='black'>
								{headerTitle}
				      </Header>
				      <Body paddingBottom>
				      	{subitle}
				      </Body>
				      <ButtonPrimary 
				      	flex
				      	linkTo={'#'}>{buttonTitle}</ButtonPrimary>
						</HalfWrapper>
							<Divider src={questionMark} />
					</ContentWrapper>
				</SiteContent>
			</WhyWrapper>
		</Wrapper>
	);
}

HomePageWhy.propTypes 	  = propTypes;
HomePageWhy.defaultProps  = defaultProps;

export default HomePageWhy;