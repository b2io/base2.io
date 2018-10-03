import React from 'react';
import PropTypes from 'prop-types';
import { em } from 'polished';
import styled, { css } from 'styled-components';
import { mediaQuery, themed } from '../../util/style';
import { A as Anchor, H3 as Heading3, P } from '../atoms';

const text = css`
  font-size: ${em('18px')};
  line-height: 1.35;
`;

const A = styled(Anchor)`
  ${text};
`;

const H3 = styled(Heading3)`
  color: ${themed('color.textAccent')};
  font-size: ${em('18px')};

  ${mediaQuery.small`
    font-size: ${em('20px')};
  `};

  ${mediaQuery.medium`
    font-size: ${em('24px')};
  `};
`;

const Text = styled(P)`
  ${text};
`;

const Wrapper = styled.div`
  margin-bottom: ${em(30)};
`;

function JobExcerpt({ children, heading, url }) {
  return (
    <Wrapper>
      <H3 dark>{heading}</H3>
      <Text>{children}</Text>
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
