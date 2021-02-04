import styled        				from 'styled-components';
import React         				from "react";

const Wrapper = styled.div`
  display: flex;
  flex: 66.66%;
  max-width: 66.66%;
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

const TwoThirdsWidth = ({ children, firstChild, marginTop, paddingRight, style }) => (
	<Wrapper
		firstChild={firstChild}
		marginTop={marginTop}
		paddingRight={paddingRight}
    style={style}>
		{children}
	</Wrapper>
);

export default TwoThirdsWidth;