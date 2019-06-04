import { em, rem } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { cssEvery, mediaQuery, themed } from '../../../util/style';
import { Header, Time } from '../../../components';

const CaseStudyHeaderWrapper = styled(Header)`
  display: flex;
  background-color: ${themed('color.black')};
  background-image: url('/img/backgrounds/space-fog-purple.png'),
    url('/img/backgrounds/star-field.png');
  justify-content: center;

  ${mediaQuery.medium`
    min-height: 530px;
  `};
`;

const CaseStudyHeaderInfoWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  margin-top: ${em('48px')};
  max-width: 1300px;
  padding-bottom: ${em('28px')};
  padding-top: ${em('28px')};
`;

const CaseStudyHeaderInfo = styled.div`
  flex: 1;

  ${mediaQuery.large`
    flex: 3;
  `};
`;

const CaseStudyHeaderImageWrapper = styled.div`
  display: none;
  flex: 1;

  ${mediaQuery.smedium`
    display: block;
    text-align:right;
  `};

  ${mediaQuery.large`
    flex: 2;
  `};
`;

const CaseStudyHeaderImage = styled.img`
  max-width: 80%;
`;

const Title = styled.h1`
  color: ${themed('color.white')};
  font-size: ${rem('36px')};
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: ${em('30px', '36px')};
  margin-top: 0;

  ${mediaQuery.xsmall`
    ${cssEvery('large')`
      font-size: ${rem('48px')};
      margin-bottom:${em('14px', '48px')};
    `}
  `};

  ${mediaQuery.small`
    font-size: ${rem('52px')};
    margin-bottom: ${em('32px', '52px')};

    ${cssEvery('large')`
      margin-bottom:${em('18px', '52px')};
    `}
  `};

  ${mediaQuery.medium`
    font-size: ${rem('72px')};
    margin-bottom: ${em('32px', '72px')};
  `};
`;

const Tagline = styled.span`
  font-size: ${rem('24px')};
  font-style: italic;
  font-weight: 100;
  line-height: 1.25;

  ${mediaQuery.medium`
    font-size: ${rem('36px')};
  `};
`;

function CaseStudyHeader({ large, img, imgAlt, title }) {
  return (
    <CaseStudyHeaderWrapper>
      <CaseStudyHeaderInfoWrapper>
        <CaseStudyHeaderInfo>
          <Title large={large}>{title}</Title>
        </CaseStudyHeaderInfo>
        <CaseStudyHeaderImageWrapper>
          <CaseStudyHeaderImage src={img} alt={imgAlt} />
        </CaseStudyHeaderImageWrapper>
      </CaseStudyHeaderInfoWrapper>
    </CaseStudyHeaderWrapper>
  );
}

CaseStudyHeader.defaultProps = {
  large: false,
  img: '/img/telescope-constellation.png',
  imgAlt: 'Telescope constellation pointing toward space',
};

CaseStudyHeader.propTypes = {
  large: PropTypes.bool,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default CaseStudyHeader;
