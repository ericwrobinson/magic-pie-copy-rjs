import React          from "react";
import PropTypes 			from 'prop-types';
import styled         from 'styled-components';
import { Link }       from 'gatsby';
import { SubHeader }	from '../Typography'
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

function transformFontWeight ( thin ) {
	if (thin) {
		return 500;
	} else {
		return 700;
	} 
}

const Wrapper = styled.div`
	  font-family: Rift, sans-serif;
		font-size: 28px;
		letter-spacing: ${ ({h1}) => h1 ? 6 : 3}px;
		color: ${({color}) => color};
		font-weight: ${ ({thin}) => transformFontWeight(thin)};
		padding: 0;
		margin: 0 0 12px 0;
		position: relative;
		display: inline-block;

		::selection {
		  background: #000;
		  color: white;
		}

	  @media only screen and (max-width: 780px) {
			font-size: 21px;
	  	letter-spacing: 3px;
	  }
	  a {
	  	color: ${({color}) => color};
		  position: relative;
		  text-decoration: none;
		}

	  a:after {
		  // background-color: ${({color}) => color};
	  	height: 2px;
		  background: linear-gradient(135deg,
		${({ color1 }) => color1} 0%, ${({ color2 }) => color2} 100%);
		  content: "";
		  position: absolute;
	    right: 100%;
	    bottom: .075em;
	    left: 0;
		  transition: right .4s cubic-bezier(0,.5,0,1);
		}
		a:hover:after {
		  right: 0;

		}

		// :after {
		//   content: '>';
		//   position: absolute;
		//   opacity: 0;  
		//   top: 0px;
		//   right: -10px;
		//   transition: 0.5s;
		// }

		// :hover:after {
		//   opacity: 1;
		//   right: -20px;
		// }
`;

const ExternalLink = styled.a``;

const NewLink = ({ to, external, href, children, color, noPadding, color1, color2 }) => {

	let SwitchLink = external ? ExternalLink : Link;

	return (
		<Wrapper color={color} color1={color1} color2={color2}>

        <SwitchLink
        href={href}
        external={external} 
        color={color}
        to={to} 
				>{children}</SwitchLink>

		</Wrapper>
	);
}

NewLink.propTypes 	  = propTypes;
NewLink.defaultProps  = defaultProps;

export default NewLink;