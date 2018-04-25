import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H4, Img } from '../atoms';
import { themed } from '../../util/style';

const TeamList = styled.ul`
  list-style: none;
  margin: 3em 0;
  padding: 0;
  text-align: center;
`;

const Wrapper = styled.li`
  display: inline-block;
  margin: 1em;
  vertical-align: top;
`;

const TeamImg = styled(Img)`
  height: auto;
  vertical-align: middle;
  width: 260px;
`;

const Name = H4.extend`
  ${themed('typography.headline')};
`;

const Title = styled.small`
  display: block;
  font-weight: normal;
`;

function TeamListItem({ image, name, title }) {
  return (
    <Wrapper>
      <TeamImg {...image} alt={name} />
      <Name>
        {name}
        <Title>{title}</Title>
      </Name>
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
