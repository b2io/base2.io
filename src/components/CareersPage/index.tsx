import { FC } from 'react';

import { Layout } from '~/components';

import { PageHero } from '../PageHero';
import { Benefits } from './Benefits';
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
      <Benefits />
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
