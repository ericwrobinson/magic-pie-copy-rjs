import React          from "react";
import PropTypes 			from 'prop-types';
import styled         from 'styled-components';
import { Link }       from 'gatsby';
import { Colors } 		from '../Layouts/Colors';


const propTypes = {
	color  : PropTypes.string,
	color1 : PropTypes.string,
	color2 : PropTypes.string,
},
defaultProps = {
	color  : Colors.Purple,
	color1  : Colors.Purple,
	color2  : Colors.BabyBlue
}

const Wrapper = styled.div`
  font-family: Sofia Pro, sans-serif;
	font-size: 16px;
	letter-spacing: 1.5px;
	color: ${({ inverted }) => inverted ? Colors.White : Colors.Black };
	font-weight: bold;
	padding: 0;
	text-transform: uppercase;
	transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;

	::selection {
	  background: #000;
	  color: white;
	}

	span {
		padding-left: 2px;
		transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
	}

	&:hover {
		color: ${({ inverted }) => inverted ? '#a8a8a8' : '#f2f2f2' };
		letter-spacing: 1.85px;
		span {
			padding-left: 4px;
		}
	}

  @media only screen and (max-width: 780px) {
		font-size: 21px;
  	letter-spacing: 3px;
  }
`;

const ExternalLink = styled.a``;

const NewLink = ({ to, external, href, children, inverted }) => {

	let SwitchLink = external ? ExternalLink : Link;

	return (
		<Wrapper inverted={inverted}>

        <SwitchLink
	        href={href}
	        target={external ? "_blank" : null}
	        external={external} 
	        to={to} 
					>{children}<span>→</span></SwitchLink>

		</Wrapper>
	);
}

NewLink.propTypes 	  = propTypes;
NewLink.defaultProps  = defaultProps;

export default NewLink;