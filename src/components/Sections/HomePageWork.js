import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text,
				 Body 
			 } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';

import { colors } from '../../theme';
import workIcon from '../../img/curves/magic-pie-work.svg';

const propTypes = {
	linkTo: PropTypes.string,
},
defaultProps = {
	linkTo: "#"
}

const Wrapper = styled.div``;

const ImageRowWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 44px;
	margin-bottom: 44px;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const WorkImage = styled.div`
	width:  20%;
	height: 90px;
	background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  background-position: center;

	@media only screen and (max-width: 780px) {
		width:  40%;
		margin: 20px;
	}

	@media only screen and (max-width: 580px) {
		margin: 20px;
		width:  60%;
		margin: 0 auto;
		margin-bottom: 20px;
	}

`;

const WorkWrapper = styled.div`
	min-height: 50vh;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding-top: 64px;
  margin-bottom: 128px;

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

const Divider = styled.img`
	width: 100%;
	margin-bottom: -8px;

	@media only screen and (max-width: 580px) {
		min-width:  100.1%;
	}
`;

// <WorkImage src={workLogo1}/>
// <WorkImage src={workLogo2}/>
// <WorkImage src={workLogo3}/>
// <WorkImage src={workLogo4}/>

const HomePageWork = ({ 
	// children, 
	headerTitle, 
	subtitle, 
	buttonTitle,
	workLogo1,
	workLogo2,
	workLogo3,
	workLogo4,
	linkTo
}) => {

	return (
		<Wrapper>
			{/* <Divider src={curvesPurpleBottom} /> */}

			<WorkWrapper>
				<SiteContent center>
					<img width="110px" src={workIcon}/>
					<Text h2 size="xlarge" align='center' color={colors.white}>
						{headerTitle}
		      </Text>
		      <Body 
						maxWidth='680px'  
			      center 
			      paddingBottom
						color={colors.white}>
		      	{subtitle}
		      </Body>
		      <ImageRowWrapper>
			      <WorkImage style={{
			          backgroundImage: `url(${workLogo1})`
			        }}>
			      </WorkImage>
			      <WorkImage style={{
			          backgroundImage: `url(${workLogo2})`
			        }}
			      ></WorkImage>
			      <WorkImage style={{
			          backgroundImage: `url(${workLogo3})`
			        }}
			      ></WorkImage>
				    <WorkImage style={{
			        backgroundImage: `url(${workLogo4})`
			      }}
			    ></WorkImage>
		      </ImageRowWrapper>

		      <ButtonPrimary 
		      	linkTo={linkTo}>{buttonTitle}</ButtonPrimary>
				</SiteContent>
			</WorkWrapper>
		</Wrapper>
	);
}

HomePageWork.propTypes 	  = propTypes;
HomePageWork.defaultProps  = defaultProps;

export default HomePageWork;