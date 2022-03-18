import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { titleConfig } from './typeConfig';
import { colors } from '../../theme';
import { withManager } from '../../utilities';

const propTypes = {
  primitive: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'article', 'span']),
  size: PropTypes.oneOf(['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', 'xxsmall', 'xxxsmall', 'body', 'bodySmall']),
  children: PropTypes.any,
  bold: PropTypes.bool,
  color: PropTypes.string,
  align: PropTypes.string,
},
  defaultProps = {
    primitive: 'p',
    size: 'xxlarge',
    align: 'left',
    color: colors.black,
  };

const Wrapper = styled(props => {
  return React.createElement(props.primitive, props, props.children);
})`
  line-height: ${({ fontStyle, lineHeight }) => lineHeight ?? fontStyle.lineHeight};
  font-family: tuppence, serif;
  font-size: ${({ fontStyle, fontSize }) => fontSize ?? fontStyle.fontSize};
  letter-spacing: ${({ fontStyle }) => fontStyle.letterSpacing};
  font-weight: ${({ $bold }) => $bold ? 'bold' : 'normal'};
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '8px'};
  text-decoration: none;
  white-space: pre-line;
`;

const Text = (props) => {
  const {
    children,
    size,
    viewport,
    bold,
    fontSize,
    lineHeight,
    align,
    ...rest
  } = props;

  const fontStyle = titleConfig[size][viewport];

  return (
    <Wrapper
      {...rest}
      $bold={bold}
      size={size}
      align={align}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontStyle={{ ...fontStyle }}>
      {children}
    </Wrapper>
  )
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
export default withManager(Text);