import styled        				from 'styled-components';
import React         				from "react";

const Wrapper = styled.div`
  display: flex;
  flex: 0 25%;
  max-width: 25%;
  flex-direction: column;
  padding-left: 4.5px;
  padding-right: 4.5px;
  padding-bottom: 9px;
  justify-content: center;



  @media only screen and (max-width: 780px) {
	  flex: 50%;
	  max-width: 50%;
	  margin-top: ${({ marginTop }) => marginTop ? 27 : 0}px;
  }
`;

const QuarterWidth = ({ children, firstChild, marginTop, paddingRight }) => (
	<Wrapper
		firstChild={firstChild}
		marginTop={marginTop}
		paddingRight={paddingRight}>
		{children}
	</Wrapper>
);

export default QuarterWidth;