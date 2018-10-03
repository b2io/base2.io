import React from 'react';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import { GlobalNavigation, JobsContent, Main } from '../../components';
import { toNodes } from '../../util/graphql';

function JobsPage({ jobs }) {
  return (
    <Main>
      <GlobalNavigation />
      <JobsContent jobs={jobs} />
    </Main>
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
