import { css } from '@emotion/react';
import { FC } from 'react';

import { Layout } from '~/components';
import { atMinTablet, atMinXL } from '~/theme';

import { PageHero } from '../PageHero';
import { Benefit, Benefits } from './Benefits';
import { BenefitsLarge } from './BenefitsLarge';
import { OpenPositions, Position } from './OpenPositions';
import { WorkingAtB2 } from './WorkingAtB2';

export const CareersPage: FC = () => {
  return (
    <Layout
      description="Solving seemingly impervious challenges."
      title="Careers"
    >
      <PageHero
        alt="person sitting at computer and smiling"
        imgSources={[
          ['largeDesktop', '/careers/careers-hero-xlarge.jpg'],
          ['tablet', '/careers/careers-hero-medium.jpg'],
          ['xl', '/careers/careers-hero-large.jpg'],
          ['xs', '/careers/careers-hero-small.jpg'],
        ]}
        text="Solving seemingly impervious challenges."
      />
      <WorkingAtB2 />
      <Benefits>
        <Benefit
          benefit="Flexible work schedule"
          info="Talk about flexible hours"
        />
        <Benefit benefit="Free insurance" info="Talk about flexible hours" />
        <Benefit
          benefit="Generous time off"
          info="Employees are encouraged to take an average of 3 weeks of vacation a year. We also close the office for 12 total holidays and offer unlimited sick days. Let's face it, we all get sick. "
        />
        <Benefit
          benefit="Transparency"
          info="The best working relationships are built on trust and transparency. So we communicate clearly and honestly—no jargon here. Only by being straightforward and honest can we get to the beautiful result we’re all driving toward."
        />
        <Benefit benefit="401K plan" info="Talk about 401K plan" />
        <Benefit benefit="Choice of equipment" info="Mac or PC. You decide." />
      </Benefits>
      <BenefitsLarge />

      <OpenPositions>
        <Position
          description="We are always looking for amazing people to work with us in Columbus, OH; Pittsburgh, PA; and Chicago, IL. If you are a talented and creative individual with strong people skills and experience building web applications with the latest front-end technologies, please apply."
          role="Senior Software Engineer"
        />
        <Position
          description="We are always looking for amazing people to work with us in Columbus, OH; Pittsburgh, PA; and Chicago, IL. If you are a talented and creative individual with strong people skills and experience building web applications with the latest front-end technologies, please apply."
          role="Software Engineer"
        />
        <Position
          description="We are always looking for amazing people to work with us in Columbus, OH; Pittsburgh, PA; and Chicago, IL. If you are a talented and creative individual with strong people skills and experience building web applications with the latest front-end technologies, please apply."
          role="Jr. Software Engineer"
        />
        <Position
          description="We are always looking for amazing people to work with us in Columbus, OH; Pittsburgh, PA; and Chicago, IL. If you are a talented and creative individual with strong people skills and experience building web applications with the latest front-end technologies, please apply."
          role="Mid/Senior Software Engineer"
        />
      </OpenPositions>
    </Layout>
  );
};
