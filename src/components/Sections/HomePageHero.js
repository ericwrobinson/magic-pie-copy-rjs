import React          from "react";
import PropTypes 			from 'prop-types';
import styled         from 'styled-components';


const propTypes = {
},
defaultProps = {
}

const Wrapper = styled.div``;

const HeroWrapper = styled.div`
  height: 80vh;
  background-color: black;
  color: white;

	::selection {
	  background: #000;
	  color: white;
	};

  @media only screen and (max-width: 780px) {
	}

	@media only screen and (max-width: 580px) {
	}

	@media only screen and (max-width: 400px) {
	}

`;

const HomePageHero = ({ children }) => {
	return (
		<Wrapper>
			<HeroWrapper>{children}</HeroWrapper>
		</Wrapper>
	);
}

HomePageHero.propTypes 	  = propTypes;
HomePageHero.defaultProps  = defaultProps;

export default HomePageHero;