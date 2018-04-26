import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { P, Img } from '../atoms';

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
  width: 30%;
`;

const TeamImg = styled(Img)`
  height: auto;
  vertical-align: middle;
  width: 260px;
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
