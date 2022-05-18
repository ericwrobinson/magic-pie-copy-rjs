import React from "react";
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				//  Body 
				} from '../Typography';
import { NewLink } from '../Buttons';
import { SiteContent } from '../Layouts';
import { colors } from "../../theme";

const propTypes = {
},
defaultProps = {
}

const ContentWrapper = styled.div`
	display: flex;
	width: 100%;
  justify-content: space-between;

	@media only screen and (max-width: 980px) {
  	flex-direction: column;
	}
`;

const ThirdWrapper = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 31%;
  min-height: 400px;
  padding: 50px 0px;
  background-color: white;
  text-align: center;
  align-items: center;
	border: 3px solid ${colors.orange};
	border-radius: 16px;

  @media only screen and (max-width: 980px) {
	  width: 100%;
	  padding: 20px 0px;
    min-height: 300px;
	  margin-bottom: 42px;
	}
`;

const Image = styled.div`
	width:  80%;
	height: 120px;
	background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  background-position: center;

	@media only screen and (max-width: 980px) {
		width:  80%;
		height: 120px;
		margin: 20px;
	}

	@media only screen and (max-width: 580px) {
		margin: 20px;
		width:  80%;
		margin: 0 auto;
		margin-bottom: 20px;
	}

`;

const InnerWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
	width: 100%;

	::selection {
	  background: #000;
	  color: black;
	};

  @media only screen and (max-width: 980px) {
	  flex-direction: row;
	}

	@media only screen and (max-width: 580px) {

	}

	@media only screen and (max-width: 400px) {

	}

`;

const ThreeCol = ({ 
	image1,
	headerTitle1, 
	buttonTitle1,
	linkTo1,
	image2, 
	headerTitle2, 
	buttonTitle2,
	linkTo2, 
	image3,
	headerTitle3, 
	buttonTitle3,
	linkTo3 
}) => {

	return (
			<SiteContent>
				<InnerWrapper>
					<ContentWrapper>
						<ThirdWrapper>
							<Image style={{
			          backgroundImage: `url(${!!image1.childImageSharp ? image1.childImageSharp.fluid.src : image1})`
			        }}/>
							<Header h4 color='black'>
								{headerTitle1}
				      </Header>
				      <NewLink 
				      	external
				      	href={linkTo1}>{buttonTitle1}</NewLink>
						</ThirdWrapper>
						<ThirdWrapper>
							<Image style={{
			          backgroundImage: `url(${!!image2.childImageSharp ? image2.childImageSharp.fluid.src : image2})`
			        }}/>
							<Header h4 color='black'>
								{headerTitle2}
				      </Header>
				      <NewLink 
				      	external
				      	href={linkTo2}>{buttonTitle2}</NewLink>
						</ThirdWrapper>
						<ThirdWrapper>
							<Image style={{
			          backgroundImage: `url(${!!image3.childImageSharp ? image3.childImageSharp.fluid.src : image3})`
			        }}/>
							<Header h4 color='black'>
								{headerTitle3}
				      </Header>
				      <NewLink 
				      	external
				      	href={linkTo3}>{buttonTitle3}</NewLink>
						</ThirdWrapper>
					</ContentWrapper>
			</InnerWrapper>
			</SiteContent>
	);
}

ThreeCol.propTypes 	  = propTypes;
ThreeCol.defaultProps  = defaultProps;

export default ThreeCol;