import styled        				from 'styled-components';
import React         				from "react";

const Wrapper = styled.div`
  display: flex;
  flex: 75%;
  max-width: 75%;
  flex-direction: ${({ row }) => row ? 'row' : 'column'};
  flex-wrap: wrap;
  padding-left: 4.5px;
  padding-right: 4.5px;
  padding-bottom: 9px;



  @media only screen and (max-width: 780px) {
	  flex: ${({mobileSplit}) => mobileSplit ? 50 : 100}%;
	  max-width: ${({mobileSplit}) => mobileSplit ? 50 : 100}%;
	  margin-top: ${({ marginTop }) => marginTop ? 27 : 0}px;
  }
`;

const ThreeQuarterWidth = ({ children, firstChild, marginTop, paddingRight, row, mobileSplit, style }) => (
	<Wrapper
		firstChild={firstChild}
		row={row}
    style={style}
    mobileSplit={mobileSplit}
		marginTop={marginTop}
		paddingRight={paddingRight}>
		{children}
	</Wrapper>
);

export default ThreeQuarterWidth;