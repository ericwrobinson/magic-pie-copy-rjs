import React          from "react";
import PropTypes 			from 'prop-types';
import styled         from 'styled-components';
import { Link }       from 'gatsby';
import { SubHeader }	from '../Typography'
import { Colors } 		from '../Layouts/Colors';


const propTypes = {
	color  : PropTypes.string,
},
defaultProps = {
	color  : Colors.Purple,
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
		font-size: 42px;
		letter-spacing: ${ ({h1}) => h1 ? 6 : 3}px;
		color: ${color};
		font-weight: ${ ({thin}) => transformFontWeight(thin)};
		padding: 0;
		margin: 0 0 12px 0;
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

const Link = ({ to, children, color, noPadding, thin }) => {

	return (
		<Wrapper>
        <Link 
        to={to} 
				color={color}>{children}</Link>
		</Wrapper>
	);
}

Link.propTypes 	  = propTypes;
Link.defaultProps  = defaultProps;

export default Link;