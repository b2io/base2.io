import React from 'react';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import styled, { css } from 'styled-components';
import { mediaQuery, themed } from '../../util/style';
import { A as Anchor, H3 as Heading3, P } from '../atoms';

const text = css`
  font-size: ${rem('18px')};
  line-height: 1.5;
`;

const A = styled(Anchor)`
  ${text};
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

const Text = styled(P)`
  ${text};
`;

const Wrapper = styled.div`
  margin-bottom: ${rem(48)};
  margin-top: ${rem(48)};
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
