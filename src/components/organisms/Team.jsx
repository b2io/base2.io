import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Section, TwoToneHeading } from '../atoms';
import { TeamList } from '../molecules';
import { themed, webpBackground } from '../../util/style';

const Wrapper = styled(Section)`
  ${webpBackground('img/backgrounds/star-field.png', 'img/backgrounds/star-field.webp')}
`;

const TeamHeading = styled(TwoToneHeading)`
  margin-bottom: 1em;
  padding-top: ${themed('navHeight.value')};
  text-align: center;
`;

function Team({ team }) {
  return (
    <Wrapper>
      <TeamHeading id="team">
        <span>Our</span> People
      </TeamHeading>
      <TeamList>
        {team.map(teamMember => (
          <TeamList.Item {...teamMember} key={teamMember.id} />
        ))}
      </TeamList>
    </Wrapper>
  );
}

Team.defaultProps = {};

Team.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      image: PropTypes.shape({}).isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Team;
