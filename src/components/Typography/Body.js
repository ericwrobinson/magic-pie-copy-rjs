import React          from "react";
import PropTypes 			from 'prop-types';
import styled         from 'styled-components';
import { Colors } 		from '../Layouts/Colors';


const propTypes = {
	color  : PropTypes.string,
	fontSize : PropTypes.number,
	lineHeight : PropTypes.number,
},
defaultProps = {
	color  	 : Colors.Grey,
	fontSize : 21,
	lineHeight : 36,
}

	function _lineHeightAdjust ( tight, lineHeight ) {
		if (tight) {
			return 20;
		} else if (lineHeight) {
			return lineHeight;
		} else {
			return 36;
		}
	}

const Wrapper = styled.div`
	max-width: ${({ maxWidth }) =>  maxWidth ? 875 : null}px;
	padding-bottom: ${({ paddingBottom }) => paddingBottom ? 44 : 0}px;
`;

const BodyCopy = styled.p`
	  font-family: Sofia-Pro, sans-serif;
		font-size: ${({fontSize}) => fontSize}px;
		opacity: ${({opacity}) => opacity ? 1 : .8};
		line-height: ${({tight, lineHeight}) => _lineHeightAdjust(tight, lineHeight)}px;
		color: ${({color}) => color};
		font-weight: ${({bold}) => bold ? 700 : 400};
	  white-space: pre-line;

		::selection {
		  background: #000;
		  color: white;
		}

		@media only screen and (max-width: 780px) {

		}
	`;



const Body = ({ fontSize, children, color, maxWidth, bold, paddingBottom, style, opacity, tight, lineHeight }) => {

	

	

	return (
		<Wrapper
			maxWidth={maxWidth}
			paddingBottom={paddingBottom}
			style={style}>
			<BodyCopy
				fontSize={fontSize}
				opacity={opacity}
				bold={bold}
				color={color}
				tight={tight}
				lineHeight={lineHeight}>{children}</BodyCopy> 
		</Wrapper>
	);
}

Body.propTypes 	  = propTypes;
Body.defaultProps  = defaultProps;

export default Body;