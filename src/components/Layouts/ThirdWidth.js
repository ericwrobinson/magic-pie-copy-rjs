import styled        				from 'styled-components';
import React         				from "react";

const Wrapper = styled.div`
  display: flex;
  flex: 33.33%;
  max-width: 33.33%;
  flex-direction: column;
  padding-left: 4.5px;
  padding-right: 4.5px;
  padding-bottom: 9px;
  justify-content: center;

  @media only screen and (max-width: 780px) {
	  flex: 100%;
	  max-width: 100%;
	  margin-top: ${({ marginTop }) => marginTop ? 27 : 0}px;
  }
`;

const ThirdWidth = ({ children, firstChild, marginTop, paddingRight }) => (
	<Wrapper
		firstChild={firstChild}
		marginTop={marginTop}
		paddingRight={paddingRight}>
		{children}
	</Wrapper>
);

export default ThirdWidth;