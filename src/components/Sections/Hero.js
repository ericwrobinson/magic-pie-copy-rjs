import React          from "react";
import PropTypes 			from 'prop-types';
import styled         from 'styled-components';


const propTypes = {
},
defaultProps = {
}

const Wrapper = styled.div``;

const Hero = ({ children, color, noPadding, h1, h2, h3 }) => {

	const HeroWrapper = styled.div`
	  font-family: Sofia-Pro, sans-serif;
		letter-spacing: -2px;
		font-size: 92px;
		margin-bottom: 18px;
		color: ${color};
		line-height: 82px;
		padding: ${({noPadding}) => noPadding ? 0 : 'inherit'};
	  white-space: pre-line;

		::selection {
		  background: #000;
		  color: white;
		};
	  @media only screen and (max-width: 780px) {
			font-size: 72px;
			line-height: 72px;
		}

		@media only screen and (max-width: 580px) {
			font-size: 52px;
			line-height: 52px;
		}

		@media only screen and (max-width: 400px) {
			font-size: 42px;
			line-height: 42px;
		}

	`;

	return (
		<Wrapper 
			color={color}>
			<HeroWrapper noPadding={noPadding} color={color}>{children}</HeroWrapper>
		</Wrapper>
	);
}

Hero.propTypes 	  = propTypes;
Hero.defaultProps  = defaultProps;

export default Hero;