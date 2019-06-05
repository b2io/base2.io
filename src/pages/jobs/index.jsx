import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { mapProps } from 'recompose';
import { ThemeProvider } from 'styled-components';
import { graphql } from 'gatsby';
import {
  GlobalNavigation,
  JobsContent,
  JobsHeader,
  Main,
} from '../../components';
import { toNodes } from '../../util/graphql';
import { darkTheme } from '../../theme';

function JobsPage({ jobs }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <GlobalNavigation />
        <JobsHeader />
        <JobsContent jobs={jobs} />
      </Main>
    </ThemeProvider>
  );
}

JobsPage.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }),
  ),
};

JobsPage.defaultProps = {
  jobs: [],
};

function mapPropsToProps({ data }) {
  return {
    jobs: !isEmpty(data)
      ? toNodes(data.jobs, node => ({ ...node.frontmatter }))
      : [],
  };
}

export default mapProps(mapPropsToProps)(JobsPage);

export const pageQuery = graphql`
  query JobsPageQuery {
    jobs: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/_content/jobs/" }
        frontmatter: { position: { ne: null }, active: { ne: false } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            description
            path
            position
          }
        }
      }
    }
  }
`;
