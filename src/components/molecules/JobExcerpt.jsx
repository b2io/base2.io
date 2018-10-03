import React from 'react';
import { A, H3, P } from '../atoms';

function JobExcerpt({ children, heading, url }) {
  return (
    <>
      <H3>{heading}</H3>
      <P>{children}</P>
      <A href={url}>Learn More</A>
    </>
  );
}

export default JobExcerpt;
