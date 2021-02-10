import styled from 'styled-components';
import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  siteTitle: PropTypes.string,
},

defaultProps = {
  siteTitle: ``,
}

const Wrapper = styled.div`
  width: 100%;
	max-width: ${({ noMaxWidth }) => noMaxWidth ? null : '1160px'};
	flex-wrap: ${({wrap}) => wrap ? 'wrap' : null};
	display: ${({ center }) => center ? null : 'flex'};
	justify-content: ${({ flexCenter, spaceBetween }) => spaceBetween ? 'space-between' : flexCenter ? 'center' : null};
	align-items: ${({ flexStart }) => flexStart ? 'flex-start' : 'center'};
	flex-direction: ${({ column }) => column ? 'column' : 'row'};
	margin-left: auto;
	margin-right: auto;
	padding-left: 18px;
	padding-right: 18px;
`;

const SiteContent = ({ column, spaceBetween, noMaxWidth, children, flexCenter, center, wrap, flexStart, style, aosType, aosOffset, aosEasing, aosDuration, aosDelay }) => (
	<Wrapper
		data-aos={aosType}
    data-aos-once={true}
    data-aos-offset={aosOffset} 
    data-aos-easing={aosEasing}
    data-aos-duration={aosDuration}
    data-aos-delay={aosDelay}
    flexStart={flexStart}
    spaceBetween={spaceBetween}
    column={column}
		center={center}
		noMaxWidth={noMaxWidth}
		flexCenter={flexCenter}
		wrap={wrap}
		style={style}>
		{children}
	</Wrapper>
);

SiteContent.propTypes = propTypes;
SiteContent.defaultProps = defaultProps;

export default SiteContent;