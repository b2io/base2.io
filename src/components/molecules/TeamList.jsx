import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { P, Img, UL, LI } from '../atoms';
import { mediaQuery, themed } from '../../util/style';

const imageSize = {
  default: '70px',
  medium: '110px',
  large: '150px',
};

const TeamList = styled(UL)`
  list-style: none;
  margin: 3em 0;
  padding: 0;
  width: 100%;

  ${mediaQuery.small`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
  `};
`;

const Wrapper = styled(LI)`
  align-items: center;
  display: flex;
  margin: 0 1% 3em;
  position: relative;
  vertical-align: top;

  &:nth-of-type(even) {
    flex-direction: row-reverse;

    p {
      margin-right: 5%;
      text-align: right;
    }

    &::after {
      left: auto;
      right: 0;
    }
  }

  ${mediaQuery.small`
    flex-direction: column !important;
    margin: 0 4% 3em;
    text-align: center;
    width: 24%;
  `};

  ${mediaQuery.medium`
    margin: 0 5% 3em;
    width: 20%;
  `};

  &::after {
    border: 1px solid ${themed('color.overlay')};
    border-radius: 50%;
    content: '';
    height: calc(${imageSize.default} / 3);
    left: 0;
    position: absolute;
    top: calc(${imageSize.default} / 2.75);
    width: calc(${imageSize.default} + 19%);
    z-index: 0;

    ${mediaQuery.small`
      width: 100%;
    `};

    ${mediaQuery.medium`
      height: calc(${imageSize.medium} / 3);
      top: calc(${imageSize.medium} / 2.75);
    `};

    ${mediaQuery.large`
      height: calc(${imageSize.large} / 3);
      top: calc(${imageSize.large} / 2.75);
    `};
  }

  > div {
    position: relative;
    margin: 0 10% 0 10%;

    ${mediaQuery.small`
      margin: 0;
      width: ${imageSize.default};
    `};

    ${mediaQuery.medium`
      width: ${imageSize.medium};
    `};

    ${mediaQuery.large`
      width: ${imageSize.large};
    `};

    &::before {
      border: 2px solid ${themed('color.accent')};
      border-radius: 50%;
      box-shadow: 0 0 0 1px ${themed('color.border')};
      content: '';
      display: block;
      height: calc(${imageSize.default} - 3px);
      pointer-events: none;
      position: absolute;
      overflow: visible;
      top: 0;
      width: calc(${imageSize.default} - 3px);
      z-index: 2;

      ${mediaQuery.medium`
        height: calc(${imageSize.medium} - 3px);
        width: calc(${imageSize.medium} - 3px);
      `};

      ${mediaQuery.large`
        height: calc(${imageSize.large} - 3px);
        width: calc(${imageSize.large} - 3px);
      `};
    }
  }
`;

const TeamImg = styled(Img)`
  border-radius: 50%;
  height: auto;
  position: relative;
  vertical-align: middle;
  width: ${imageSize.default};
  z-index: 1;

  ${mediaQuery.medium`
    width: ${imageSize.medium};
  `};

  ${mediaQuery.large`
    width: ${imageSize.large};
  `};
`;

const TeamMemberInfo = styled(P)`
  margin-left: 5%;
  max-width: 50%;

  ${mediaQuery.small`
    margin-left: 0;
    margin-right: 0 !important;
    margin-top: .5em;
    max-width: 100%;
    text-align: center !important;
    width: 100%;
  `};
`;

const Title = styled.span`
  display: block;
`;

function TeamListItem({ image, name, title }) {
  return (
    <Wrapper>
      <div>
        <TeamImg {...image} alt={name} title={name} />
      </div>
      <TeamMemberInfo>
        {name}
      	<Title>{title}</Title>
      </TeamMemberInfo>
    </Wrapper>
  );
}

TeamListItem.defaultProps = {};

TeamListItem.propTypes = {
  image: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

TeamList.Item = TeamListItem;

export default TeamList;
