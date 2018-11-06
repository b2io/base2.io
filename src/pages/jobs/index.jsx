import React from 'react';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import { ThemeProvider } from 'styled-components';
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
      id: PropTypes.node.isRequired,
      description: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

JobsPage.defaultProps = {
  jobs: [],
};

function mapPropsToProps({ data }) {
  return {
    jobs: toNodes(data.jobs),
  };
}

export default mapProps(mapPropsToProps)(JobsPage);

export const pageQuery = graphql`
  query JobsPageQuery {
    jobs: allJobsJson {
      edges {
        node {
          id
          description
          position
          url
        }
      }
    }
  }
`;
