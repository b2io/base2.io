import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { em, rem } from 'polished';
import { Link, P, Section } from '../../atoms';
import { H2 } from './common';
import { themed } from '../../../util/style';
import JobDescriptionBoilerplate from './JobDescriptionBoilerplate';

const Wrapper = styled(Section)`
  font-size: ${rem('18px')};
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: ${rem('128px')};
`;

const ApplyButton = styled(Link)`
  ${themed('button.default')};
  display: block;
  margin: ${rem(20)} auto 0 auto;
  text-align: center;
  width: ${em('288px', '24px')};
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
      <ApplyButton to="/jobs/apply/">Apply</ApplyButton>
    </Wrapper>
  );
}

JobDescription.propTypes = {
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default JobDescription;
