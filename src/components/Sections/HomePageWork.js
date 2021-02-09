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

const WorkImage = styled.div`
	width:  25%;
	height: 90px;
	margin-left: 25px;
	margin-right: 25px;
	background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  background-position: center;
`;

const WorkWrapper = styled.div`
  height: 40vh;
  min-height: 600px;
  background-color: white;
  color: black;
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

const HomePageWork = ({ 
	children, 
	headerTitle, 
	subitle, 
	buttonTitle,
	workLogo1,
	workLogo2,
	workLogo3,
	workLogo4
}) => {

	return (
		<Wrapper>
			<WorkWrapper>
				<SiteContent center>
					<Header h2 color='black'>
						{headerTitle}
		      </Header>
		      <Body paddingBottom>
		      	{subitle}
		      </Body>
		      <ImageRowWrapper>
			      <WorkImage style={{
			          backgroundImage: `url(${workLogo1})`
			        }}
			      ></WorkImage>
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
		      	linkTo={'#'}>{buttonTitle}</ButtonPrimary>
				</SiteContent>
			</WorkWrapper>
		</Wrapper>
	);
}

HomePageWork.propTypes 	  = propTypes;
HomePageWork.defaultProps  = defaultProps;

export default HomePageWork;