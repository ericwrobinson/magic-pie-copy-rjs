import { Link }   from "gatsby";
import styled     from 'styled-components';
import PropTypes  from "prop-types";
import React      	from "react";
import {colors, gradients } from '../../theme'
import { Colors } 		from '../Layouts/Colors';

const propTypes = {
	color  : PropTypes.string,
},
defaultProps = {
	color  : Colors.Black,
}

const ButtonComponent = styled.div`
	border-radius: 40px;
	height: 40px;
	min-width: 121px;
	max-width: 400px;
	background: ${({ inverted }) => inverted ? colors.white : gradients.orangeRed };
	color: ${({ inverted }) => inverted ? colors.black : colors.white };
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: flex-start;
	padding: 6px 33px 11px 33px;
	text-align: center;
	transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;

	&:hover {
		background: ${({ inverted }) => inverted ? gradients.orangeRed  : colors.white };
		color: ${({ inverted }) => inverted ? colors.white : colors.black };
	}
`;

const ButtonCopy = styled.span`
	font-size: 24px;
	font-weight: bold;
	letter-spacing: 1px;
	line-height: 1.2;
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