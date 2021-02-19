import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body 
			 } from '../Typography'
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

import curvesBlackTop from '../../img/curves/curves-black-top.svg';

import webIcon from '../../img/icons/magic-pie-copy-icon-web.svg';
import blogIcon from '../../img/icons/magic-pie-copy-icon-blogs.svg';
import marketingIcon from '../../img/icons/magic-pie-copy-icon-marketing.svg';
import videoIcon from '../../img/icons/magic-pie-copy-icon-video.svg';

const propTypes = {
	linkTo: PropTypes.string,
},
defaultProps = {
	linkTo: "#"
}

const Wrapper = styled.div``;

const ServiceRowWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 44px;
	margin-bottom: 88px;
	flex-wrap: wrap;
`;

const Divider = styled.img`
	width: 100%;
	transform: rotate(180deg);
  margin-bottom: -10px;
`;

const ServiceWrapper = styled.div`
	width:  25%;
	padding-left: 5px;
	padding-right: 5px;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 780px) {
		width: 50%;
		margin-bottom: 16px;
	}

	@media only screen and (max-width: 580px) {
		width: 100%;
	}
`;

const ServiceImage = styled.img`
	max-width: 100px;
	height: 100px;
	margin: 0 auto;
`;

const ServicesWrapper = styled.div`
	height: 55vh;
  min-height: 800px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding-top: 64px;
  padding-bottom: 64px;

	::selection {
	  background: #000;
	  color: white;
	};

  @media only screen and (max-width: 780px) {
		height: 100%;
	}

	@media only screen and (max-width: 580px) {
		height: 100%;

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
	subtitle, 
	buttonTitle,
	linkTo,
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
			<Divider src={curvesBlackTop} />
			<ServicesWrapper>

				<SiteContent center>
					<Header h2 color='white'>
						{headerTitle}
		      </Header>
		      <Body 
			      maxWidth 
			      center 
			      paddingBottom>
		      	{subtitle}
		      </Body>

		      <ServiceRowWrapper>
			      <ServiceWrapper> 
			      	<ServiceImage src={webIcon}/>
			      	<Header h4 color='white'>
								{serviceTitle1}
				      </Header>
				      <Body>
				      	{serviceSubtitle1}
				      </Body>
			      </ServiceWrapper>

			      <ServiceWrapper> 

			      	<ServiceImage src={blogIcon}/>
			      	<Header h4 color='white'>
								{serviceTitle2}
				      </Header>
				      <Body>
				      	{serviceSubtitle2}
				      </Body>
			      </ServiceWrapper>

			      <ServiceWrapper> 

			      	<ServiceImage src={marketingIcon}/>
			      	<Header h4 color='white'>
								{serviceTitle3}
				      </Header>
				      <Body>
				      	{serviceSubtitle3}
				      </Body>
			      </ServiceWrapper>

				    <ServiceWrapper> 

			      	<ServiceImage src={videoIcon}/>
				    	<Header h4 color='white'>
								{serviceTitle4}
				      </Header>
				      <Body>
				      	{serviceSubtitle4}
				      </Body>
				    </ServiceWrapper>
		      </ServiceRowWrapper>

		      <ButtonPrimary 
		      	inverted
		      	linkTo={linkTo}>{buttonTitle}</ButtonPrimary>
				</SiteContent>
			</ServicesWrapper>
		</Wrapper>
	);
}

HomePageServices.propTypes 	  = propTypes;
HomePageServices.defaultProps  = defaultProps;

export default HomePageServices;