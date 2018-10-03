import React from 'react';
import { Button, UL } from '../../atoms';
import { H2, LI, P, Wrapper } from './common';

function JobsContent() {
  return (
    <Wrapper>
      <H2>We make software for people</H2>
      <P>
        We are Base Two, a multi-city company of experienced developers working
        together to turn ideas into beautiful software. We work as individuals
        and teams with small and large companies &mdash; local and abroad
        &mdash; to improve processes around software development and deliver
        user-focused products and applications.
      </P>
      <img src="jobs-b2-team.png" alt="Our Base Two team" />
      <H2>Our culture promotes team work</H2>
      <P>
        We strive to be a forward-thinking and constantly improving collection
        of knowledgeable individuals. We work together to exceed what we could
        do alone. Openness, honesty, and empathy are the building blocks of our
        culture. We have a flat hierarchy and transparent operations.
      </P>
      <H2>People make us</H2>
      <P>
        Our team is composed of skilled and unique people. We have varying
        backgrounds and experience across many areas of design, development, and
        business. We believe in hiring individuals who will bring unique and
        creative perspectives to our team.
      </P>
      <H2>We believe in balance</H2>
      <P>
        We offer great benefits so that the
        &lt;strong&gt;life&lt;&#47;strong&gt; portion of work-life balance can
        be more enjoyable and less stressful.
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
      <H2>Open Positions</H2>
      <P>
        We are always looking for amazing people to work with us in Columbus, OH
        and Pittsburgh, PA. If you are a talented and creative individual with
        strong people skills and experience building web applications with the
        latest front-end technologies, please apply.
      </P>
      <Button>Apply</Button>
      <H2>Apprenticeship</H2>
      <P>
        We offer a three-month apprenticeship program for individuals who are
        getting started with web development. Apprentices have the opportunity
        to dive into real work with support and mentorship from our team along
        the way. Our goal is to ensure that apprentices are employable by the
        end of their time with us. [Linked to Reed’s blog post] Read more about
        our apprenticeship here.
      </P>
      <Button>Apply</Button>
    </Wrapper>
  );
}

export default JobsContent;
