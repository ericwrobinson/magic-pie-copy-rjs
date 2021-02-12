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

const HeaderH1 = styled.h1`
  font-family: Gastromond, serif;
	letter-spacing: 0px;
	font-size: 74px;
	margin-bottom: 30px;
	color: ${({color}) => color};
	line-height: 72px;
	padding: ${({noPadding}) => noPadding ? 0 : 'inherit'};
  white-space: pre-line;

	::selection {
	  background: #000;
	  color: white;
	};
  @media only screen and (max-width: 780px) {
		font-size: 68px;
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
  font-family: Gastromond, serif;
	font-size: 52px;
	line-height: 58px;
	letter-spacing: -1.25px;
	margin-bottom: 26px;
	color: ${({color}) => color};
	padding: ${({noPadding}) => noPadding ? 0 : 'inherit'};
	white-space: pre-line;

	::selection {
	  background: #000;
	  color: white;
	}
	@media only screen and (max-width: 780px) {
		font-size: 52px;
		letter-spacing: -1px;
		line-height: 56px;
	}

	@media only screen and (max-width: 580px) {
		font-size: 36px;
		line-height: 40px;
	}
`;

const HeaderH3 = styled.h3`
  font-family: Gastromond, serif;
	font-size: 36px;
	letter-spacing: -1px;
	margin-bottom: 9px;
	color: ${({color}) => color};
	padding: ${({noPadding}) => noPadding ? 0 : 'inherit'};
	white-space: pre-line;

	::selection {
	  background: #000;
	  color: white;
	}

	@media only screen and (max-width: 780px) {
		font-size: 28px;
		letter-spacing: 0;
		line-height: 32px;
	}

	@media only screen and (max-width: 580px) {
		font-size: 24px;
		line-height: 28px;
	}
`;

const HeaderH4 = styled.h4`
  font-family: Gastromond, serif;
	font-size: 28px;
	line-height: 33px;
	letter-spacing: -1px;
	margin-bottom: 9px;
	color: ${({color}) => color};
	padding: ${({noPadding}) => noPadding ? 0 : 'inherit'};
	white-space: pre-line;

	::selection {
	  background: #000;
	  color: white;
	}

	@media only screen and (max-width: 780px) {
		font-size: 24px;
		letter-spacing: 0;
		line-height: 28px;
	}

	@media only screen and (max-width: 580px) {
		font-size: 20px;
		line-height: 24px;
	}
`;

const Header = ({ children, color, noPadding, h1, h2, h3, h4 }) => {

	return (
		<Wrapper>
			{ h1 &&
			<HeaderH1 color={color}>{children}</HeaderH1> }
			{ h2 &&
			<HeaderH2 color={color}>{children}</HeaderH2> }
			{ h3 &&
			<HeaderH3 color={color}>{children}</HeaderH3> }
			{ h4 &&
			<HeaderH4 color={color}>{children}</HeaderH4> }
		</Wrapper>
	);
}

Header.propTypes 	  = propTypes;
Header.defaultProps  = defaultProps;

export default Header;