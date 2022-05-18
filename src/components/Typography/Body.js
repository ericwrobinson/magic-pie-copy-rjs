import React          from "react";
import PropTypes 			from 'prop-types';
import styled         from 'styled-components';
import { colors } 		from '../../theme';


const propTypes = {
	color  : PropTypes.string,
	fontSize : PropTypes.number,
	lineHeight : PropTypes.number,
},
defaultProps = {
	color  	 : colors.darkGray,
	fontSize : 21,
	lineHeight : 31,
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
	max-width: ${({ maxWidth }) =>  maxWidth ?? null};
	width: ${({ width }) =>  width ? width : null }; 
	padding-bottom: ${({ paddingBottom }) => paddingBottom ? 44 : 0}px;
	margin: ${({ center }) =>  center ? '0 auto' : null};
`;

const BodyCopy = styled.p`
  font-family: Sofia-Pro, sans-serif;
	font-size: ${({ fontSize }) => fontSize}px;
	/* opacity: 1; */
	opacity: ${({ opacity }) => opacity ? opacity : 1};
	line-height: ${({ tight, lineHeight }) => _lineHeightAdjust(tight, lineHeight)}px;
	color: ${({ color }) => color};
	font-weight: ${({ bold }) => bold ? 700 : 400};
  white-space: pre-line;
	text-align: ${({ align }) => align ?? null};
	text-transform: ${({uppercase, capitalize}) => uppercase ? 'uppercase' : capitalize ? 'capitalize' : null} ;

	::selection {
	  background: ${colors.orange};
	  color: white;
	}

	@media only screen and (max-width: 780px) {

	}
`;



const Body = ({ 
		width, 
		fontSize, 
		children, 
		center, 
		color, 
		maxWidth, 
		bold, 
		paddingBottom, 
		style, 
		opacity, 
		tight, 
		lineHeight,
		uppercase,
		capitalize
	}) => {

	return (
		<Wrapper
			width={width}
			maxWidth={maxWidth}
			center={center}
			paddingBottom={paddingBottom}
			style={style}>
			<BodyCopy
				uppercase={uppercase}
				capitalize={capitalize}
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