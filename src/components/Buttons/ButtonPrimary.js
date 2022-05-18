import { Link }   from "gatsby";
import styled     from 'styled-components';
import PropTypes  from "prop-types";
import React      	from "react";
import {colors, gradients } from '../../theme'

const propTypes = {
	color  : PropTypes.string,
},
defaultProps = {
	color  : colors.black,
}

const ButtonComponent = styled.div`
	border-radius: 40px;
	height: 40px;
	min-width: 121px;
	max-width: 400px;
	background: ${({ inverted }) => inverted ? colors.white : colors.orange };
	color: ${({ inverted }) => inverted ? colors.black : colors.white };
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: flex-start;
	padding: 10px 28px 18px 28px;
	text-align: center;
	box-shadow: 0 0 2px ${colors.darkPurple + '36'};
	transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;

	/* &:after {
		content: 'hello';
		position: absolute;
		width: 100%;
		height: 100%;
	} */

	&:hover {
		background: ${({ inverted, hoverWhite }) => hoverWhite ? colors.white : inverted ? colors.orange  : colors.darkPurple };
		color: ${({ inverted, hoverWhite }) => hoverWhite ? colors.orange : inverted ? colors.white : colors.white };
		box-shadow: 0 8px 16px ${colors.orange + '36'};
	}
`;

const ButtonCopy = styled.span`
	font-size: 24px;
	font-weight: bold;
	letter-spacing: 1px;
	font-family: tuppence, serif;
`;

const LinkComponent = styled(Link)`
  display: ${({ flexBox }) => flexBox ? 'flex' : 'inline-block'};
`;

	// border: 2px solid ${({ inverted, disabled, color }) => _borderColor(inverted, disabled, color) };
	// background-color: ${({ inverted, color }) => color ? color : inverted ? Colors.White : Colors.Black };
	// color: ${({ inverted, color }) => color ? color : inverted ? Colors.Black : Colors.White };


// function _borderColor (inverted, disabled, color) {
// 	if (disabled || (disabled && inverted)) {
// 		return '#D3D3D3';
// 	} else if (inverted) {
// 		return color;
// 	} else {
// 		return color;
// 	}
// }

// function _backgroundColor (inverted, disabled, color) { 
// 	if (inverted) {
// 		return Colors.White; 
// 	} else if (disabled) {
// 		return '#D3D3D3';
// 	} else {
// 		return color;
// 	}
// }

// function _textColor (inverted, disabled) {
// 	if (inverted) {
// 		return Colors.Black;
// 	} else if (disabled) {
// 		return "#A8A8A8";
// 	} else {
// 		return Colors.White;
// 	}
// }

/**
A primary button that matches the brand.
*/
const ButtonPrimary = ({ ...props }) => {
	return (
		<LinkComponent 
			flexBox={props.flexBox}
			to={props.linkTo}>
			<ButtonComponent
				hoverWhite={props.hoverWhite}
				inverted={props.inverted} 
				disabled={props.disabled} 
				color={props.color}
				textColor={props.textColor}>
				<ButtonCopy>{props.children}</ButtonCopy>
			</ButtonComponent>
		</LinkComponent>
	);
};


ButtonPrimary.propTypes 	  = propTypes;
ButtonPrimary.defaultProps  = defaultProps;

export default ButtonPrimary;