import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header,
				 Body } from '../Typography';
import { ButtonPrimary } from '../Buttons';
import { SiteContent } from '../Layouts';
import { colors, gradients } from "../../theme";

const propTypes = {
	linkTo1: PropTypes.string,
	linkTo2: PropTypes.string,
},
defaultProps = {
	linkTo1: "#",
	linkTo2: "#"
};

const ContentWrapper = styled.div`
	display: flex;
	width: 100%;
	background-color: white;
  justify-content: space-between;

	@media only screen and (max-width: 780px) {
  	flex-direction: column;
		padding: 16px;
	}
`;

const HalfWrapper = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  width: 49%;
	border-radius: 16px;
	padding: 32px;
  background: ${({purple}) => purple ? gradients.purpleGradient : gradients.orangeRed135};

  @media only screen and (max-width: 780px) {
	  width: 100%;
	  margin-bottom: 42px;
	  margin-left: 0;
	  margin-right: 0;
	}
`;

const SplitCTA = ({ 
	headerTitle1, 
	subtitle1, 
	buttonTitle1, 
	linkTo1,
	headerTitle2, 
	subtitle2, 
	buttonTitle2,
	linkTo2
}) => {
	return (
				<SiteContent>
					<ContentWrapper>
						<HalfWrapper >
							<Header h3 color={colors.white}>
								{headerTitle1}
				      </Header>
				      <Body color={colors.white} paddingBottom>
				      	{subtitle1}
				      </Body>
				      <ButtonPrimary 
				      	flexBox
								darkPurple
								hoverWhite
				      	linkTo={linkTo1}>{buttonTitle1}</ButtonPrimary>
						</HalfWrapper>

						<HalfWrapper purple>
							<Header h3 color={colors.white}>
								{headerTitle2}
				      </Header>
				      <Body color={colors.white} paddingBottom>
				      	{subtitle2}
				      </Body>
				      <ButtonPrimary 
				      	flexBox
								hoverWhite
				      	linkTo={linkTo2}>{buttonTitle2}</ButtonPrimary>
						</HalfWrapper>

					</ContentWrapper>
				</SiteContent>
	);
}

SplitCTA.propTypes 	  = propTypes;
SplitCTA.defaultProps  = defaultProps;

export default SplitCTA;