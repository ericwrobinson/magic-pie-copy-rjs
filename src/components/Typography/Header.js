import React          from "react";
import PropTypes 			from 'prop-types';
import styled         from 'styled-components';
import { Colors } 		from '../Layouts/Colors';


const propTypes = {
	color  : PropTypes.string,
},
defaultProps = {
	color  : Colors.Black,
}

const Wrapper = styled.div``;

const Header = ({ children, color, noPadding, h1, h2, h3 }) => {

	const HeaderH1 = styled.h1`
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

	const HeaderH2 = styled.h2`
	  font-family: Sofia-Pro, sans-serif;
		font-size: 64px;
		line-height: 66px;
		letter-spacing: -3px;
		margin-bottom: 16px;
		color: ${color};
		padding: ${({noPadding}) => noPadding ? 0 : 'inherit'};

		::selection {
		  background: #000;
		  color: white;
		}
		@media only screen and (max-width: 780px) {
			font-size: 52px;
		letter-spacing: -1px;
			line-height: 52px;
		}

		@media only screen and (max-width: 580px) {
			font-size: 42px;
			line-height: 42px;
		}
	`;

	const HeaderH3 = styled.h3`
	  font-family: Sofia-Pro, sans-serif;
		font-size: 36px;
		letter-spacing: -1px;
		margin-bottom: 9px;
		color: ${color};
		padding: ${({noPadding}) => noPadding ? 0 : 'inherit'};

		::selection {
		  background: #000;
		  color: white;
		}

		@media only screen and (max-width: 780px) {
			font-size: 28px;
			letter-spacing: 0;
			line-height: 28px;
		}

		@media only screen and (max-width: 580px) {
			font-size: 24px;
			line-height: 24px;
		}
	`;

	return (
		<Wrapper 
			color={color}>
			{ h1 &&
			<HeaderH1 color={color}>{children}</HeaderH1> }
			{ h2 &&
			<HeaderH2 color={color}>{children}</HeaderH2> }
			{ h3 &&
			<HeaderH3 color={color}>{children}</HeaderH3> }
		</Wrapper>
	);
}

Header.propTypes 	  = propTypes;
Header.defaultProps  = defaultProps;

export default Header;