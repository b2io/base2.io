import React from 'react';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkReact from 'remark-react';
import {
  A,
  Blockquote,
  Code,
  Del,
  EM,
  H1,
  H2,
  H3,
  H4,
  H5,
  HR,
  Img,
  LI,
  P,
  Pre,
  OL,
  Strong,
  UL,
} from '../components';

const defaultComponentMap = {
  a: A,
  blockquote: Blockquote,
  code: Code,
  del: Del,
  em: EM,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  hr: HR,
  img: Img,
  li: LI,
  ol: OL,
  p: P,
  pre: Pre,
  strong: Strong,
  ul: UL,
};

const HoistChildren = props =>
  React.Children.map(props.children, child => child.props.children);

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
  <HoistChildren>
    {markdownToElement(grayMatter(raw).content, componentMapOverrides)}
  </HoistChildren>
);

export default markdown;
