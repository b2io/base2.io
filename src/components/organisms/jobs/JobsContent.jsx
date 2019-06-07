import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, map } from 'lodash';
import styled from 'styled-components';
import { rem } from 'polished';
import { Img, Link, Section, UL } from '../../atoms';
import { H2, LI, P } from './common';
import JobExcerpt from '../../molecules/JobExcerpt';
import teamImage from '../../../../public/img/base-two-team.jpg';
import officeCollageImage from '../../../../public/img/base-two-office-collage.jpg';

const JobsImage = styled(Img)`
  margin-top: ${rem('48px')};
  width: 100%;
`;

const JobsSection = styled(Section)`
  font-size: ${rem('18px')};
  font-weight: 400;
  line-height: 1.5;
  margin: 0 auto ${rem('128px')};
  max-width: 1200px;
`;

function JobsContent({ jobs }) {
  return (
    <>
      <JobsSection>
        <H2>We make software for people</H2>
        <P>
          We are Base Two, a multi-city company of experienced developers
          working together to turn ideas into beautiful software. We work as
          individuals and teams with small and large companies — local and
          abroad — to improve processes around software development and deliver
          user-focused products and applications.
        </P>
        <JobsImage src={teamImage} alt="Our Base Two team" width="1000" />
      </JobsSection>
      <JobsSection>
        <H2>Our culture promotes team work</H2>
        <P>
          We strive to be a forward-thinking and constantly improving collection
          of knowledgeable individuals. We work together to exceed what we could
          do alone. Openness, honesty, and empathy are the building blocks of
          our culture. We have a flat hierarchy and transparent operations.
        </P>
      </JobsSection>
      <JobsSection>
        <H2>People make us</H2>
        <P>
          Our team is composed of skilled and unique people. We have varying
          backgrounds and experience across many areas of design, development,
          and business. We believe in hiring individuals who will bring unique
          and creative perspectives to our team.
        </P>
        <JobsImage
          src={officeCollageImage}
          alt="Our Base Two team"
          width="1000"
        />
      </JobsSection>
      <JobsSection>
        <H2>We believe in balance</H2>
        <P>
          We offer great benefits so that the <strong>life</strong> portion of
          work-life balance can be more enjoyable and less stressful.
        </P>
        <UL>
          <LI>
            Free health, dental, and vision plan that is fully employer-paid
          </LI>
          <LI>401k plan with a 3% automatic employer contribution</LI>
          <LI>At least 15 paid vacation days per year</LI>
          <LI>12 paid floating holidays per year</LI>
          <LI>Unlimited sick days</LI>
          <LI>Flexible work schedule/location</LI>
          <LI>Employee’s choice of machine and peripherals</LI>
          <LI>Casual office with ergonomic desks and chairs</LI>
          <LI>Fancy office coffee</LI>
        </UL>
      </JobsSection>
      <JobsSection id="positions">
        <H2>Open Positions</H2>

        <P>
          We are always looking for amazing people to work with us in Columbus,
          OH and Pittsburgh, PA. If you are a talented and creative individual
          with strong people skills and experience building web applications
          with the latest front-end technologies, please{' '}
          <Link to="/jobs/apply">apply</Link>.
        </P>
        {!isEmpty(jobs) && (
          <>
            <P>
              Currently, we are looking for people to join us in the following
              positions:
            </P>
            {map(jobs, job => (
              <JobExcerpt
                heading={job.position}
                key={job.path}
                url={`/jobs/${job.path}`}
              >
                {job.description}
              </JobExcerpt>
            ))}
          </>
        )}
      </JobsSection>
    </>
  );
}

JobsContent.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }),
  ),
};

JobsContent.defaultProps = {
  jobs: [],
};

export default JobsContent;
