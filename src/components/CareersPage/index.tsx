import { FC } from 'react';

import { Layout } from '~/components';

import { PageHero } from '../PageHero';
import { Benefit, BenefitsAccordion } from './BenefitsAccordion';
import { OpenPositions } from './OpenPositions';
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

      <BenefitsAccordion>
        <Benefit
          benefit="Flexible work schedule"
          info="We believe that your job should make the 'life' portion of your work-life balance a little more enjoyable and a little less stressful. This means you shouldn not have to retrofit your life to your work, rather, the other way around, which is why we offer a flexible work schedule and why our employees choose the Base Two location that best suits them."
        />
        <Benefit
          benefit="Free insurance"
          info="Health insurance is important, but nobody likes losing a portion of their paycheck to it. Base Two pays 100% of the premiums for employee health, vision, and dental insurance so that you dont need to worry about it."
        />
        <Benefit
          benefit="401K plan"
          info="Saving for retirement is important, and Base Twos 401k plan provides a method to save with pre-tax money. To help with your savings Base Two contributes 3% of your salary to your Base Two 401k plan."
        />
        <Benefit
          benefit="Generous time off"
          info="Employees are encouraged to take an average of 3 weeks of vacation a year. We also close the office for 12 total holidays and offer unlimited sick days. Let's face it, we all get sick. "
        />
        <Benefit
          benefit="Transparency"
          info="The best working relationships are built on trust and transparency. So we communicate clearly and honestly—no jargon here. Only by being straightforward and honest can we get to the beautiful result we’re all driving toward."
        />
        <Benefit
          benefit="Choice of equipment"
          info="Base Two does not have standard-issue equipment to hand new employees, but rather allows each employee to select the equipment that will work best for them. If it makes you happy and helps you do your work, then it’s worth it."
        />
      </BenefitsAccordion>

      <OpenPositions />
    </Layout>
  );
};
