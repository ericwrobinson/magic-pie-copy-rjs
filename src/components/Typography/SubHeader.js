import React          from "react";
import styled         from 'styled-components';
import PropTypes 			from 'prop-types';
import { Colors } 		from '../Layouts/Colors';

const propTypes = {
	color  : PropTypes.string,
},
defaultProps = {
	color  : Colors.Purple,
}

// const SubHead = styled.h5`
// 	font-size: 40px;
// 	letter-spacing: 4px;
// 	color: ${color};
// `;

const SubHeader = ({ children, color, h1, h2, thin }) => {

	function transformFontSize ( h1, h2 ) {
		if (h1) {
			return 42;
		} else if (h2) {
			return 32;
		} else {
			return 21;
		} 
	}

	function transformFontSizeMobile ( h1, h2 ) {
		if (h1) {
			return 32;
		} else if (h2) {
			return 26;
		} else {
			return 21;
		} 
	}

	function transformFontWeight ( thin ) {
		if (thin) {
			return 500;
		} else {
			return 700;
		} 
	}

	// 	function transformLetterSpacing ( h1 ) {
	// 	if (h1) {
	// 		return 6;
	// 	} else  {
	// 		return 4;
	// 	}
	// }

	const SubHead = styled.h5`
	  font-family: Rift, sans-serif;
		font-size: ${ ({h1, h2}) => transformFontSize(h1, h2)}px;
		letter-spacing: ${ ({h1}) => h1 ? 6 : 3}px;
		color: ${color};
		font-weight: ${ ({thin}) => transformFontWeight(thin)};
		padding: 0;
		margin: 0 0 12px 0;
		text-transform: uppercase;
	  white-space: pre-line;

		::selection {
		  background: #000;
		  color: white;
		}

	  @media only screen and (max-width: 780px) {
			font-size: ${ ({h1, h2}) => transformFontSizeMobile(h1, h2)}px;
	  	letter-spacing: 3px;
	  }
`;

	return (
		<SubHead
			h1={h1}
			h2={h2}
			thin={thin}
			color={color}>
			{children}
		</SubHead>
	);
}

SubHeader.propTypes 	  = propTypes;
SubHeader.defaultProps  = defaultProps;

export default SubHeader;