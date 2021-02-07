import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

const propTypes = {
},
defaultProps = {
}

const Wrapper = styled.div``;
const WhyImage = styled.div`
	width: 50%;
	height: 100%;
`;

const ContentWrapper = styled.div`
	display: flex;
  flex-direction: column;
`;

const WhyWrapper = styled.div`
  height: 80vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

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

const HomePageWhy = ({ children, headerTitle, subitle, buttonTitle, image }) => {
	return (
		<Wrapper>
			<WhyWrapper>
				<SiteContent column>
					<ContentWrapper>
					<Header h2 color='white'>
						{headerTitle}
		      </Header>
		      <Body paddingBottom>
		      	{subitle}
		      </Body>
		      <ButtonPrimary 
		      	inverted 
		      	linkTo={'#'}>{buttonTitle}</ButtonPrimary>
					</ContentWrapper>
					<ContentWrapper>
						<WhyImage style={{
			          backgroundImage: `url(${image})`
			        }}
			      ></WhyImage>
					</ContentWrapper>
				</SiteContent>
			</WhyWrapper>
		</Wrapper>
	);
}

HomePageWhy.propTypes 	  = propTypes;
HomePageWhy.defaultProps  = defaultProps;

export default HomePageWhy;