import React from 'react';
import grayMatter from 'gray-matter';
import { em, rem } from 'polished';
import remark from 'remark';
import remarkReact from 'remark-react';
import styled from 'styled-components';
import { mediaQuery } from '../util/style';

import {
  A,
  Blockquote,
  Code,
  Del,
  Em,
  H1,
  H5,
  HR,
  LI,
  P,
  Pre,
  OL,
  Strong,
  UL,
} from '../components';

const PostContentH2 = styled.h2`
  font-size: ${rem('30px')};
  margin: ${em('36px', '34px')} 0 ${em('18px', '30px')};

  ${mediaQuery.small`
    font-size: ${rem('34px')};
    margin: ${em('42px', '34px')} 0 ${em('21px', '34px')};
  `};
`;

const PostContentH3 = styled.h3`
  font-size: ${rem('20px')};
  margin: ${em('30px', '20px')} 0 ${em('14px', '20px')};

  ${mediaQuery.small`
    font-size: ${rem('24px')};
    margin: ${em('36px', '24px')} 0 ${em('16px', '24px')};
  `};
`;

const PostContentH4 = styled.h4`
  font-size: ${rem('18px')};
  margin: ${em('36px', '34px')} 0 0;

  ${mediaQuery.small`
    font-size: ${rem('21px')};
    margin: ${em('30px', '21px')} 0 ${em('16px', '21px')};
  `};
`;

const PostImg = styled.img`
  margin: ${em('18px', '18px')} 0;

  ${mediaQuery.small`
    margin: ${em('21px', '21px')} 0;
  `};
`;

export const defaultComponentMap = {
  a: A,
  blockquote: Blockquote,
  code: Code,
  del: Del,
  em: Em,
  h1: H1,
  h2: PostContentH2,
  h3: PostContentH3,
  h4: PostContentH4,
  h5: H5,
  hr: HR,
  img: PostImg,
  li: LI,
  ol: OL,
  p: P,
  pre: Pre,
  strong: Strong,
  ul: UL,
};

const markdownToElement = (md, componentMapOverrides) =>
  remark()
    .use(remarkReact, {
      remarkReactComponents: {
        ...defaultComponentMap,
        ...componentMapOverrides,
      },
    })
    .processSync(md).contents;

const markdown = (raw, componentMapOverrides) => (
  <>{markdownToElement(grayMatter(raw).content, componentMapOverrides)}</>
);

export default markdown;


