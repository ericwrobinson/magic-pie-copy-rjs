import { Link }   from "gatsby";
import styled     from 'styled-components';
import PropTypes  from "prop-types";
import React      	from "react";
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
	background-color: ${({ inverted }) => inverted ? Colors.White : Colors.Black };
	color: ${({ inverted }) => inverted ? Colors.Black : Colors.White };
	align-items: center;
	justify-content: center;
	align-self: flex-start;
	padding-left: 33px;
	padding-right: 33px;
	text-align: center;
	transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;

	&:hover {
		background-color: ${({ inverted }) => inverted ? Colors.Black : Colors.White };
		color: ${({ inverted }) => inverted ? Colors.White : Colors.Black };
	}
`;

const ButtonCopy = styled.span`
	font-size: 21px;
	font-weight: bold;
	letter-spacing: .6px;
	line-height: 1.6;
	font-family: Gastromond, serif;
`;

const LinkComponent = styled(Link)`
  display: inline-block;
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
		<LinkComponent to={props.linkTo}>
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