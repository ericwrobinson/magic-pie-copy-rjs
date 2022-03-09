import React from "react";
// import PropTypes from 'prop-types';
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

const ContentWrapper = styled.div`
	display: flex;
	background-color: white;
  flex-direction: column;
	padding: 44px;
	text-align: center;
  align-items: center;
`;

const SecondWrapper = styled.div`
  min-height: 450px;
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

const PortfolioServices = ({ children, headerTitle, subtitle, buttonTitle }) => {
	return (
		<Wrapper>
			<SecondWrapper>
				<SiteContent center>
					<ContentWrapper>
						<Header h2 color='black'>
							{headerTitle}
			      </Header>
			      <Body paddingBottom>
			      	{subtitle}
			      </Body>
			      <ButtonPrimary 
			      	flex
			      	linkTo={'/services/'}>{buttonTitle}</ButtonPrimary>
					</ContentWrapper>
				</SiteContent>
			</SecondWrapper>
		</Wrapper>
	);
}

PortfolioServices.propTypes 	  = propTypes;
PortfolioServices.defaultProps  = defaultProps;

export default PortfolioServices;