import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { TwoToneHeading, Section, Blurb } from '../atoms';
import { TechnologiesList } from '../molecules';
import { mediaQuery } from '../../util/style';

const Wrapper = styled(Section)`
  background: url('/img/backgrounds/star-field.png');
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: ${rem('80px')};
  text-align: center;

  ${mediaQuery.small`
    padding-bottom: ${rem('180px')};
  `};

  ${mediaQuery.large`
    padding-bottom: ${rem('280px')};
  `};
`;

const Description = styled(Blurb)`
  margin-bottom: 2em;
  max-width: ${rem('750px')};
  width: 100%;
`;

function Technologies({ technologies }) {
  return (
    <Wrapper id="technologies">
      <TwoToneHeading>
        <span>Technological</span> Expertise
      </TwoToneHeading>
      <Description>
        We have a wide range of technical skills, and we’re constantly adding
        new languages, libraries, and best-practices. Here’s what we’ve been
        working with lately.
      </Description>
      <TechnologiesList>
        {technologies.map(technology => (
          <TechnologiesList.Item {...technology} key={technology.id} />
        ))}
      </TechnologiesList>
    </Wrapper>
  );
}

Technologies.defaultProps = {};

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      image: PropTypes.shape({}).isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Technologies;
