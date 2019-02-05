import React from 'react';
import { isEmpty, map } from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { em, rem } from 'polished';
import { H3, Link, Section, UL } from '../../atoms';
import { H2, LI, P } from './common';
import { themed } from '../../../util/style';

const JobsSection = styled(Section)`
  &:not(:first-of-type) {
    margin-top: ${rem('64px')};
  }

  &:last-of-type {
    margin-bottom: ${rem('128px')};
  }
`;

const SubHeading = styled(H3)`
  color: ${themed('color.grey')};
  font-size: 1.75em;
`;

const ApplyButton = styled(Link)`
  ${themed('button.default')};
  display: block;
  margin-top: 1em;
  text-align: center;
  width: ${em('288px', '24px')};
`;

function JobDescription({ job }) {
  const { sections } = job;
  return (
    <React.Fragment>
      <JobsSection>
        <H2>{job.position}</H2>
        <P>{job.description}</P>
      </JobsSection>
      {!isEmpty(sections) &&
        map(sections, ({ bullets, description, header, id, isSubHeading }) => (
          <JobsSection key={id}>
            {header && !isSubHeading && <H2>{header}</H2>}
            {header && isSubHeading && <SubHeading>{header}</SubHeading>}
            {description && <P>{description}</P>}
            {bullets && (
              <UL>
                {map(bullets, bullet => (
                  <LI>{bullet}</LI>
                ))}
              </UL>
            )}
          </JobsSection>
        ))}
      <JobsSection>
        <ApplyButton to="/jobs/apply/">Apply</ApplyButton>
      </JobsSection>
    </React.Fragment>
  );
}

JobDescription.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.node.isRequired,
    description: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    sections: PropTypes.array,
  }),
};

JobDescription.defaultProps = {
  job: {},
};

export default JobDescription;
