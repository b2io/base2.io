import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { Section } from '../../atoms';
import { H2, P } from './common';
import JobDescriptionBoilerplate from './JobDescriptionBoilerplate';
import JobForm from './JobForm';

const Wrapper = styled(Section)`
  font-size: ${rem('18px')};
  font-weight: 400;
  line-height: 1.5;
  margin: 0 auto ${rem('128px')};
  max-width: 1200px;
`;

const ApplyHeader = styled(H2)`
  margin-bottom: 1em;
`;

function JobDescription({ description, position, children }) {
  return (
    <Wrapper>
      <JobDescriptionBoilerplate />
      <Section>
        <H2>{position}</H2>
        <P>{description}</P>
        {children}
      </Section>
      <Section>
        <ApplyHeader>Apply for the {position} position</ApplyHeader>
        <JobForm isApprenticeship={false} position={position} />
      </Section>
    </Wrapper>
  );
}

JobDescription.propTypes = {
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default JobDescription;
