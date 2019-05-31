import React from 'react';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import styled from 'styled-components';
import { mediaQuery, themed } from '../../util/style';
import { A as Anchor, H3 as Heading3 } from '../atoms';
import { P } from '../organisms/jobs/common';

const A = styled(Anchor)`
  font-size: ${rem('18px')};
  line-height: 1.5;
`;

const H3 = styled(Heading3)`
  color: ${themed('color.textAccent')};
  font-size: ${rem('18px')};

  ${mediaQuery.small`
    font-size: ${rem('20px')};
  `};

  ${mediaQuery.medium`
    font-size: ${rem('24px')};
  `};
`;

const Wrapper = styled.div`
  margin-bottom: ${rem(48)};
  margin-top: ${rem(48)};
`;

function JobExcerpt({ children, heading, url }) {
  return (
    <Wrapper>
      <H3 dark>{heading}</H3>
      <P>{children}</P>
      <A href={url}>Learn More</A>
    </Wrapper>
  );
}

JobExcerpt.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default JobExcerpt;
