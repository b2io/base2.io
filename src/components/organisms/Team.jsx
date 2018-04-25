import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Section, TwoToneHeading } from '../atoms';
import { TeamList } from '../molecules';

const Wrapper = styled(Section)`
  background: url('img/backgrounds/star-field.png');
`;

const TeamHeading = styled(TwoToneHeading)`
  margin-bottom: 1em;
  text-align: center;
`;

function Team({ team }) {
  return (
    <Wrapper id="team">
      <TeamHeading>
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
