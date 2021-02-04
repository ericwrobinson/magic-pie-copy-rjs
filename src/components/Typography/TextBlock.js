import React            from "react";
import styled           from 'styled-components';

import { Header,
         SubHeader,
         Body }         from '../Typography';      


const TextBlockWrapper = styled.div``;
const Wrapper = styled.div``;

const TextBlock = ({ h1, h2, h3, maxWidth, SubHeaderText, HeaderText, BodyText}) => {

	return (
		<TextBlockWrapper>
		{ h1 &&
			<Wrapper>
			  <SubHeader h1>{SubHeaderText}</SubHeader>
			  <Header h1>{HeaderText}</Header>
			  <Body maxWidth={maxWidth}>{BodyText}</Body>
		  </Wrapper>
	 	}
	 	{ h2 &&
	 		<Wrapper>
			  <SubHeader h2>{SubHeaderText}</SubHeader>
			  <Header h2>{HeaderText}</Header>
			  <Body maxWidth={maxWidth}>{BodyText}</Body>
		  </Wrapper>
	 	}
	  </TextBlockWrapper>
  );
}

export default TextBlock;