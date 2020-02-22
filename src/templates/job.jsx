import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import { ThemeProvider } from 'styled-components';
import markdown from '../util/templates';
import { GlobalNavigation, JobDescription, JobsHeader } from '../components';
import { H2, H3, LI, P, JobsMain } from '../components/organisms/jobs/common';

import { darkTheme } from '../theme';

const renderMarkdown = raw =>
  markdown(raw, {
    h2: H2,
    h3: H3,
    li: LI,
    p: P,
  });

function JobTemplate({ job }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <JobsMain>
        <GlobalNavigation />
        <JobsHeader small />
        <JobDescription {...job} />
      </JobsMain>
    </ThemeProvider>
  );
}

JobTemplate.propTypes = {
  job: PropTypes.shape({
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
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
        description
        path
        position
      }
      internal {
        content
      }
    }
  }
`;
