import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { P, Img, UL, LI } from '../atoms';
import { themed } from '../../util/style';

const imageSize = '150px';

const TeamList = styled(UL)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 3em 0;
  padding: 0;
  text-align: center;
`;

const Wrapper = styled(LI)`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1em 2em;
  text-align: center;
  vertical-align: top;
  width: calc(${imageSize} * 2);

  > div {
    position: relative;
    width: ${imageSize};

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      overflow: visible;
    }

    &::before {
      border: 2px solid ${themed('color.accent')};
      border-radius: 50%;
      box-shadow: 0 0 0 1px ${themed('color.border')};
      height: calc(${imageSize} - 3px);
      top: 0;
      width: calc(${imageSize} - 3px);
      z-index: 2;
    }

    &::after {
      border: 1px solid ${themed('color.overlay')};
      border-radius: 50%;
      height: 3em;
      left: -50%;
      top: 35%;
      width: 200%;
      z-index: 0;
    }
  }
`;

const TeamImg = styled(Img)`
  height: auto;
  position: relative;
  vertical-align: middle;
  width: ${imageSize};
  z-index: 1;
`;

const Title = styled.span`
  display: block;
`;

function TeamListItem({ image, name, title }) {
  return (
    <Wrapper>
      <TeamImg {...image} alt={name} />
      <P>
        {name}
        <Title>{title}</Title>
      </P>
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
