import React from 'react';
import { Section, UL } from '../../atoms';
import { H2, H3, LI, P } from './common';

function JobDescriptionBoilerplate() {
  return (
    <>
      <Section>
        <H2>About Base Two</H2>
        <P>
          Base Two is a remote-friendly multi-city company of experienced
          developers working together to turn ideas into beautiful software. We
          work as individuals and teams with small and large companies — local
          and abroad — to improve processes around software development and
          deliver user-focused products and applications.
        </P>
        <P>
          We strive to be a forward-thinking and constantly improving collection
          of knowledgeable individuals. We work together to exceed what we could
          do alone. Openness, honesty, and empathy are the building blocks of
          our culture.
        </P>
      </Section>
      <Section>
        <H2>Hallmarks of a Base Two Employee</H2>
        <UL>
          <LI>
            Values self-improvement and keeping up on trends and best-practices.
          </LI>
          <LI>
            Communicates clearly and respectfully with clients and teammates in
            both in-person and remote settings.
          </LI>
          <LI>
            Has a teamwork mentality, where all are willing to work together to
            come to the best solution for any given situation.
          </LI>
          <LI>
            Strives to be confident in abilities, curious about what is not
            known, and willing to share knowledge with others.
          </LI>
          <LI>
            Driven to create the best solutions, not just for clients, but also
            for other developers and end users.
          </LI>
        </UL>
      </Section>
      <Section>
        <H2>Day in the Life</H2>
        <P>
          The work and activities of Base Two team members may change
          day-to-day, but there are general expectations that remain the same.
        </P>
        <H3>What We Expect</H3>
        <UL>
          <LI>Openness, honesty, and empathy</LI>
          <LI>Clear team communication</LI>
          <LI>Being understanding and constructive in conversations</LI>
          <LI>Eagerness for self-improvement</LI>
          <LI>
            Desire to strengthen Base Two’s operations, sustainability, and
            growth
          </LI>
        </UL>
        <H3>What We DO NOT Expect</H3>
        <UL>
          <LI>A team member to know everything</LI>
          <LI>Every member is at their desk at all times</LI>
          <LI>Working as many hours as possible</LI>
          <LI>Unquestioning agreement with the way things are</LI>
        </UL>
      </Section>
      <Section>
        <H2>What We Offer</H2>
        <P>
          We offer great benefits so that the life portion of work-life balance
          can be more enjoyable and less stressful.
        </P>
        <UL>
          <LI>
            Free employee health, dental, and vision plans that are fully
            employer-paid
          </LI>
          <LI>401k plan with a 3% guaranteed employer contribution</LI>
          <LI>At least 15 paid vacation days per year</LI>
          <LI>12 paid floating holidays per year</LI>
          <LI>Unlimited sick days</LI>
          <LI>Flexible work schedule/location</LI>
          <LI>Employee’s choice of machine and peripherals</LI>
          <LI>Ergonomic desks and chairs (for on-site and remote employees)</LI>
          <LI>
            A supportive and collaborative team environment focused on your
            growth as a developer
          </LI>
        </UL>
      </Section>
      <Section>
        <H2>Our Interview Process</H2>
        <P>
          After reviewing resumes, portfolios and any other material submitted
          with an application, we schedule a Small Team Interview with the
          candidates we are interested in meeting. In this meeting, two members
          of Base Two meet with a candidate either in-person or via a video
          call. The goal of the Small Team Interview is to answer any questions
          the candidate has about our company and processes, and learn what the
          candidate is interested in so we can determine if their skillset
          aligns with our present needs. If we think it might be a good fit, we
          schedule a Full Team Interview with the candidate. We strive to
          communicate each candidate’s status with them every step of the way.
        </P>
      </Section>
    </>
  );
}

JobDescriptionBoilerplate.propTypes = {};

export default JobDescriptionBoilerplate;
