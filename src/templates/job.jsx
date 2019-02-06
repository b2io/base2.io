import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import styled, { ThemeProvider } from 'styled-components';
import { rem } from 'polished';
import markdown from '../util/templates';
import {
  GlobalNavigation,
  JobDescription,
  JobsHeader,
  Main,
  H2,
  H3,
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

const renderMarkdown = raw =>
  markdown(raw, {
    h2: Heading,
    h3: SubHeading,
  });

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
      children: renderMarkdown(data.job.internal.content),
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
