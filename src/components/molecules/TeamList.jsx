import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navigate } from 'gatsby';
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

  ${mediaQuery.medium`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
  `};
`;

const ListItem = styled(LI)`
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

  ${mediaQuery.medium`
    flex-direction: column !important;
    margin: 0 5% 3em;
    text-align: center;
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

    ${mediaQuery.medium`
      width: 100%;
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
    width: ${imageSize.default};

    ${mediaQuery.medium`
      margin: 0;  
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

const ClickableListItem = styled(ListItem)`
  cursor: pointer;

  &:hover {
    color: ${themed('color.accent')};

    img {
      background-color: ${themed('color.deepBlue')};
    }
  }
`;

const TeamImg = styled(Img)`
  background-color: #f5f5f5;
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
  line-height: 1.4;
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

const Name = styled.span`
  display: block;
  font-weight: 500;
  line-height: 1;
  margin: 0.25rem auto;
`;

const Title = styled.span`
  display: block;
  white-space: pre;
  font-size: 0.875rem;
  letter-spacing: 0.02em;
`;

function TeamListItem({ image, name, title, url }) {
  const handleClick = () => {
    if (url) navigate(url);
  };

  const Wrapper = url ? ClickableListItem : ListItem;

  return (
    <Wrapper onClick={handleClick}>
      <div>
        <TeamImg {...image} alt={name} title={name} />
      </div>
      <TeamMemberInfo>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </TeamMemberInfo>
    </Wrapper>
  );
}

TeamListItem.defaultProps = { url: null };

TeamListItem.propTypes = {
  image: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

TeamList.Item = TeamListItem;

export default TeamList;
