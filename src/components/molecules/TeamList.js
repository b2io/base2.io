import React from 'react';
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

const Name = H4.extend`${themed('typography.headline')};`;

const Title = styled.small`
  display: block;
  font-weight: normal;
`;

class TeamListItem extends React.Component {
  render() {
    const { image, name, title } = this.props;

    return (
      <Wrapper>
        <TeamImg alt={name} resolutions={image.resolutions} />
        <Name>
          {name}
          <Title>{title}</Title>
        </Name>
      </Wrapper>
    );
  }
}

TeamList.Item = TeamListItem;

export default TeamList;
