import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Header,
         Body } from '../components/Typography';
import { SiteContent } from '../components/Layouts';
import { gradients } from '../theme';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const GridWrapper = styled.div`
  padding: 0 12px 0 12px;
  margin-top: 2px;
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 45%;
  max-width: 321px;
  max-height: 321px;

  @media only screen and (max-width: 1300px) {
    width: 100%;
  }

  @media only screen and (max-width: 980px) {
    margin-bottom: 44px;
    max-width: 400px;
    min-height: 150px;

    img {
      min-height: 150px;
    }
  }
`;

const Wrapper = styled.div`
  position:relative;
  width: 100%;
  border-radius: 16px;
  background: ${gradients.purpleGradient};
  color: white;
  padding: 140px 82px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: ${({ even }) => even ? 'row' : 'row-reverse' };
  justify-content: center;
  align-items: center;

  &:after {
    content: '';
    background: ${({ even }) => even ? gradients.orangeRed : gradients.pinkPurple};
    border-radius: 16px;
    position: absolute;
    height: 100%;
    width: 100%;
    left: ${({ even }) => even ? '15px' : '-15px'};
    top: 15px;
    z-index: -1;
  }

  @media only screen and (max-width: 980px) {
    flex-direction: column;
    padding: 80px 42px;
  }
  @media only screen and (max-width: 580px) {
    &:after {
      content: '';
      background-color: ${({ even }) => even ? '#0045FF' : '#FF0000'};
      position: absolute;
      height: 100%;
      width: 100%;
      left: ${({ even }) => even ? '10px' : '-10px'};
      top: 10px;
      z-index: -1;
    }
  }

  @media only screen and (max-width: 400px) {

  }
`;

    // bottom: 15px;
    // right: 15px;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ even }) => even ? '80px' : null };
  margin-right: ${({ even }) => even ? null : '80px' };

  @media only screen and (max-width: 980px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const FeatureGrid = ({ gridItems }) => {

  return (
    <SiteContent>
      <GridWrapper className="columns is-multiline">
        {gridItems.map((item, index) => {

          return (
            <Wrapper key={index} even={index % 2 === 0}>
              <ImageWrapper>
                <img src={item.serviceImage.publicURL} alt={item} />
              </ImageWrapper>

              <ContentWrapper even={index % 2 === 0}>
                <Header h3 color="white">{item.serviceTitle}</Header>
                <Body color="#c4c4c4">{item.serviceSubtitle}</Body>
              </ContentWrapper>

            </Wrapper>
          )
        })}
      </GridWrapper>
    </SiteContent>
  );
}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
