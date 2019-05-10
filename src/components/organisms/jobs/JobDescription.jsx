import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { em, rem } from 'polished';
import { Link, P, Section } from '../../atoms';
import { H2 } from './common';
import { themed } from '../../../util/style';

const JobsSection = styled(Section)`
  &:not(:first-of-type) {
    margin-top: ${rem('64px')};
  }

  &:last-of-type {
    margin-bottom: ${rem('128px')};
  }
`;

const ApplyButton = styled(Link)`
  ${themed('button.default')};
  display: block;
  margin-top: ${rem(16)};
  text-align: center;
  width: ${em('288px', '24px')};
`;

function JobDescription({ description, position, children }) {
  return (
    <React.Fragment>
      <JobsSection>
        <H2>{position}</H2>
        <P>{description}</P>
      </JobsSection>
      <JobsSection>{children}</JobsSection>
      <JobsSection>
        <ApplyButton to="/jobs/apply/">Apply</ApplyButton>
      </JobsSection>
    </React.Fragment>
  );
}

JobDescription.propTypes = {
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default JobDescription;
