import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body 
			 } from '../Typography'
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

const propTypes = {
},
defaultProps = {
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div``;

const ImageRowWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 44px;
	margin-bottom: 88px;
`;

const ServiceWrapper = styled.div`
	width:  25%;
	margin-left: 5px;
	margin-right: 5px;
	justify-content: center;
	align-items: center;
`;

const ServiceImage = styled.div`
	max-width: 150px;
	height: 50px;
	margin: 0 auto;
`;

const ServicesWrapper = styled.div`
  min-height: 600px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  height: 100%;
  padding-top: 64px;
  padding-bottom: 64px;

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

// <WorkImage src={workLogo1}/>
// <WorkImage src={workLogo2}/>
// <WorkImage src={workLogo3}/>
// <WorkImage src={workLogo4}/>

const HomePageServices = ({ 
	children, 
	headerTitle, 
	subitle, 
	buttonTitle,
	serviceImage1,
	serviceImage2,
	serviceImage3,
	serviceImage4,
	serviceTitle1,
	serviceTitle2,
	serviceTitle3,
	serviceTitle4,
	serviceSubtitle1,
	serviceSubtitle2,
	serviceSubtitle3,
	serviceSubtitle4,
}) => {

	return (
		<Wrapper>
			<ServicesWrapper>
				<SiteContent center>
					<Header h2 color='white'>
						{headerTitle}
		      </Header>
		      <Body paddingBottom>
		      	{subitle}
		      </Body>
		      <ImageRowWrapper>
			      <ServiceWrapper> 
			      	<ServiceImage style={{
			          backgroundImage: `url(${serviceImage1})`
			        }}>
			      	</ServiceImage>
			      	<Header h4 color='white'>
								{serviceTitle1}
				      </Header>
				      <Body>
				      	{serviceSubtitle1}
				      </Body>
			      </ServiceWrapper>

			      <ServiceWrapper> 
			      	<ServiceImage style={{
			          backgroundImage: `url(${serviceImage2})`
			        }}>
			      	</ServiceImage>
			      	<Header h4 color='white'>
								{serviceTitle2}
				      </Header>
				      <Body>
				      	{serviceSubtitle2}
				      </Body>
			      </ServiceWrapper>

			      <ServiceWrapper> 
			      	<ServiceImage style={{
			          backgroundImage: `url(${serviceImage3})`
			        }}>
			      	</ServiceImage>
			      	<Header h4 color='white'>
								{serviceTitle3}
				      </Header>
				      <Body>
				      	{serviceSubtitle3}
				      </Body>
			      </ServiceWrapper>

				    <ServiceWrapper> 
				    	<ServiceImage style={{
				        backgroundImage: `url(${serviceImage4})`
				      }}>
				    	</ServiceImage>
				    	<Header h4 color='white'>
								{serviceTitle4}
				      </Header>
				      <Body>
				      	{serviceSubtitle4}
				      </Body>
				    </ServiceWrapper>
		      </ImageRowWrapper>

		      <ButtonPrimary 
		      	inverted
		      	linkTo={'#'}>{buttonTitle}</ButtonPrimary>
				</SiteContent>
			</ServicesWrapper>
		</Wrapper>
	);
}

HomePageServices.propTypes 	  = propTypes;
HomePageServices.defaultProps  = defaultProps;

export default HomePageServices;