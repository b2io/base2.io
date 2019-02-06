import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import styled, { ThemeProvider } from 'styled-components';
import grayMatter from 'gray-matter';
import { rem } from 'polished';
import remark from 'remark';
import remarkReact from 'remark-react';
import {
  GlobalNavigation,
  JobDescription,
  JobsHeader,
  Main,
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
import { mediaQuery, themed } from '../util/style';
import { darkTheme } from '../theme';

const Heading = styled(H2)`
  color: ${themed('color.textAccent')};
  font-size: ${rem('20px')};
  font-weight: 100;
  margin: 0;

  ${mediaQuery.small`
    font-size: ${rem('24px')};
  `};

  ${mediaQuery.medium`
    font-size: ${rem('36px')};
  `};
`;

const SubHeading = styled(H3)`
  color: ${themed('color.grey')};
  font-size: ${rem(28)};
`;

const HoistChildren = props =>
  React.Children.map(props.children, child => child.props.children);

const markdownToElement = md =>
  remark()
    .use(remarkReact, {
      remarkReactComponents: {
        a: A,
        blockquote: Blockquote,
        code: Code,
        del: Del,
        em: EM,
        h1: H1,
        h2: Heading,
        h3: SubHeading,
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
      },
    })
    .processSync(md).contents;

const markdown = raw => (
  <HoistChildren>{markdownToElement(grayMatter(raw).content)}</HoistChildren>
);

function JobTemplate({ job }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <GlobalNavigation />
        <JobsHeader small />
        <JobDescription {...job} />
      </Main>
    </ThemeProvider>
  );
}

JobTemplate.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.node.isRequired,
    description: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }).isRequired,
};

function mapPropsToProps({ data }) {
  return {
    job: {
      ...data.job.frontmatter,
      children: markdown(data.job.internal.content),
    },
  };
}

export default mapProps(mapPropsToProps)(JobTemplate);

export const pageQuery = graphql`
  query JobTemplateQuery($id: String!) {
    job: markdownRemark(id: { eq: $id }) {
      frontmatter {
        id
        description
        position
      }
      internal {
        content
      }
    }
  }
`;
