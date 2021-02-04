import { Link }   from "gatsby";
import styled     from 'styled-components';
import PropTypes  from "prop-types";
import React      	from "react";
import { Colors } 		from '../Layouts/Colors';

const propTypes = {
	color  : PropTypes.string,
},
defaultProps = {
	color  : Colors.Purple,
}

const ButtonComponent = styled.div`
	border-radius: 32px;
	height: 32px;
	min-width: 121px;
	border: 2px solid ${({ inverted, disabled, color }) => _borderColor(inverted, disabled, color) };
	background-color: ${({ inverted, disabled, color }) => _backgroundColor(inverted, disabled, color) };
	color: ${({ inverted, disabled, textColor }) => _textColor(inverted, disabled, textColor) };
	align-items: center;
	justify-content: center;
	align-self: flex-start;
	padding-left: 22px;
	padding-right: 22px;
	text-align: center;
	transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;

	&:hover {
		background-color: ${Colors.Purple};
		color: ${Colors.White};
	}
`;

const ButtonCopy = styled.span`
	font-size: 18px;
	font-weight: bold;
	letter-spacing: -0.25px;
	line-height: 0;
	font-family: Sofia-Pro, sans-serif;
`;

function _borderColor (inverted, disabled, color) {
	if (disabled || (disabled && inverted)) {
		return '#D3D3D3';
	} else if (inverted) {
		return color;
	} else {
		return color;
	}
}

function _backgroundColor (inverted, disabled, color) { 
	if (inverted || (inverted && disabled)) {
		return 'transparent'; 
	} else if (disabled) {
		return '#D3D3D3';
	} else {
		return color;
	}
}

function _textColor (inverted, disabled, textColor) {
	if (disabled && inverted) {
		return '#D3D3D3';
	} else if (inverted) {
		return textColor;
	} else if (disabled) {
		return Colors.Purple;
	} else {
		return Colors.Purple;
	}
}

/**
A primary button that matches the brand.
*/
const ButtonPrimary = ({ ...props }) => {
	return (
		<Link to={props.linkTo}>
			<ButtonComponent
				inverted={props.inverted} 
				disabled={props.disabled} 
				color={props.color}
				textColor={props.textColor}>
				<ButtonCopy>{props.title}</ButtonCopy>
			</ButtonComponent>
		</Link>
	);
};


ButtonPrimary.propTypes 	  = propTypes;
ButtonPrimary.defaultProps  = defaultProps;

export default ButtonPrimary;