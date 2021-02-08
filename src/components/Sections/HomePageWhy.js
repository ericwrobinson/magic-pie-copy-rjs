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
	height: 400px;
	width: 400px;
`;

const ContentWrapper = styled.div`
	display: flex;
	background-color: white;
	padding: 44px;
`;

const HalfWrapper = styled.div`
	display: flex;
  flex-direction: column;
`;

const WhyWrapper = styled.div`
  height: 40vh;
  min-height: 600px;
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

const HomePageWhy = ({ children, headerTitle, subitle, buttonTitle, image }) => {
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
						<HalfWrapper>
							<WhyImage style={{
				          backgroundImage: `url(${image})`
				        }}
				      ></WhyImage>
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