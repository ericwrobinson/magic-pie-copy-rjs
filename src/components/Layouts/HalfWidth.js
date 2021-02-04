import styled        				from 'styled-components';
import React         				from "react";

const Wrapper = styled.div`
  display: ${({inline}) => inline ? 'inline' : 'flex'};
  flex: 1 50%;
  flex-direction: column;
  padding-left: ${({ firstChild }) => firstChild ? 0 : 9}px;
  padding-right: ${({ paddingRight }) => paddingRight ? 9 : 0}px;

  justify-content: center;

  @media only screen and (max-width: 780px) {
  	display: flex;
	  flex: ${({mobileSplit}) => mobileSplit ? 50 : 100}%;
	  padding-left: 9px;
	  padding-right: 0px;
	  margin-top: ${({ marginTop }) => marginTop ? 27 : 0}px;
  }
`;

const HalfWidth = ({ className, inline, children, firstChild, marginTop, mobileSplit, paddingRight, style }) => (
	<Wrapper
		className={className}
		firstChild={firstChild}
		inline={inline}
		mobileSplit={mobileSplit}
		marginTop={marginTop}
		paddingRight={paddingRight}
		style={style}>
		{children}
	</Wrapper>
);

export default HalfWidth;