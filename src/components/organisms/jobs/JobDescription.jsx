import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Section } from '../../atoms';
import { H2, P } from './common';
import JobDescriptionBoilerplate from './JobDescriptionBoilerplate';
import JobForm from './JobForm';

const ApplyHeader = styled(H2)`
  margin: 4em 0 1em;
  text-align: center;
`;

function JobDescription({ description, position, children }) {
  return (
    <Section narrow>
      <JobDescriptionBoilerplate />
      <Section>
        <H2>{position}</H2>
        <P>{description}</P>
        {children}
      </Section>
      <Section>
        <ApplyHeader>Interested? Apply!</ApplyHeader>
        <JobForm position={position} />
      </Section>
    </Section>
  );
}

JobDescription.propTypes = {
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default JobDescription;
